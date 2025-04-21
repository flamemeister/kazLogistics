import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ru from './locales/ru.json';
import en from './locales/en.json';
// import kz from './locales/kz.json';
// import ch from './locales/ch.json';

i18n.use(initReactI18next).init({
  resources: {
    Рус: { translation: ru },
    Eng: { translation: en },
    // Қаз: { translation: kz },
    // 中文: { translation: ch }
  },
  lng: 'Рус',
  fallbackLng: 'Рус',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
