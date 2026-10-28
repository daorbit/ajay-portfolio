import { PROJECT_GROUPS, PROJECTS } from "@/data/projects";
import { padIndex } from "@/lib/format";
import CompanyWork from "@/components/sections/CompanyWork";
import IndexLabel from "@/components/ui/IndexLabel";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import ProjectEntry from "@/components/work/ProjectEntry";

export default function Work() {
  return (
    <Section
      headingLevel="h1"
      index="Index"
      label="Projects"
      title={[{ text: "Things I've" }, { text: "built", muted: true }]}
      intro="SaaS products, open-source packages and fast websites, each one polished to the last pixel."
    >
      <div className="flex flex-col gap-28 md:gap-40">
        {PROJECT_GROUPS.map(({ id, title, description }, groupIndex) => {
          const projects = PROJECTS.filter((project) => project.group === id);
          return (
            <div key={id}>
              <Reveal className="mb-12 flex flex-col gap-2 md:flex-row md:items-end md:justify-between md:gap-8">
                <div>
                  <IndexLabel>
                    {padIndex(groupIndex + 1)} / {projects.length} {projects.length === 1 ? "project" : "projects"}
                  </IndexLabel>
                  <h2 className="type-poster-md mt-6">{title}</h2>
                </div>
                <p className="type-body max-w-sm text-label-secondary md:text-right">{description}</p>
              </Reveal>
              <div className="flex flex-col gap-20 md:gap-28">
                {projects.map((project) => (
                  <ProjectEntry key={project.name} project={project} index={PROJECTS.indexOf(project) + 1} />
                ))}
              </div>
            </div>
          );
        })}
        <CompanyWork index={padIndex(PROJECT_GROUPS.length + 1)} />
      </div>
    </Section>
  );
}
