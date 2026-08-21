import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import Redeem from "@/pages/redeem";
import NotFound from "@/pages/not-found";
import { getLocaleFromPath, isPrefixLocale, isRtl } from "@/lib/locale";
import { useSeo } from "@/lib/seo";

// Keeps i18next and the <html lang> attribute in sync with the locale encoded in
// the URL path. Path is the single source of truth for the active language.
function LocaleSync() {
  const [location] = useLocation();
  const { i18n } = useTranslation();
  useEffect(() => {
    const locale = getLocaleFromPath(location);
    if (i18n.language !== locale) i18n.changeLanguage(locale);
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
      document.documentElement.dir = isRtl(locale) ? "rtl" : "ltr";
    }
  }, [location, i18n]);
  useSeo();
  return null;
}

function Router() {
  return (
    <Switch>
      {/* English (default) at the root. */}
      <Route path="/" component={Home} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      {/* Arcatext promo redemption. Codes are handed out with the unprefixed
          URL, but detect-locale rewrites an unprefixed path to the visitor's
          browser locale on first visit — so /redeem becomes /es/redeem before
          React mounts, and the prefixed route below is what actually renders
          for most non-English visitors. The app never links here either way
          (guideline 3.1.1(a) anti-steering). */}
      <Route path="/redeem" component={Redeem} />
      {/* Prefixed locales: /es, /es/privacy, /fr/terms, ... An unknown prefix
          (e.g. /xx/privacy) falls through to NotFound. Order matters — the
          bare "/:lang" catch must come after the more specific routes. */}
      <Route path="/:lang/privacy">
        {(params) => (isPrefixLocale(params.lang) ? <Privacy /> : <NotFound />)}
      </Route>
      <Route path="/:lang/terms">
        {(params) => (isPrefixLocale(params.lang) ? <Terms /> : <NotFound />)}
      </Route>
      <Route path="/:lang/redeem">
        {(params) => (isPrefixLocale(params.lang) ? <Redeem /> : <NotFound />)}
      </Route>
      <Route path="/:lang">
        {(params) => (isPrefixLocale(params.lang) ? <Home /> : <NotFound />)}
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <LocaleSync />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
