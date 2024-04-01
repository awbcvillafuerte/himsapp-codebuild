import * as crypto from 'crypto';

const fieldsToEncrypt = [
  'first_name',
  'last_name',
  'middle_name',
  'username',
  'full_name',
  'email',
];

const key = crypto
  .createHash('sha256')
  .update(String(process.env.REACT_APP_HASHING_PASSWORD))
  .digest('base64')
  .substring(0, 32);
const cipherAlgorithm = 'aes-256-gcm';

const encryptCredentials = (text: any) => {
  const initVector = crypto.randomBytes(16);
  const initVectorHex = initVector.toString('hex');
  const cipher = crypto.createCipheriv(cipherAlgorithm, key, initVector);
  const encoded = cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
  const authTag = cipher.getAuthTag().toString('hex');
  const metaAndEncoded = [authTag, initVectorHex, encoded].join('|');
  return metaAndEncoded;
};

const decryptCredentials = (text: string): string => {
  const [authTag, initVectorHex, encrypted] = text.split('|');
  const initVector = Buffer.from(initVectorHex, 'hex');
  const decipher = crypto.createDecipheriv(cipherAlgorithm, key, initVector);
  decipher.setAuthTag(Buffer.from(authTag, 'hex'));

  let decrypted = decipher
    .update(Buffer.from(encrypted, 'hex'))
    .toString('utf-8');
  decrypted += decipher.final().toString('utf-8');

  return decrypted;
};

const encryptUsers = (user: any) => {
  const encryptedUsers = { ...user };
  fieldsToEncrypt.forEach(field => {
    if (encryptedUsers[field]) {
      encryptedUsers[field] = encryptCredentials(encryptedUsers[field]);
    }
  });
  return encryptedUsers;
};

// for user list objects
const decryptUsers = (user: any) => {
  const decryptedUsers = { ...user };
  fieldsToEncrypt.forEach(field => {
    if (decryptedUsers[field]) {
      decryptedUsers[field] = decryptCredentials(decryptedUsers[field]);
    }
  });

  console.log(decryptUsers);
  return decryptedUsers;
};

const decryptKeyPairData = (
  response: any,
  fieldsToEncrypt: string[],
): Record<string, any> | null => {
  if (response === null) {
    return null;
  }

  // Mapping response to an array of key-value pairs
  let newData = response.map((res: any) => [res.key, res.value]);

  // Decrypting values
  newData.forEach(([key, value]: [string, any]) => {
    if (value !== null && fieldsToEncrypt.includes(key)) {
      newData.push([key, decryptCredentials(value)]);
    }
  });

  // Logging decrypted data
  console.log('Decrypted data:', Object.fromEntries(newData));

  // Returning decrypted data as an object
  return Object.fromEntries(newData);
};

export {
  decryptKeyPairData,
  decryptCredentials,
  encryptCredentials,
  fieldsToEncrypt,
  decryptUsers,
  encryptUsers,
};
