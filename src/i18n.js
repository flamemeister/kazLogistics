import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation';
import translationRU from './locales/ru/translation';
import translationKK from './locales/kk/translation';
import translationZH from './locales/zh/translation';



const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  },
  kk: {
    translation: translationKK
  },
  zh: {
    translation: translationZH
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
  fallbackLng: {
    'zh-CN': ['zh'],
    'zh-TW': ['zh'],
    default: ['en']
  },
    interpolation: {
      escapeValue: false
    }
  });


export default i18n;
