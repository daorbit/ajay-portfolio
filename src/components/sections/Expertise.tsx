import { FEATURES } from "@/data/expertise";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SpotlightCard from "@/components/cards/SpotlightCard";

export default function Expertise() {
  return (
    <Section
      id="expertise"
      tone="raised"
      width="wide"
      eyebrow="Expertise"
      title={[{ text: "Built right," }, { text: "from the inside out.", muted: true }]}
      intro="The craft behind every interface: architecture, speed, accessibility and code that lasts."
    >
      <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ title, description }, index) => (
          <li key={title}>
            <Reveal className="h-full">
              <SpotlightCard className="h-full rounded-card p-8 md:p-10">
                <span className="type-title text-metal tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="type-subhead mt-10">{title}</h3>
                <p className="type-body mt-3 text-label-secondary">{description}</p>
              </SpotlightCard>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
