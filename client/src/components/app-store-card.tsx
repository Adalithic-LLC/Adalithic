import { useId } from "react";
import { useTranslation } from "react-i18next";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ARCATEXT_APP_STORE_URL } from "@/lib/app-store";

interface AppStoreCardProps {
  /** Scrolls the page to the "how it works" walkthrough. */
  onHowItWorks: () => void;
  /** Extra classes for the card — spacing, width, etc. */
  className?: string;
}

/**
 * The App Store logo: the white "A" (pencil, brush and ruler) on Apple's blue
 * gradient tile. Drawn inline so it stays crisp at any size and needs no asset.
 * The gradient id is per-instance so two cards on one page can't collide.
 */
function AppStoreLogo({ className = "" }: { className?: string }) {
  const gradientId = useId();
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#18BFFB" />
          <stop offset="1" stopColor="#2072F3" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="5.4" fill={`url(#${gradientId})`} />
      <g stroke="#fff" strokeWidth="1.7" strokeLinecap="round" fill="none">
        <path d="M13.1 6.4 7.5 16.1" />
        <path d="M10.9 6.4 16.5 16.1" />
        <path d="M6 13.6h12" />
        <path d="M6.6 17.6 6 18.6" />
      </g>
    </svg>
  );
}

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
            className="group flex items-center gap-4 rounded-2xl bg-gray-950 px-5 py-3.5 text-white shadow-lg shadow-blue-900/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            <AppStoreLogo className="h-11 w-11 flex-shrink-0" />

            <span className="flex-1 text-left">
              <span className="block text-xs font-semibold uppercase tracking-wider text-white/60">
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
              className="h-5 w-5 flex-shrink-0 text-white/50 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:text-white rtl:-scale-x-100"
            />
          </a>
        )}

        <button
          type="button"
          onClick={onHowItWorks}
          data-testid="button-learn-more"
          className="group flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-5 py-3.5 text-lg font-semibold text-secondary transition-colors duration-200 hover:border-gray-400 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          {t("hero.learnMore")}
          <ArrowDown
            aria-hidden
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5"
          />
        </button>
      </div>
    </div>
  );
}
