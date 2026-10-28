import { ArrowUpRight, Star } from "lucide-react";
import type { GitHubRepo } from "@/types/github";
import { formatContributionDate } from "@/lib/contributions";

type RepoListProps = {
  repos: GitHubRepo[];
};

export default function RepoList({ repos }: RepoListProps) {
  return (
    <ul className="grid border-t border-hairline md:grid-cols-2 md:gap-x-10">
      {repos.map(({ name, html_url, description, language, stargazers_count, pushed_at, owner }) => (
        <li key={html_url} className="border-b border-hairline">
          <a href={html_url} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-2 py-5">
            <span className="flex items-center justify-between gap-4">
              <span className="truncate font-medium transition-colors duration-300 group-hover:text-accent">
                {owner.login}/{name}
              </span>
              <ArrowUpRight className="size-4 shrink-0 text-label-tertiary" aria-hidden />
            </span>
            {description && <span className="type-caption line-clamp-1 text-label-secondary">{description}</span>}
            <span className="type-label flex flex-wrap items-center gap-x-4 gap-y-1 text-label-tertiary">
              {language && <span>{language}</span>}
              <span className="inline-flex items-center gap-1">
                <Star className="size-3" aria-hidden />
                <span className="sr-only">Stars:</span>
                {stargazers_count}
              </span>
              <span>Updated {formatContributionDate(pushed_at.slice(0, 10))}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
