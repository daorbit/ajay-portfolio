import { PROJECT_GROUPS, PROJECTS } from "@/data/projects";
import ProjectCard from "@/components/cards/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";

export default function Work() {
  return (
    <Section
      id="work"
      width="wide"
      eyebrow="Selected work"
      title="Products shipped to production."
      intro="AI platforms, real-time trading tools, open-source packages and fast websites, each one polished to the last pixel."
    >
      <div className="flex flex-col gap-20 md:gap-28">
        {PROJECT_GROUPS.map(({ id, title, description }) => (
          <div key={id}>
            <Reveal className="mb-8 flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-8">
              <h3 className="type-title">{title}</h3>
              <p className="type-body text-label-secondary">{description}</p>
            </Reveal>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
              {PROJECTS.filter((project) => project.group === id).map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
