import { ArrowRight } from "lucide-react";
import HighlightStats from "@/components/sections/HighlightStats";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";

export default function Philosophy() {
  return (
    <Section
      index="02"
      label="Philosophy"
      title={[{ text: "Fast, clear and" }, { text: "effortless to use.", muted: true }]}
      intro="I care about the details users feel but rarely notice: instant loads, steady layouts, keyboard support and interactions that respond the moment you touch them."
    >
      <div className="grid gap-12 border-t border-hairline pt-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <Reveal className="flex flex-col items-start gap-8">
          <p className="type-body max-w-sm text-label-secondary">
            I work closely with design, backend and AI teams, writing clean, maintainable code and shipping polished,
            production-ready features.
          </p>
          <ButtonLink href="/about" variant="text">
            More about me
            <ArrowRight className="size-3.5" aria-hidden />
          </ButtonLink>
        </Reveal>
        <Reveal>
          <HighlightStats />
        </Reveal>
      </div>
    </Section>
  );
}
