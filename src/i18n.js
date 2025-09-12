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
    lng: 'kk',              // всегда стартуем на казахском
    supportedLngs: ['kk', 'ru', 'en', 'zh'],
    interpolation: { escapeValue: false },
  });


export default i18n;
