import { ArrowRight } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";
import AnimatedHeadline from "@/components/motion/AnimatedHeadline";

export default function ContactCta() {
  return (
    <section className="relative overflow-hidden border-t border-hairline bg-canvas py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[50%] left-1/2 size-[44rem] -translate-x-1/2 animate-aurora rounded-full bg-accent/20 blur-[140px]"
      />
      <div className="wide-width relative flex flex-col items-center text-center">
        <AnimatedHeadline
          className="type-hero max-w-3xl text-balance"
          segments={[{ text: "Let's build" }, { text: "something remarkable.", muted: true }]}
        />
        <Reveal className="mt-10">
          <ButtonLink href="/contact">
            Get in touch
            <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
