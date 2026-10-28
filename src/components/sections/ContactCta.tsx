import { ArrowRight } from "lucide-react";
import { PROFILE } from "@/data/profile";
import AnimatedHeadline from "@/components/motion/AnimatedHeadline";
import ButtonLink from "@/components/ui/ButtonLink";
import IndexLabel from "@/components/ui/IndexLabel";
import Reveal from "@/components/ui/Reveal";
import StatusDot from "@/components/ui/StatusDot";

type ContactCtaProps = {
  index: string;
};

export default function ContactCta({ index }: ContactCtaProps) {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="page-width">
        <Reveal className="flex items-center justify-between gap-6 border-b border-hairline pb-5">
          <IndexLabel>{index} / Contact</IndexLabel>
          <StatusDot className="hidden md:inline-flex" />
        </Reveal>
        <AnimatedHeadline
          className="type-poster-xl mt-12 md:mt-16"
          segments={[{ text: "Let's work" }, { text: "together.", muted: true }]}
        />
        <Reveal className="mt-14 flex flex-col gap-8 border-t border-hairline pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="type-label text-label-tertiary">Have a role or a project in mind?</p>
            <a
              href={`mailto:${PROFILE.email}`}
              className="type-serif-sm mt-3 inline-block break-all italic transition-colors duration-300 hover:text-link"
            >
              {PROFILE.email}
            </a>
          </div>
          <ButtonLink href="/contact" className="self-start md:self-auto">
            Get in touch
            <ArrowRight className="size-3.5" aria-hidden />
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
