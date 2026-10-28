import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import FeaturedProjectCard from "@/components/cards/FeaturedProjectCard";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";

export default function FeaturedWork() {
  const featured = PROJECTS.filter((project) => project.layout === "featured");

  return (
    <Section
      width="wide"
      eyebrow="Selected work"
      title={[{ text: "Products shipped" }, { text: "to production.", muted: true }]}
      intro="A few things I've designed and built recently."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {featured.map((project, index) => (
          <FeaturedProjectCard key={project.name} project={project} reversed={index % 2 === 1} />
        ))}
      </div>
      <Reveal className="mt-12 flex justify-center">
        <ButtonLink href="/projects" variant="secondary">
          View all projects
          <ArrowRight className="size-4" aria-hidden />
        </ButtonLink>
      </Reveal>
    </Section>
  );
}
