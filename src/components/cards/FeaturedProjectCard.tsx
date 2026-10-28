import type { Project } from "@/types/portfolio";
import { cn } from "@/lib/cn";
import Reveal from "@/components/ui/Reveal";
import ProjectLink from "@/components/cards/ProjectLink";
import ProjectMedia from "@/components/cards/ProjectMedia";
import SpotlightCard from "@/components/cards/SpotlightCard";

type FeaturedProjectCardProps = {
  project: Project;
  reversed?: boolean;
};

export default function FeaturedProjectCard({ project, reversed = false }: FeaturedProjectCardProps) {
  const { name, category, description, tech, url } = project;

  return (
    <Reveal className="md:col-span-2">
      <SpotlightCard className="tile-glow grid lg:grid-cols-[1fr_1.3fr]">
        <div className={cn("flex flex-col p-8 md:p-12 lg:py-16", reversed && "lg:order-last")}>
          <div className="flex items-start justify-between gap-6">
            <p className="type-body font-semibold text-link">{category}</p>
            {url && <ProjectLink name={name} url={url} />}
          </div>
          <h3 className="type-headline mt-4 text-balance">{name}</h3>
          <p className="type-callout mt-5 max-w-md text-label-secondary">{description}</p>
          {tech && <p className="type-caption mt-auto pt-10 text-label-tertiary">{tech.join("  ·  ")}</p>}
        </div>
        <div className="relative h-72 overflow-hidden md:h-[26rem] lg:h-auto lg:min-h-[30rem]">
          <div
            className={cn(
              "absolute inset-x-6 top-6 -bottom-6 transition-transform duration-700 ease-apple group-hover:-translate-y-2 group-hover:scale-[1.02] md:inset-x-10 lg:top-16 lg:-bottom-20",
              reversed ? "lg:right-0 lg:-left-28" : "lg:left-0 lg:-right-28",
            )}
          >
            <ProjectMedia project={project} sizes="(min-width: 1069px) 760px, 90vw" />
          </div>
        </div>
      </SpotlightCard>
    </Reveal>
  );
}
