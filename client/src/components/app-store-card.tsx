import { ArrowUpRight } from "lucide-react";
import { ARCATEXT_APP_STORE_URL } from "@/lib/app-store";

// The Arcatext app icon (blue I-beam text cursor) as shipped to the App Store:
// an opaque square PNG with a white background. Here it is framed in a rounded
// tile — the same squircle-ish corner radius iOS applies to a home-screen icon
// — so the white background reads as the icon's own canvas rather than as a
// stray white box. (The hero's fly-in icon instead composites it with
// `mix-blend-mode: multiply`; see arcatext-intro.tsx.)
const APP_ICON = "/AppIcon.png";

interface AppStoreCardProps {
  /** Extra classes for the link itself — spacing, width, etc. */
  className?: string;
}

/**
 * The App Store card: app icon + "Arcatext for iOS", linking to the listing.
 *
 * Neither line is translated, and that is deliberate — "Arcatext" is a product
 * name and Apple keeps "App Store" in English across every storefront, so the
 * card reads correctly in all 40 locales without a translation key. It is
 * direction-aware: the icon/label/arrow row follows `dir`, and the arrow glyph
 * mirrors under RTL so it still points "away" from the label.
 */
export default function AppStoreCard({ className = "" }: AppStoreCardProps) {
  if (!ARCATEXT_APP_STORE_URL) return null;

  return (
    <a
      href={ARCATEXT_APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="link-app-store"
      className={`group inline-flex items-center gap-4 rounded-3xl bg-white/90 px-5 py-4 shadow-sm ring-1 ring-black/5 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg hover:shadow-blue-900/10 hover:ring-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${className}`}
    >
      <span className="flex h-14 w-14 flex-shrink-0 overflow-hidden rounded-[22%] bg-white ring-1 ring-black/10">
        <img
          src={APP_ICON}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
      </span>

      <span className="text-left">
        <span className="block text-xs font-semibold uppercase tracking-wider text-brand">
          App Store
        </span>
        {/* Fully Latin, so pin it LTR rather than leaning on the bidi
            algorithm to keep "Arcatext for iOS" intact on RTL pages. */}
        <span
          dir="ltr"
          className="block text-lg font-semibold leading-tight text-secondary"
        >
          Arcatext for iOS
        </span>
      </span>

      <ArrowUpRight
        aria-hidden
        className="h-5 w-5 flex-shrink-0 text-gray-400 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:text-brand rtl:-scale-x-100"
      />
    </a>
  );
}
