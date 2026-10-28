import { DISCIPLINES } from "@/data/profile";
import FadeIn from "@/components/motion/FadeIn";

export default function HeroFoot() {
  return (
    <FadeIn
      delay={0.9}
      className="type-label flex items-center justify-between gap-6 border-t border-hairline pt-5 text-label-tertiary"
    >
      <a href="#showreel" className="inline-flex items-center gap-3 text-label transition-opacity duration-300 hover:opacity-60">
        <span aria-hidden className="relative block h-8 w-px overflow-hidden bg-hairline-strong">
          <span className="absolute inset-x-0 top-0 h-2/5 animate-scroll-line bg-accent" />
        </span>
        Scroll to explore
      </a>
      <p className="hidden md:block">{DISCIPLINES.join("  ·  ")}</p>
    </FadeIn>
  );
}
