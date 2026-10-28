import { PROJECT_GROUPS, PROJECTS } from "@/data/projects";
import FeaturedProjectCard from "@/components/cards/FeaturedProjectCard";
import ProjectCard from "@/components/cards/ProjectCard";
import CompanyWork from "@/components/sections/CompanyWork";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";

export default function Work() {
  return (
    <Section
      width="wide"
      headingLevel="h1"
      eyebrow="Projects"
      title={[{ text: "Things I've" }, { text: "designed and built.", muted: true }]}
      intro="SaaS products, open-source packages and fast websites, each one polished to the last pixel."
    >
      <div className="flex flex-col gap-24 md:gap-32">
        {PROJECT_GROUPS.map(({ id, title, description }) => {
          const projects = PROJECTS.filter((project) => project.group === id);
          const featured = projects.filter((project) => project.layout === "featured");
          const standard = projects.filter((project) => project.layout === "standard");

          return (
            <div key={id}>
              <Reveal className="mb-8 flex flex-col gap-1 border-b border-hairline pb-6 md:flex-row md:items-baseline md:justify-between md:gap-8">
                <h3 className="type-title">{title}</h3>
                <p className="type-body text-label-secondary">{description}</p>
              </Reveal>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {featured.map((project, index) => (
                  <FeaturedProjectCard key={project.name} project={project} reversed={index % 2 === 1} />
                ))}
                {standard.map((project) => (
                  <ProjectCard key={project.name} project={project} />
                ))}
              </div>
            </div>
          );
        })}
        <CompanyWork />
      </div>
    </Section>
  );
}
