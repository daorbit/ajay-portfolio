import { LANGUAGE_LIMIT, RECENT_REPO_LIMIT } from "@/constants/github";
import type { ChartDatum, GitHubProfiles, GitHubRepo, ProfileStats } from "@/types/github";

function ownRepos(repos: GitHubRepo[]) {
  return repos.filter((repo) => !repo.fork && !repo.archived);
}

export function getProfileStats({ users, repos }: GitHubProfiles): ProfileStats {
  const own = ownRepos(repos);
  const years = users.map((user) => new Date(user.created_at).getUTCFullYear());
  return {
    repos: own.length,
    stars: own.reduce((sum, repo) => sum + repo.stargazers_count, 0),
    followers: users.reduce((sum, user) => sum + user.followers, 0),
    since: years.length ? Math.min(...years) : null,
  };
}

export function getLanguageShares(repos: GitHubRepo[]): ChartDatum[] {
  const counts = new Map<string, number>();
  for (const { language } of ownRepos(repos)) {
    if (language) counts.set(language, (counts.get(language) ?? 0) + 1);
  }

  const total = [...counts.values()].reduce((sum, count) => sum + count, 0);
  const ranked = [...counts.entries()].sort((a, b) => b[1] - a[1]);
  const top = ranked.slice(0, LANGUAGE_LIMIT);
  const other = ranked.slice(LANGUAGE_LIMIT).reduce((sum, [, count]) => sum + count, 0);
  const rows = other ? [...top, ["Other", other] as const] : top;

  return rows.map(([label, value]) => ({
    label,
    value,
    hint: `${Math.round((value / total) * 100)}%`,
  }));
}

export function getRecentRepos(repos: GitHubRepo[]): GitHubRepo[] {
  return ownRepos(repos)
    .sort((a, b) => b.pushed_at.localeCompare(a.pushed_at))
    .slice(0, RECENT_REPO_LIMIT);
}
