import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import ProjectEntry from "@/components/work/ProjectEntry";

const HOME_PROJECT_COUNT = 4;

export default function SelectedWork() {
  return (
    <Section
      id="work"
      index="03"
      label="Selected work"
      title={[{ text: "Selected" }, { text: "work", muted: true }]}
      intro="Products, open-source packages and websites, shipped to production and used every day."
    >
      <div className="flex flex-col gap-20 md:gap-28">
        {PROJECTS.slice(0, HOME_PROJECT_COUNT).map((project, index) => (
          <ProjectEntry key={project.name} project={project} index={index + 1} />
        ))}
      </div>
      <Reveal className="mt-20 flex justify-center border-t border-hairline pt-10">
        <ButtonLink href="/projects" variant="outline">
          All projects
          <ArrowRight className="size-3.5" aria-hidden />
        </ButtonLink>
      </Reveal>
    </Section>
  );
}
