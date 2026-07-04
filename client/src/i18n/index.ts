import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";
import de from "./locales/de.json";
import ja from "./locales/ja.json";
import it from "./locales/it.json";
import pl from "./locales/pl.json";
import nl from "./locales/nl.json";
import pt from "./locales/pt.json";
import zh from "./locales/zh.json";
import ko from "./locales/ko.json";
import tr from "./locales/tr.json";
import el from "./locales/el.json";
import ar from "./locales/ar.json";
import he from "./locales/he.json";
import sv from "./locales/sv.json";
import cs from "./locales/cs.json";
import ro from "./locales/ro.json";
import hu from "./locales/hu.json";
import da from "./locales/da.json";
import fi from "./locales/fi.json";
import no from "./locales/no.json";
import bg from "./locales/bg.json";
import vi from "./locales/vi.json";
import th from "./locales/th.json";
import id from "./locales/id.json";
import hi from "./locales/hi.json";
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
    it: { translation: it },
    pl: { translation: pl },
    nl: { translation: nl },
    pt: { translation: pt },
    zh: { translation: zh },
    ko: { translation: ko },
    tr: { translation: tr },
    el: { translation: el },
    ar: { translation: ar },
    he: { translation: he },
    sv: { translation: sv },
    cs: { translation: cs },
    ro: { translation: ro },
    hu: { translation: hu },
    da: { translation: da },
    fi: { translation: fi },
    no: { translation: no },
    bg: { translation: bg },
    vi: { translation: vi },
    th: { translation: th },
    id: { translation: id },
    hi: { translation: hi },
  },
  lng: initialLng,
  fallbackLng: DEFAULT_LOCALE,
  interpolation: { escapeValue: false },
});

export default i18n;
