import { ArrowUpRight } from "lucide-react";
import type { Project, ProjectLayout } from "@/types/portfolio";
import { cn } from "@/lib/cn";
import Reveal from "@/components/ui/Reveal";

const LAYOUT_CLASSES: Record<ProjectLayout, string> = {
  featured: "lg:col-span-3",
  standard: "lg:col-span-2",
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { name, category, description, tech, layout, url } = project;
  const isFeatured = layout === "featured";

  return (
    <Reveal className={cn("h-full", LAYOUT_CLASSES[layout])}>
      <article
        className={cn(
          "group relative flex h-full flex-col rounded-tile border border-hairline bg-surface p-8 transition-colors duration-500 ease-apple hover:border-hairline-strong hover:bg-surface-hover md:p-10",
          isFeatured && "tile-glow min-h-80 lg:min-h-[26rem]",
        )}
      >
        <div className="flex items-start justify-between gap-6">
          <p className="type-caption font-semibold text-label-secondary">{category}</p>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-hairline-strong text-label transition-colors duration-300 ease-apple after:absolute after:inset-0 after:rounded-tile group-hover:border-accent group-hover:bg-accent"
            >
              <ArrowUpRight className="size-4" aria-hidden />
              <span className="sr-only">Visit {name} (opens in a new tab)</span>
            </a>
          )}
        </div>
        <div className="mt-auto pt-16">
          <h3 className={cn("text-balance", isFeatured ? "type-headline" : "type-title")}>{name}</h3>
          <p className={cn("mt-4 max-w-xl text-label-secondary", isFeatured ? "type-callout" : "type-body")}>
            {description}
          </p>
          {tech && <p className="type-caption mt-6 text-label-tertiary">{tech.join("  ·  ")}</p>}
        </div>
      </article>
    </Reveal>
  );
}
