/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for the app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export in this file.
 */
import { DEFAULT_LOCALE } from './constants';

const enTranslationMessages = require('Messages/en.json');

// prettier-ignore
export const appLocales = [
  'en',
];

export const formatTranslationMessages = (locale: string, messages: object) => {
  const defaultFormattedMessages: object =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  const flattenFormattedMessages = (formattedMessages: object, key: string) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return {...formattedMessages,  [key]: formattedMessage};
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
};
