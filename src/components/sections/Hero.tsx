import { ArrowRight } from "lucide-react";
import { PROFILE } from "@/data/profile";
import Avatar from "@/components/layout/Avatar";
import AnimatedHeadline from "@/components/motion/AnimatedHeadline";
import FadeIn from "@/components/motion/FadeIn";
import HeroFoot from "@/components/sections/hero/HeroFoot";
import HeroMeta from "@/components/sections/hero/HeroMeta";
import ButtonLink from "@/components/ui/ButtonLink";
import IndexLabel from "@/components/ui/IndexLabel";
import StatusDot from "@/components/ui/StatusDot";

export default function Hero() {
  return (
    <section className="relative">
      <div className="page-width pt-24 pb-8 md:pt-28">
        <HeroMeta />
        <div className="grid items-end gap-10 pt-12 pb-14 md:pt-16 md:pb-20 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <div>
            <FadeIn delay={0.1}>
              <IndexLabel className="mb-7">Index / 01</IndexLabel>
            </FadeIn>
            <AnimatedHeadline
              as="h1"
              trigger="load"
              delay={0.2}
              className="type-serif text-balance"
              segments={[{ text: "Building interfaces with" }, { text: "intent & craft.", muted: true }]}
            />
          </div>
          <FadeIn delay={0.7} className="flex flex-col items-start gap-8 lg:pb-4">
            <div className="flex items-center gap-4">
              <Avatar size="md" />
              <div className="flex flex-col gap-1">
                <p className="type-label">{PROFILE.name}</p>
                <StatusDot className="md:hidden" />
                <p className="type-label hidden text-label-tertiary md:block">{PROFILE.role}</p>
              </div>
            </div>
            <p className="type-intro max-w-md text-label-secondary">{PROFILE.summary}</p>
            <div className="flex flex-wrap items-center gap-3">
              <ButtonLink href="/contact">
                Get in touch
                <ArrowRight className="size-3.5 transition-transform duration-300 group-hover/button:translate-x-0.5" aria-hidden />
              </ButtonLink>
              <ButtonLink href="/projects" variant="outline">
                View work
              </ButtonLink>
            </div>
          </FadeIn>
        </div>
        <HeroFoot />
      </div>
    </section>
  );
}
