import { ArrowUpRight } from "lucide-react";

type ProjectLinkProps = {
  name: string;
  url: string;
};

export default function ProjectLink({ name, url }: ProjectLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-hairline-strong text-label transition-colors duration-500 ease-apple after:absolute after:inset-0 after:rounded-tile group-hover:border-accent group-hover:bg-accent"
    >
      <ArrowUpRight
        className="size-4 transition-transform duration-500 ease-apple group-hover:rotate-45"
        aria-hidden
      />
      <span className="sr-only">Visit {name} (opens in a new tab)</span>
    </a>
  );
}
