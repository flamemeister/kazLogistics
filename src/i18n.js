import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation';
import translationRU from './locales/ru/translation';

const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  }
};

i18n
  .use(LanguageDetector) // Detect browser language
  .use(initReactI18next) // Connect with React
  .init({
    resources,
    fallbackLng: 'en', // default language
    interpolation: {
      escapeValue: false // react already handles escaping
    }
  });

export default i18n;
