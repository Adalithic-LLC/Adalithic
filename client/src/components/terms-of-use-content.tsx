// Dispatcher for the Arcatext Terms of Use. English is the authoritative source
// (legal/terms/en.tsx); the other locales are convenience translations selected
// from the active URL locale, falling back to English. Rendered both in the
// homepage About modal (about.tsx) and on the /terms page.
import { useLocale } from "@/lib/locale";
import { ConvenienceBanner } from "@/components/legal/ConvenienceBanner";
import { TermsEn } from "@/components/legal/terms/en";
import { TermsEs } from "@/components/legal/terms/es";
import { TermsFr } from "@/components/legal/terms/fr";
import { TermsDe } from "@/components/legal/terms/de";
import { TermsJa } from "@/components/legal/terms/ja";
import { TermsIt } from "@/components/legal/terms/it";
import { TermsPl } from "@/components/legal/terms/pl";
import { TermsNl } from "@/components/legal/terms/nl";
import { TermsPt } from "@/components/legal/terms/pt";
import { TermsZh } from "@/components/legal/terms/zh";
import { TermsKo } from "@/components/legal/terms/ko";
import { TermsTr } from "@/components/legal/terms/tr";
import { TermsEl } from "@/components/legal/terms/el";
import { TermsAr } from "@/components/legal/terms/ar";
import { TermsHe } from "@/components/legal/terms/he";
import { TermsSv } from "@/components/legal/terms/sv";
import { TermsCs } from "@/components/legal/terms/cs";
import { TermsRo } from "@/components/legal/terms/ro";
import { TermsHu } from "@/components/legal/terms/hu";
import { TermsDa } from "@/components/legal/terms/da";
import { TermsFi } from "@/components/legal/terms/fi";
import { TermsNo } from "@/components/legal/terms/no";
import { TermsBg } from "@/components/legal/terms/bg";
import { TermsVi } from "@/components/legal/terms/vi";
import { TermsTh } from "@/components/legal/terms/th";
import { TermsId } from "@/components/legal/terms/id";
import { TermsHi } from "@/components/legal/terms/hi";
import { TermsRu } from "@/components/legal/terms/ru";
import { TermsUk } from "@/components/legal/terms/uk";
import { TermsZhHant } from "@/components/legal/terms/zh-Hant";
import { TermsBn } from "@/components/legal/terms/bn";
import { TermsTa } from "@/components/legal/terms/ta";
import { TermsTe } from "@/components/legal/terms/te";
import { TermsMr } from "@/components/legal/terms/mr";
import { TermsUr } from "@/components/legal/terms/ur";
import { TermsFa } from "@/components/legal/terms/fa";
import { TermsMs } from "@/components/legal/terms/ms";
import { TermsFil } from "@/components/legal/terms/fil";
import { TermsSw } from "@/components/legal/terms/sw";
import { TermsPa } from "@/components/legal/terms/pa";

export function TermsOfUseContent() {
  const { locale } = useLocale();
  switch (locale) {
    case "es":
      return (
        <>
          <ConvenienceBanner />
          <TermsEs />
        </>
      );
    case "fr":
      return (
        <>
          <ConvenienceBanner />
          <TermsFr />
        </>
      );
    case "de":
      return (
        <>
          <ConvenienceBanner />
          <TermsDe />
        </>
      );
    case "ja":
      return (
        <>
          <ConvenienceBanner />
          <TermsJa />
        </>
      );
    case "it":
      return (
        <>
          <ConvenienceBanner />
          <TermsIt />
        </>
      );
    case "pl":
      return (
        <>
          <ConvenienceBanner />
          <TermsPl />
        </>
      );
    case "nl":
      return (
        <>
          <ConvenienceBanner />
          <TermsNl />
        </>
      );
    case "pt":
      return (
        <>
          <ConvenienceBanner />
          <TermsPt />
        </>
      );
    case "zh":
      return (
        <>
          <ConvenienceBanner />
          <TermsZh />
        </>
      );
    case "ko":
      return (
        <>
          <ConvenienceBanner />
          <TermsKo />
        </>
      );
    case "tr":
      return (
        <>
          <ConvenienceBanner />
          <TermsTr />
        </>
      );
    case "el":
      return (
        <>
          <ConvenienceBanner />
          <TermsEl />
        </>
      );
    case "ar":
      return (
        <>
          <ConvenienceBanner />
          <TermsAr />
        </>
      );
    case "he":
      return (
        <>
          <ConvenienceBanner />
          <TermsHe />
        </>
      );
    case "sv":
      return (
        <>
          <ConvenienceBanner />
          <TermsSv />
        </>
      );
    case "cs":
      return (
        <>
          <ConvenienceBanner />
          <TermsCs />
        </>
      );
    case "ro":
      return (
        <>
          <ConvenienceBanner />
          <TermsRo />
        </>
      );
    case "hu":
      return (
        <>
          <ConvenienceBanner />
          <TermsHu />
        </>
      );
    case "da":
      return (
        <>
          <ConvenienceBanner />
          <TermsDa />
        </>
      );
    case "fi":
      return (
        <>
          <ConvenienceBanner />
          <TermsFi />
        </>
      );
    case "no":
      return (
        <>
          <ConvenienceBanner />
          <TermsNo />
        </>
      );
    case "bg":
      return (
        <>
          <ConvenienceBanner />
          <TermsBg />
        </>
      );
    case "vi":
      return (
        <>
          <ConvenienceBanner />
          <TermsVi />
        </>
      );
    case "th":
      return (
        <>
          <ConvenienceBanner />
          <TermsTh />
        </>
      );
    case "id":
      return (
        <>
          <ConvenienceBanner />
          <TermsId />
        </>
      );
    case "hi":
      return (
        <>
          <ConvenienceBanner />
          <TermsHi />
        </>
      );
    case "ru":
      return (
        <>
          <ConvenienceBanner />
          <TermsRu />
        </>
      );
    case "uk":
      return (
        <>
          <ConvenienceBanner />
          <TermsUk />
        </>
      );
    case "zh-Hant":
      return (
        <>
          <ConvenienceBanner />
          <TermsZhHant />
        </>
      );
    case "bn":
      return (
        <>
          <ConvenienceBanner />
          <TermsBn />
        </>
      );
    case "ta":
      return (
        <>
          <ConvenienceBanner />
          <TermsTa />
        </>
      );
    case "te":
      return (
        <>
          <ConvenienceBanner />
          <TermsTe />
        </>
      );
    case "mr":
      return (
        <>
          <ConvenienceBanner />
          <TermsMr />
        </>
      );
    case "ur":
      return (
        <>
          <ConvenienceBanner />
          <TermsUr />
        </>
      );
    case "fa":
      return (
        <>
          <ConvenienceBanner />
          <TermsFa />
        </>
      );
    case "ms":
      return (
        <>
          <ConvenienceBanner />
          <TermsMs />
        </>
      );
    case "fil":
      return (
        <>
          <ConvenienceBanner />
          <TermsFil />
        </>
      );
    case "sw":
      return (
        <>
          <ConvenienceBanner />
          <TermsSw />
        </>
      );
    case "pa":
      return (
        <>
          <ConvenienceBanner />
          <TermsPa />
        </>
      );
    default:
      return <TermsEn />;
  }
}
