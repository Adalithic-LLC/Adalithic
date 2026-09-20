import ArcatextIBeam from "@/components/arcatext-ibeam";

interface NavBrandLogoProps {
  /** Final total height of the I-beam in px. */
  size?: number;
}

/**
 * The nav bar's Arcatext I-beam. The glyph, and the build animation that
 * assembles it, live in ArcatextIBeam — shared with the hero headline so the
 * two build as one synchronised motion off the same intro cue.
 */
export default function NavBrandLogo({ size = 20 }: NavBrandLogoProps) {
  return <ArcatextIBeam size={`${size}px`} />;
}
