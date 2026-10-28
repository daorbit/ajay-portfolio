import type { Project } from "@/types/portfolio";
import Reveal from "@/components/ui/Reveal";
import ProjectLink from "@/components/cards/ProjectLink";
import ProjectMedia from "@/components/cards/ProjectMedia";
import SpotlightCard from "@/components/cards/SpotlightCard";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { name, category, description, tech, url } = project;

  return (
    <Reveal className="h-full lg:col-span-2">
      <SpotlightCard className="flex h-full flex-col">
        <div className="relative h-56 overflow-hidden border-b border-hairline bg-canvas-raised md:h-64">
          <div aria-hidden className="dot-grid absolute inset-0" />
          <div className="relative size-full px-6 pt-8 pb-4 transition-transform duration-700 ease-apple group-hover:-translate-y-1.5 group-hover:scale-[1.04]">
            <ProjectMedia project={project} sizes="(min-width: 1069px) 380px, (min-width: 735px) 45vw, 85vw" />
          </div>
        </div>
        <div className="flex flex-1 flex-col p-7 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="type-caption font-semibold text-label-secondary">{category}</p>
              <h3 className="type-subhead mt-2 text-balance">{name}</h3>
            </div>
            {url && <ProjectLink name={name} url={url} />}
          </div>
          <p className="type-body mt-3 text-label-secondary">{description}</p>
          {tech && <p className="type-caption mt-auto pt-6 text-label-tertiary">{tech.join("  ·  ")}</p>}
        </div>
      </SpotlightCard>
    </Reveal>
  );
}
