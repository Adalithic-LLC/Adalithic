// Dispatcher for the Arcatext privacy policy. English is the authoritative
// source (legal/privacy/en.tsx); the other locales are convenience translations
// selected from the active URL locale, falling back to English. Rendered both in
// the homepage About modal (about.tsx) and on the /privacy page.
import { useLocale } from "@/lib/locale";
import { ConvenienceBanner } from "@/components/legal/ConvenienceBanner";
import { PrivacyEn } from "@/components/legal/privacy/en";
import { PrivacyEs } from "@/components/legal/privacy/es";
import { PrivacyFr } from "@/components/legal/privacy/fr";
import { PrivacyDe } from "@/components/legal/privacy/de";
import { PrivacyJa } from "@/components/legal/privacy/ja";
import { PrivacyIt } from "@/components/legal/privacy/it";
import { PrivacyPl } from "@/components/legal/privacy/pl";
import { PrivacyNl } from "@/components/legal/privacy/nl";
import { PrivacyPt } from "@/components/legal/privacy/pt";

export function PrivacyPolicyContent() {
  const { locale } = useLocale();
  switch (locale) {
    case "es":
      return (
        <>
          <ConvenienceBanner />
          <PrivacyEs />
        </>
      );
    case "fr":
      return (
        <>
          <ConvenienceBanner />
          <PrivacyFr />
        </>
      );
    case "de":
      return (
        <>
          <ConvenienceBanner />
          <PrivacyDe />
        </>
      );
    case "ja":
      return (
        <>
          <ConvenienceBanner />
          <PrivacyJa />
        </>
      );
    case "it":
      return (
        <>
          <ConvenienceBanner />
          <PrivacyIt />
        </>
      );
    case "pl":
      return (
        <>
          <ConvenienceBanner />
          <PrivacyPl />
        </>
      );
    case "nl":
      return (
        <>
          <ConvenienceBanner />
          <PrivacyNl />
        </>
      );
    case "pt":
      return (
        <>
          <ConvenienceBanner />
          <PrivacyPt />
        </>
      );
    default:
      return <PrivacyEn />;
  }
}
