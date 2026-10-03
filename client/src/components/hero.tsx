import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ArcatextIntro from "./arcatext-intro";
import AppStoreCard from "./app-store-card";
import HeroKeyboardAnimation from "./hero-keyboard-animation";
import { introBus } from "@/lib/intro-bus";

export default function Hero() {
  const { t } = useTranslation();

  // --- Page-load intro animation orchestration ---
  const titleRef = useRef<HTMLHeadingElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [typingActive, setTypingActive] = useState(false);
  const [fieldHighlight, setFieldHighlight] = useState(false);
  const introTimers = useRef<number[]>([]);

  // Announce to the nav that an intro will play (so its logo waits to build),
  // and reset on unmount.
  useLayoutEffect(() => {
    introBus.set("armed");
    return () => {
      introBus.set("idle");
      introTimers.current.forEach((id) => clearTimeout(id));
    };
  }, []);

  // The icon has landed in the typewriter field — light it up like a focused
  // text input.
  const handleLand = useCallback(() => setFieldHighlight(true), []);

  // The icon "clicked" and released — begin typing, fade the highlight back
  // out, and cue the nav to build its I-beam. The fly-in icon vanishes at this
  // moment and nothing else in the hero shows the app icon, so handing it to
  // the nav here keeps it in exactly one place at a time.
  const handleRelease = useCallback(() => {
    setTypingActive(true);
    if (introBus.phase !== "building") introBus.set("building");
    introTimers.current.push(
      window.setTimeout(() => setFieldHighlight(false), 700)
    );
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-hero pt-28 pb-20 md:pt-32">
      {/* Page-load flourish: the app icon scans the headline, shrinks into the
          keyboard's input field, "clicks" it, then hands off to the typing. */}
      <ArcatextIntro
        titleRef={titleRef}
        fieldRef={fieldRef}
        onLand={handleLand}
        onRelease={handleRelease}
      />

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
              ref={titleRef}
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

          {/* Live keyboard animation, below everything else. The page-load
              logo flies into its text field and, on "click", it types, Rewords
              and sends the conversation, each message pushing the last up the
              stack and fading out before it reaches the card. */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="mt-8 flex justify-center"
          >
            <HeroKeyboardAnimation
              active={typingActive}
              focused={fieldHighlight}
              inputRef={fieldRef}
              ceilingRef={cardRef}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
