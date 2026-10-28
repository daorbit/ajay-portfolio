import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/portfolio";
import { padIndex } from "@/lib/format";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";
import ProjectMedia from "@/components/work/ProjectMedia";

type ProjectEntryProps = {
  project: Project;
  index: number;
};

export default function ProjectEntry({ project, index }: ProjectEntryProps) {
  const { name, category, description, tech, url } = project;

  return (
    <Reveal>
      <article className="group grid gap-8 border-t border-hairline pt-6 md:pt-8 lg:grid-cols-[1fr_1.75fr] lg:gap-16">
        <div className="flex flex-col lg:sticky lg:top-28 lg:self-start">
          <p className="type-label flex justify-between gap-4 text-label-tertiary">
            <span>{padIndex(index)}</span>
            <span>{category}</span>
          </p>
          <h3 className="type-poster-md mt-6 md:mt-10">{name}</h3>
          {tech && <p className="type-label mt-4 text-label-secondary">{tech.join("  ·  ")}</p>}
          <p className="type-body mt-6 max-w-md text-label-secondary">{description}</p>
          {url && (
            <ButtonLink href={url} external variant="text" className="mt-8 self-start">
              Live website
              <ArrowUpRight className="size-3.5" aria-hidden />
              <span className="sr-only">(opens in a new tab)</span>
            </ButtonLink>
          )}
        </div>
        <div className="relative aspect-[16/11] overflow-hidden rounded-panel bg-canvas-raised">
          <div className="absolute inset-[6%] transition-transform duration-1000 ease-expo group-hover:scale-[1.03]">
            <ProjectMedia project={project} sizes="(min-width: 1069px) 900px, 90vw" />
          </div>
        </div>
      </article>
    </Reveal>
  );
}
