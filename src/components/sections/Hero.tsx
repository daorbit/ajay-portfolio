import { ArrowRight, ChevronRight } from "lucide-react";
import { PROFILE } from "@/data/profile";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section className="hero-glow bg-canvas pt-28 pb-20 md:pt-36 lg:pt-48 lg:pb-28">
      <Reveal className="wide-width">
        <p className="type-body font-semibold text-label-secondary">
          {PROFILE.name}
          <span className="mx-2 text-label-tertiary" aria-hidden>
            /
          </span>
          {PROFILE.role}
        </p>
        <h1 className="type-hero mt-6 max-w-5xl text-balance">
          <span className="text-metal">I build interfaces</span>{" "}
          <span className="text-label-tertiary">that feel effortless.</span>
        </h1>
        <p className="type-intro mt-8 max-w-2xl text-pretty text-label-secondary">{PROFILE.summary}</p>
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
          <ButtonLink href="/#work">
            View work
            <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
          <ButtonLink href="/#contact" variant="text">
            Get in touch
            <ChevronRight className="size-4" aria-hidden />
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
