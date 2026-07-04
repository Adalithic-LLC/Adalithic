import { useLocation } from "wouter";

// Supported website locales. English is the source/authoritative language and
// lives at the root ("/"); the others are served under a path prefix
// ("/es", "/fr/privacy", ...). This set matches the languages the Arcatext app
// itself ships in, i.e. the markets we commit to serving.
export const LOCALES = ["en", "es", "fr", "de", "ja"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

// Non-default locales carry a URL prefix. English never does.
export const PREFIX_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  ja: "日本語",
};

export function isPrefixLocale(value: string | undefined): value is Locale {
  return !!value && (PREFIX_LOCALES as readonly string[]).includes(value);
}

// Derive the active locale from a pathname's first segment.
export function getLocaleFromPath(path: string): Locale {
  const seg = path.split("/")[1];
  return isPrefixLocale(seg) ? (seg as Locale) : DEFAULT_LOCALE;
}

// Strip the locale prefix from a path, returning the canonical base path
// (e.g. "/es/privacy" -> "/privacy", "/es" -> "/", "/privacy" -> "/privacy").
export function stripLocale(path: string): string {
  const locale = getLocaleFromPath(path);
  if (locale === DEFAULT_LOCALE) return path || "/";
  const rest = path.slice(`/${locale}`.length);
  return rest === "" ? "/" : rest;
}

// Build a locale-aware path from a canonical base path.
// localePath("/privacy", "es") -> "/es/privacy"; localePath("/", "es") -> "/es";
// any path for the default locale is returned unprefixed.
export function localePath(basePath: string, locale: Locale): string {
  const clean = basePath === "/" ? "" : basePath;
  if (locale === DEFAULT_LOCALE) return clean || "/";
  return `/${locale}${clean}`;
}

// Hook: current locale plus the canonical (locale-stripped) base path, and a
// helper to build links that stay within the active locale.
export function useLocale() {
  const [location] = useLocation();
  const locale = getLocaleFromPath(location);
  const basePath = stripLocale(location);
  const withLocale = (path: string) => localePath(path, locale);
  return { locale, basePath, withLocale };
}
