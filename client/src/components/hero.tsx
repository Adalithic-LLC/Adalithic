import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ArcatextIntro from "./arcatext-intro";
import HeroKeyboardAnimation from "./hero-keyboard-animation";
import { introBus } from "@/lib/intro-bus";

export default function Hero() {
  const { t } = useTranslation();

  // --- Page-load intro animation orchestration ---
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
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
  // out, and (1s later) have the nav build its logo.
  const handleRelease = useCallback(() => {
    setTypingActive(true);
    introTimers.current.push(
      window.setTimeout(() => setFieldHighlight(false), 700)
    );
    introTimers.current.push(
      window.setTimeout(() => introBus.set("building"), 1000)
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
          typewriter field, "clicks" it, then hands off to the typing. */}
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
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-7"
          >
            <h1
              ref={titleRef}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-secondary leading-[1.05]"
            >
              <Trans
                i18nKey="hero.title"
                components={{ brand: <span className="text-brand" /> }}
              />
            </h1>

            <p ref={taglineRef} className="text-xl md:text-2xl font-bold text-secondary">
              {t("hero.tagline")}
            </p>
          </motion.div>

          {/* Live keyboard animation — moved up into the space the CTA buttons
              used to occupy. The page-load logo flies into its text field and,
              on "click", the first message begins typing; from there it types,
              Rewords and sends, and each message floats away. */}
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
              taglineRef={taglineRef}
              titleRef={titleRef}
            />
          </motion.div>

          {/* CTA buttons — now below the animation. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("features")}
              className="group bg-brand hover:bg-[#0036BB] text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-blue-900/10 transition-all duration-200"
              data-testid="button-learn-more"
            >
              {t("hero.learnMore")}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="border-gray-300 bg-white/70 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
              data-testid="button-get-in-touch"
            >
              {t("hero.getInTouch")}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
