import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import { ARCATEXT_APP_STORE_URL } from "@/lib/app-store";

interface AppStoreCardProps {
  /** Scrolls the page to the "how it works" walkthrough. */
  onHowItWorks: () => void;
  /** Extra classes for the card — spacing, width, etc. */
  className?: string;
}

// Apple's official App Store icon, from the App Store marketing resources
// (developer.apple.com/app-store/marketing/guidelines). Used as supplied —
// Apple's guidelines don't allow redrawing or recoloring it.
const APP_STORE_ICON = "/app-store-icon.png";

/**
 * The hero's link card: the App Store listing (primary) stacked over a
 * "See how it works" link that scrolls to the features walkthrough.
 *
 * The App Store button's text is not translated, and that is deliberate —
 * "Arcatext" is a product name and Apple keeps "App Store" in English across
 * every storefront, so it reads correctly in all 40 locales without a key. The
 * row follows `dir`, and the arrow glyph mirrors under RTL so it still points
 * "away" from the label. With no listing URL configured, the card shows only
 * the walkthrough link rather than a dead App Store button.
 */
export default function AppStoreCard({ onHowItWorks, className = "" }: AppStoreCardProps) {
  const { t } = useTranslation();

  return (
    <div
      className={`w-full max-w-md rounded-3xl border border-gray-200 bg-white/80 p-4 shadow-sm backdrop-blur sm:p-5 ${className}`}
    >
      <div className="flex flex-col gap-3">
        {ARCATEXT_APP_STORE_URL && (
          <a
            href={ARCATEXT_APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-app-store"
            className="group flex items-center gap-4 rounded-2xl bg-brand px-5 py-3.5 text-white shadow-lg shadow-blue-900/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            <img
              src={APP_STORE_ICON}
              alt=""
              aria-hidden
              className="h-12 w-12 flex-shrink-0"
            />

            <span className="flex-1 text-left">
              <span className="block text-xs font-semibold uppercase tracking-wider text-white/70">
                App Store
              </span>
              {/* Fully Latin, so pin it LTR rather than leaning on the bidi
                  algorithm to keep "Arcatext for iOS" intact on RTL pages. */}
              <span dir="ltr" className="block text-lg font-semibold leading-tight">
                Arcatext for iOS
              </span>
            </span>

            <ArrowUpRight
              aria-hidden
              className="h-5 w-5 flex-shrink-0 text-white/60 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:text-white rtl:-scale-x-100"
            />
          </a>
        )}

        <button
          type="button"
          onClick={onHowItWorks}
          data-testid="button-learn-more"
          className="flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-5 py-3.5 text-lg font-semibold text-secondary transition-colors duration-200 hover:border-gray-400 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          {t("hero.learnMore")}
        </button>
      </div>
    </div>
  );
}
