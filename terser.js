const fs = require('fs');
const path = require('path');
const { minify } = require('terser');

// Function to recursively get all .js files in a directory
const getAllJsFiles = (dir) => {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        file = path.resolve(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            // Recurse into subdirectory
            results = results.concat(getAllJsFiles(file));
        } else if (file.endsWith('.js')) {
            results.push(file);
        }
    });
    return results;
};

// Function to obfuscate a single .js file
const obfuscateFile = async (filePath) => {
    try {
        const code = fs.readFileSync(filePath, 'utf8');
        const result = await minify(code, { mangle: true, compress: true });
        if (result.error) throw result.error;
        fs.writeFileSync(filePath, result.code, 'utf8');
        console.log(`Obfuscated: ${filePath}`);
    } catch (err) {
        console.error(`Error obfuscating ${filePath}: ${err}`);
    }
};

// Main function to obfuscate all .js files in a directory
const obfuscateDirectory = async (dir) => {
    const files = getAllJsFiles(dir);
    for (const file of files) {
        await obfuscateFile(file);
    }
};

// Run the obfuscation on the specified directory
const targetDir = path.resolve('./public/underwriting'); // Change this to your target directory
obfuscateDirectory(targetDir).then(() => {
    console.log('Obfuscation complete.');
});