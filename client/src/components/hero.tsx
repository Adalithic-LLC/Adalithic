import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ArcatextIntro from "./arcatext-intro";
import AppStoreCard from "./app-store-card";
import HeroKeyboardAnimation from "./hero-keyboard-animation";
import { introBus } from "@/lib/intro-bus";

// The blue used by the keyboard's sent bubbles / send button.
const BUBBLE_BLUE = "#0A7AFF";

type Flyer = {
  text: string;
  startLeft: number;
  startTop: number;
  endLeft: number;
  endTop: number;
  endFont: number;
  endLineHeight: number;
  endColor: string;
  maxW: number;
  // The flyer renders at the final font size and is scaled DOWN for the bubble
  // phase (a transform scale animates smoothly, unlike font-size), so it grows
  // to the subheader with no jump. startScale makes it look like a sent message.
  startScale: number;
};

// Design width of the keyboard widget, used to recover its on-screen scale.
const WIDGET_DESIGN_W = 402;
// A sent message bubble's text size (px, design) inside the widget.
const SENT_BUBBLE_FONT = 17;

// Height of the fixed nav bar (h-16), which overlays the top of the viewport.
const NAV_HEIGHT = 64;

export default function Hero() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const subheaderText = t("hero.tagline");

  // --- Page-load intro animation orchestration ---
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [typingActive, setTypingActive] = useState(false);
  const [fieldHighlight, setFieldHighlight] = useState(false);
  const introTimers = useRef<number[]>([]);

  // The subheader is delivered by the keyboard: it types and "sends" the
  // subheader text, then a message bubble flies up from the keyboard, scales up
  // to subheader size, and — at its resting point — sheds its bubble (background
  // fades, text turns black) to become the real subheader. It stays hidden until
  // the flyer lands (or immediately, under reduced motion).
  const [subheaderShown, setSubheaderShown] = useState(false);
  const [flyer, setFlyer] = useState<Flyer | null>(null);

  useEffect(() => {
    if (reduceMotion) setSubheaderShown(true);
  }, [reduceMotion]);

  // The keyboard has typed and "sent" the subheader — launch the flyer from just
  // above the input field up to the subheader's resting position.
  const handleSubheaderSend = useCallback(() => {
    const field = fieldRef.current?.getBoundingClientRect();
    const tagEl = taglineRef.current;
    const tag = tagEl?.getBoundingClientRect();
    if (!field || !tagEl || !tag) {
      setSubheaderShown(true);
      return;
    }
    const cs = getComputedStyle(tagEl);
    // The keyboard widget is rendered at a scale; its sent bubbles are therefore
    // SENT_BUBBLE_FONT * scale on screen. Match that so the flyer starts exactly
    // the size of a sent message.
    const widget = document.querySelector('[role="img"]');
    const widgetScale = widget ? widget.getBoundingClientRect().width / WIDGET_DESIGN_W : 1;
    const endFont = parseFloat(cs.fontSize);
    setFlyer({
      text: subheaderText,
      startLeft: field.left + field.width / 2,
      startTop: field.top - 22,
      endLeft: tag.left + tag.width / 2,
      endTop: tag.top + tag.height / 2,
      endFont,
      endLineHeight: parseFloat(cs.lineHeight) || endFont * 1.3,
      endColor: cs.color,
      // Wrap within the subheader's own width so the flyer lines up with the
      // real subheader at the end — one line on desktop, two on narrow screens.
      maxW: tag.width,
      // Scaled so the (final-size) text renders at a sent message's on-screen
      // size during the bubble phase.
      startScale: (SENT_BUBBLE_FONT * widgetScale) / endFont,
    });
  }, [subheaderText]);

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

  // The icon "clicked" and released — begin typing and fade the highlight back
  // out. (The nav's logo is not cued here; see the scroll observer below.)
  const handleRelease = useCallback(() => {
    setTypingActive(true);
    introTimers.current.push(
      window.setTimeout(() => setFieldHighlight(false), 700)
    );
  }, []);

  // Cue the nav to build its I-beam once the App Store card has scrolled up
  // out of sight, so the app icon is only ever in one place at a time: in the
  // card while it is on screen, in the nav after it is gone.
  //
  // The observer's root is inset by the fixed nav's height, so "out of sight"
  // means out from BEHIND the nav rather than merely past the viewport edge —
  // otherwise the cue would fire while the card is still showing through.
  //
  // It fires once and is never reversed: nothing resets the bus or the nav's
  // build state, so scrolling back up leaves the nav icon in place for good.
  useEffect(() => {
    const el = cardRef.current;
    if (!el || introBus.phase === "building") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // `!isIntersecting` alone would also fire if the card ever left
        // downward; require that it went up, past the nav.
        if (!entry.isIntersecting && entry.boundingClientRect.bottom <= NAV_HEIGHT) {
          observer.disconnect();
          introBus.set("building");
        }
      },
      { threshold: 0, rootMargin: `-${NAV_HEIGHT}px 0px 0px 0px` },
    );
    observer.observe(el);
    return () => observer.disconnect();
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

      {/* Subheader delivery: a sent message bubble lingers above the keyboard
          for a beat, then flies up and scales to subheader size (still a blue
          bubble); at its resting point the bubble background fades and the text
          turns black, becoming the real subheader. */}
      {flyer && (
        <motion.div
          aria-hidden
          // Explicit width (the subheader's own width) + centered text, so the
          // text wraps EXACTLY like the real subheader — a fixed element sized
          // shrink-to-fit would instead be clipped by its `left`, wrapping
          // differently and reflowing at the swap.
          style={{
            position: "fixed",
            zIndex: 50,
            width: flyer.maxW,
            textAlign: "center",
            transformOrigin: "center center",
            pointerEvents: "none",
          }}
          // Keep the element centered on (left, top) while framer drives the
          // scale transform (font-size doesn't animate reliably; scale does).
          transformTemplate={(_, generated) => `translate(-50%, -50%) ${generated}`}
          initial={{ left: flyer.startLeft, top: flyer.startTop, scale: flyer.startScale }}
          animate={{
            left: [flyer.startLeft, flyer.startLeft, flyer.endLeft, flyer.endLeft],
            top: [flyer.startTop, flyer.startTop, flyer.endTop, flyer.endTop],
            scale: [flyer.startScale, flyer.startScale, 1, 1],
          }}
          transition={{ duration: 1.5, times: [0, 0.33, 0.82, 1], ease: "easeInOut" }}
          onAnimationComplete={() => {
            setSubheaderShown(true);
            setFlyer(null);
          }}
        >
          {/* Inline-block hugs the text so the bubble background wraps it. */}
          <span style={{ position: "relative", display: "inline-block", maxWidth: "100%" }}>
            {/* Bubble background on its own layer, inset OUTWARD from the text, so
                its padding never changes how the text wraps — the text lays out
                exactly like the real subheader the whole way, then the bubble
                just fades away at the resting point. */}
            <motion.div
              style={{ position: "absolute", top: -11, bottom: -11, left: -20, right: -20, zIndex: -1 }}
              initial={{ backgroundColor: BUBBLE_BLUE, borderRadius: 26 }}
              animate={{
                backgroundColor: [BUBBLE_BLUE, BUBBLE_BLUE, BUBBLE_BLUE, "rgba(10,122,255,0)"],
                borderRadius: [26, 26, 26, 6],
              }}
              transition={{ duration: 1.5, times: [0, 0.33, 0.82, 1], ease: "easeInOut" }}
            />
            <motion.div
              style={{
                position: "relative",
                textAlign: "center",
                fontSize: flyer.endFont,
                lineHeight: `${flyer.endLineHeight}px`,
              }}
              initial={{ color: "#ffffff", fontWeight: 400 }}
              animate={{
                color: ["#ffffff", "#ffffff", "#ffffff", flyer.endColor],
                fontWeight: [400, 400, 400, 700],
              }}
              transition={{ duration: 1.5, times: [0, 0.33, 0.82, 1], ease: "easeInOut" }}
            >
              {flyer.text}
            </motion.div>
          </span>
        </motion.div>
      )}

      {/* Soft brand glow behind the hero content. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[520px] w-[820px] max-w-full -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(0,64,221,0.18), transparent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* App Store card — above the headline, so the listing is the first
              thing on the page rather than the last. Scrolling it out of sight
              is what hands the app icon over to the nav. */}
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-10 flex justify-center"
          >
            <AppStoreCard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
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

            {/* Subheader — hidden until the keyboard "sends" it and the flyer
                lands in its place (kept in layout so the flyer can measure it). */}
            <p
              ref={taglineRef}
              className="text-xl md:text-2xl font-bold text-secondary"
              style={{ opacity: subheaderShown ? 1 : 0 }}
            >
              {subheaderText}
            </p>
          </motion.div>

          {/* Live keyboard animation. The page-load logo flies into its text
              field and, on "click", it types and sends the subheader (which
              flies up into place), then types, Rewords and sends the
              conversation, each message pushing the last up the stack. */}
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
              subheaderText={subheaderText}
              onSubheaderSend={handleSubheaderSend}
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
