import { ArrowRight } from "lucide-react";
import { HERO_TAGLINE, PROFILE } from "@/data/profile";
import AnimatedHeadline from "@/components/motion/AnimatedHeadline";
import FadeIn from "@/components/motion/FadeIn";
import ButtonLink from "@/components/ui/ButtonLink";
import StatusDot from "@/components/ui/StatusDot";

export default function Hero() {
  return (
    <section className="page-width pt-24 md:pt-28">
      <FadeIn className="type-label flex items-center justify-between gap-6 text-label-secondary">
        <p>{PROFILE.role}</p>
        <StatusDot />
      </FadeIn>
      <AnimatedHeadline
        as="h1"
        trigger="load"
        delay={0.15}
        className="mt-6 font-display text-[min(20.5vw,20.5rem)] leading-[0.84] font-normal tracking-[-0.01em] whitespace-nowrap uppercase md:mt-8"
        segments={[{ text: PROFILE.name }]}
      />
      <FadeIn
        delay={0.6}
        className="mt-8 grid gap-8 border-t border-hairline pt-8 pb-14 md:mt-10 md:grid-cols-3 md:gap-12 md:pt-10 md:pb-20"
      >
        <p className="type-serif-sm text-earth italic">{HERO_TAGLINE}</p>
        <p className="type-intro max-w-md text-label-secondary">{PROFILE.summary}</p>
        <div className="flex flex-wrap items-start gap-3 md:justify-end">
          <ButtonLink href="/contact">
            Get in touch
            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover/button:translate-x-0.5" aria-hidden />
          </ButtonLink>
          <ButtonLink href="/projects" variant="outline">
            View work
          </ButtonLink>
        </div>
      </FadeIn>
    </section>
  );
}
