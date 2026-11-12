import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "../locales/en/translation";
import ru from "../locales/ru/translation";
import kk from "../locales/kk/translation";
import zh from "../locales/zh/translation";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: Object.fromEntries(
      Object.entries({ en, ru, kk, zh }).map(([lng, translation]) => [
        lng,
        { translation },
      ]),
    ),
    fallbackLng: "kk",
    supportedLngs: ["kk", "ru", "en", "zh"],
    load: "languageOnly",
    detection: { order: ["localStorage"], caches: ["localStorage"] },
    interpolation: { escapeValue: false },
  });
export default i18n;
