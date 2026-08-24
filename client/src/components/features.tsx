import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import RewordKeyboard from "@/components/reword-keyboard";

// Each feature focuses on a single value Arcatext delivers, paired with the
// visual that demonstrates it. Most rows use an in-app screenshot from the
// public directory (absolute paths so they resolve from any locale URL depth);
// the opening Reword row instead renders the keyboard surface itself, shared
// with the hero. Copy is pulled from i18n under `features.items.<key>`; missing
// translations fall back to English (the authoritative source language).
type Feature = {
  key: string;
  /** Screenshot path, or omitted when the row renders its own visual. */
  image?: string;
  /** Rendered in place of the screenshot. */
  visual?: () => JSX.Element;
};

const FEATURES: Feature[] = [
  { key: "reword", visual: () => <RewordKeyboard /> },
  { key: "receive", image: "/pasteview.png" },
  { key: "homographs", image: "/homographs.png" },
  { key: "reverse", image: "/reverse-translations.png" },
  { key: "recipient", image: "/reword-options.png" },
  { key: "synonyms", image: "/synonyms.png" },
  { key: "copy", image: "/copy.png" },
];

function FeatureRow({
  featureKey,
  image,
  visual,
  index,
}: Omit<Feature, "key"> & { featureKey: string; index: number }) {
  const { t } = useTranslation();
  const reversed = index % 2 === 1;
  const base = `features.items.${featureKey}`;
  const bullets = t(`${base}.bullets`, { returnObjects: true }) as string[];

  return (
    // The text column slides in from ±40px outside its own column. Without a
    // clip that overhang sits beyond the page's right edge from first paint —
    // every row below the fold still holds its `initial` offset, so the whole
    // document gains ~24px of scrollable width and the page pans sideways until
    // you scroll far enough for `whileInView` to fire. Clip on the x axis only
    // (overflow-y stays `visible`) so the screenshot's soft shadow still bleeds
    // above and below the row.
    <div className="grid grid-cols-1 items-center gap-12 overflow-x-clip lg:grid-cols-2 lg:gap-20">
      {/* Text column */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={reversed ? "lg:order-2" : "lg:order-1"}
      >
        <h3 className="text-3xl md:text-4xl font-bold text-secondary leading-tight">
          {t(`${base}.title`)}
        </h3>
        <p className="mt-5 text-lg text-gray-600 leading-relaxed">
          {t(`${base}.description`)}
        </p>
        <ul className="mt-8 space-y-3">
          {Array.isArray(bullets) &&
            bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#0040DD]/10">
                  <Check className="h-4 w-4 text-brand" />
                </span>
                <span className="text-base text-gray-700">{bullet}</span>
              </li>
            ))}
        </ul>
      </motion.div>

      {/* Screenshot column */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className={`flex justify-center ${reversed ? "lg:order-1" : "lg:order-2"}`}
      >
        {visual ? (
          visual()
        ) : (
          <div className="rounded-[2rem] bg-cream p-3 shadow-2xl shadow-blue-900/10 ring-1 ring-black/5">
            <img
              src={image}
              alt={t(`${base}.alt`)}
              loading="lazy"
              className="w-auto h-[460px] md:h-[560px] rounded-[1.4rem] object-contain"
            />
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default function Features() {
  const { t } = useTranslation();

  return (
    <section id="features" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            {t("features.eyebrow")}
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-secondary leading-tight">
            {t("features.title")}
          </h2>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            {t("features.subtitle")}
          </p>
        </motion.div>

        {/* Alternating single-value sections */}
        <div className="mt-24 space-y-28 md:space-y-36">
          {FEATURES.map((feature, index) => (
            <FeatureRow
              key={feature.key}
              featureKey={feature.key}
              image={feature.image}
              visual={feature.visual}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
