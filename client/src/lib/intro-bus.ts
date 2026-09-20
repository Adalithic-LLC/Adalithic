// Tiny cross-component signal bus for the homepage intro animation.
//
// The Hero component orchestrates the flying-icon sequence, but the final
// step — the I-beam logo "constructing" itself in the top nav bar — lives in
// a different component (Navigation). This bus lets the Hero tell the nav when
// to build, without threading refs/props through the whole tree.
//
// The nav's build is cued by scroll, not by the intro's timeline: the Hero
// fires it when the App Store card (which shows the same app icon) has
// scrolled up out of sight, so the icon is only ever in one place at a time.
//
// Phases:
//   idle     – no intro is playing (e.g. a legal page with no Hero)
//   armed    – a Hero mounted; nav should wait for its cue
//   building – Hero fired the "construct the nav logo now" signal
export type IntroPhase = "idle" | "armed" | "building";

type Listener = (phase: IntroPhase) => void;

const listeners = new Set<Listener>();
let current: IntroPhase = "idle";

export const introBus = {
  get phase(): IntroPhase {
    return current;
  },
  set(phase: IntroPhase) {
    current = phase;
    listeners.forEach((l) => l(phase));
  },
  subscribe(l: Listener): () => void {
    listeners.add(l);
    return () => listeners.delete(l);
  },
};
