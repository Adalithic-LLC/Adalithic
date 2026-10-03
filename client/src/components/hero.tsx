import { useEffect, useLayoutEffect, useRef } from "react";
import { Trans, useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import AppStoreCard from "./app-store-card";
import HeroKeyboardAnimation from "./hero-keyboard-animation";
import { introBus } from "@/lib/intro-bus";

export default function Hero() {
  const { t } = useTranslation();

  const cardRef = useRef<HTMLDivElement>(null);

  // Announce to the nav that the hero is here (so its logo waits for a cue
  // rather than appearing fully formed), then cue it straight away so the
  // I-beam builds as the keyboard starts typing. Reset on unmount.
  useLayoutEffect(() => {
    introBus.set("armed");
    return () => introBus.set("idle");
  }, []);
  useEffect(() => {
    introBus.set("building");
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-hero pt-28 pb-20 md:pt-32">
      {/* Soft brand glow behind the hero content. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[520px] w-[820px] max-w-full -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(0,64,221,0.18), transparent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Headline, then the body copy under it. */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-secondary leading-[1.05] text-balance"
            >
              <Trans
                i18nKey="hero.title"
                components={{ brand: <span className="text-brand" /> }}
              />
            </h1>

            <p className="mx-auto max-w-2xl text-lg md:text-2xl leading-relaxed text-gray-600 text-balance">
              {t("hero.body")}
            </p>
          </motion.div>

          {/* Link card: the App Store listing over "See how it works". */}
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mt-10 flex justify-center"
          >
            <AppStoreCard onHowItWorks={() => scrollToSection("features")} />
          </motion.div>

          {/* Live keyboard animation, below everything else. It starts typing
              on load, then Rewords and sends the conversation, each message
              pushing the last up the stack and fading out before it reaches
              the card. */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="mt-8 flex justify-center"
          >
            <HeroKeyboardAnimation ceilingRef={cardRef} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
