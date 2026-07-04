import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";
import de from "./locales/de.json";
import ja from "./locales/ja.json";
import { DEFAULT_LOCALE, getLocaleFromPath } from "@/lib/locale";

// The active language is driven by the URL path (path-based locales), so we seed
// i18next from the current pathname and let LocaleSync keep it in step on
// navigation. Missing keys fall back to English, which is the authoritative
// source language.
const initialLng =
  typeof window !== "undefined"
    ? getLocaleFromPath(window.location.pathname)
    : DEFAULT_LOCALE;

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
    fr: { translation: fr },
    de: { translation: de },
    ja: { translation: ja },
  },
  lng: initialLng,
  fallbackLng: DEFAULT_LOCALE,
  interpolation: { escapeValue: false },
});

export default i18n;
