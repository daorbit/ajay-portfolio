import { ArrowRight, ChevronRight } from "lucide-react";
import { PROFILE } from "@/data/profile";
import ButtonLink from "@/components/ui/ButtonLink";
import AnimatedHeadline from "@/components/motion/AnimatedHeadline";
import FadeIn from "@/components/motion/FadeIn";
import HeroShowcase from "@/components/motion/HeroShowcase";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas pt-24 pb-28 md:pt-32 lg:pt-40 lg:pb-40">
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[30%] left-1/2 size-[56rem] -translate-x-1/2 animate-aurora rounded-full bg-accent/25 blur-[140px]"
      />
      <div className="wide-width relative flex flex-col items-center text-center">
        <FadeIn>
          <p className="type-caption inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-4 py-1.5 text-label-secondary backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-link" aria-hidden />
            {PROFILE.name} · {PROFILE.role}
          </p>
        </FadeIn>
        <AnimatedHeadline
          as="h1"
          trigger="load"
          delay={0.15}
          className="type-hero mt-8 max-w-5xl text-balance"
          segments={[{ text: "I build interfaces" }, { text: "that feel effortless.", muted: true }]}
        />
        <FadeIn delay={0.7}>
          <p className="type-intro mx-auto mt-8 max-w-2xl text-pretty text-label-secondary">{PROFILE.summary}</p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <ButtonLink href="/#work">
              View work
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href="/#contact" variant="text">
              Get in touch
              <ChevronRight className="size-4" aria-hidden />
            </ButtonLink>
          </div>
        </FadeIn>
        <HeroShowcase />
      </div>
    </section>
  );
}
