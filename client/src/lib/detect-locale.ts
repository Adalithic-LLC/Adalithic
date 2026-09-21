// First-visit language auto-selection, based on the browser's own language
// preference (navigator.languages) — NOT IP geolocation. This runs as a side
// effect at import time, before React mounts, so there is no flash of English.
//
// Guardrails (deliberately conservative for SEO + user control):
//  - Only acts on unprefixed (English/default) URLs. A URL that already carries
//    a locale prefix (/es, /fr/privacy, …) is never touched, so crawlers and the
//    hreflang alternates that point at those URLs are unaffected.
//  - Honors a remembered choice in localStorage — including an explicit choice
//    of English — and never overrides it.
//  - Uses history.replaceState (no reload, no extra history entry).
//  - Any failure falls back silently to English.
import {
  DEFAULT_LOCALE,
  getLocaleFromPath,
  localePath,
  preferredBrowserLocale,
  readStoredLocale,
  rememberLocale,
  stripLocale,
} from "@/lib/locale";

(function autoSelectLocale() {
  try {
    if (typeof window === "undefined") return;

    const path = window.location.pathname || "/";
    // Already on a prefixed locale — respect the explicit URL, do nothing.
    if (getLocaleFromPath(path) !== DEFAULT_LOCALE) return;

    const basePath = stripLocale(path); // unprefixed path, normalized ("/", "/privacy", …)

    // The rewrite is a LOCALE CHANGE, not a navigation, so everything else the
    // visitor arrived with has to survive it. Rebuilding the URL from pathname
    // alone silently dropped the query string and fragment: a referral link of
    // the form /referral?code=HANNAH became /es/referral for every non-English
    // visitor, losing the influencer's code before React ever mounted.
    const suffix = (window.location.search || "") + (window.location.hash || "");

    // The admin ledger is English-only and has no per-locale copies on Pages,
    // so rewriting /admin/referrals to /es/admin/referrals would 404 for any
    // non-English browser — including, inconveniently, on the one page whose
    // only user is the person who deployed it.
    if (basePath === "/admin" || basePath.startsWith("/admin/")) return;

    // Returning visitor: honor the remembered choice (English included).
    const stored = readStoredLocale();
    if (stored) {
      if (stored !== DEFAULT_LOCALE) {
        window.history.replaceState(null, "", localePath(basePath, stored) + suffix);
      }
      return;
    }

    // First visit: pick from the browser's language preferences.
    const detected = preferredBrowserLocale();
    if (detected && detected !== DEFAULT_LOCALE) {
      rememberLocale(detected); // keep it consistent on later visits
      window.history.replaceState(null, "", localePath(basePath, detected) + suffix);
    }
  } catch {
    /* non-fatal: stay on English */
  }
})();
