import { FEATURES } from "@/data/expertise";
import PosterList from "@/components/ui/PosterList";
import Section from "@/components/ui/Section";

type ExpertiseProps = {
  index: string;
};

export default function Expertise({ index }: ExpertiseProps) {
  return (
    <Section
      index={index}
      label="Expertise"
      title={[{ text: "What I" }, { text: "bring", muted: true }]}
      intro="The craft behind every interface: architecture, speed, accessibility and code that lasts."
    >
      <PosterList items={FEATURES.map(({ title, description }) => ({ title, detail: description }))} />
    </Section>
  );
}
