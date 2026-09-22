import { useEffect } from "react";
import { useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import {
  DEFAULT_LOCALE,
  LOCALES,
  getLocaleFromPath,
  localePath,
  stripLocale,
} from "@/lib/locale";

const SITE = "https://adalithic.com";

function absUrl(basePath: string, locale: (typeof LOCALES)[number]): string {
  const p = localePath(basePath, locale);
  return SITE + (p === "/" ? "/" : p);
}

function setMetaDescription(content: string) {
  let el = document.querySelector('meta[name="description"]');
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", "description");
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

// Replace any runtime-managed hreflang alternates for the current page.
function setAlternates(basePath: string) {
  document.querySelectorAll('link[data-seo="alt"]').forEach((n) => n.remove());
  const add = (hreflang: string, locale: (typeof LOCALES)[number]) => {
    const link = document.createElement("link");
    link.setAttribute("rel", "alternate");
    link.setAttribute("hreflang", hreflang);
    link.setAttribute("href", absUrl(basePath, locale));
    link.setAttribute("data-seo", "alt");
    document.head.appendChild(link);
  };
  LOCALES.forEach((l) => add(l, l));
  add("x-default", DEFAULT_LOCALE);
}

// Sets document.title, meta description, canonical, and per-page hreflang
// alternates from the active URL locale + route. Runs on every navigation.
export function useSeo() {
  const [location] = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (typeof document === "undefined") return;
    const locale = getLocaleFromPath(location);
    const basePath = stripLocale(location);

    let title: string;
    let description: string;
    if (basePath === "/privacy") {
      title = `${t("legalPages.privacyTitle")} · Arcatext`;
      description = `${t("legalPages.privacyTitle")} · Arcatext by Adalithic LLC.`;
    } else if (basePath === "/terms") {
      title = `${t("legalPages.termsTitle")} · Arcatext`;
      description = `${t("legalPages.termsTitle")} · Arcatext by Adalithic LLC.`;
    } else {
      title = `Arcatext — ${t("hero.tagline")}`;
      description = t("features.subtitle");
    }

    document.title = title;
    setMetaDescription(description);
    setCanonical(absUrl(basePath, locale));
    setAlternates(basePath);
    // Re-run when the resolved language changes too (translations ready).
  }, [location, t, i18n.language]);
}
