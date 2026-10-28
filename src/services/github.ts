import { cacheLife } from "next/cache";
import { CONTRIBUTIONS_API, GITHUB_API } from "@/constants/github";
import { mergeContributions } from "@/lib/contributions";
import type { ContributionResponse, GitHubProfiles, GitHubRepo, GitHubUser } from "@/types/github";

function githubHeaders(): HeadersInit {
  const token = process.env.GITHUB_TOKEN;
  return {
    Accept: "application/vnd.github+json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

async function fetchJson<T>(url: string, headers?: HeadersInit): Promise<T | null> {
  try {
    const response = await fetch(url, { headers });
    if (!response.ok) return null;
    return (await response.json()) as T;
  } catch {
    return null;
  }
}

export async function getContributions(username: string): Promise<ContributionResponse | null> {
  "use cache";
  cacheLife("hours");
  return fetchJson<ContributionResponse>(`${CONTRIBUTIONS_API}/${username}?y=last`);
}

export async function getCombinedContributions(usernames: string[]): Promise<ContributionResponse | null> {
  const responses = await Promise.all(usernames.map(getContributions));
  const available = responses.filter((response): response is ContributionResponse => response !== null);
  return available.length ? mergeContributions(available) : null;
}

export async function getAccountContributionTotals(usernames: string[]) {
  const responses = await Promise.all(usernames.map(getContributions));
  return usernames.flatMap((username, index) => {
    const response = responses[index];
    return response ? [{ label: `@${username}`, value: response.total.lastYear }] : [];
  });
}

export async function getGitHubUser(username: string): Promise<GitHubUser | null> {
  "use cache";
  cacheLife("hours");
  return fetchJson<GitHubUser>(`${GITHUB_API}/users/${username}`, githubHeaders());
}

export async function getGitHubRepos(username: string): Promise<GitHubRepo[]> {
  "use cache";
  cacheLife("hours");
  const repos = await fetchJson<GitHubRepo[]>(
    `${GITHUB_API}/users/${username}/repos?per_page=100&type=owner&sort=pushed`,
    githubHeaders(),
  );
  return repos ?? [];
}

export async function getGitHubProfiles(usernames: string[]): Promise<GitHubProfiles> {
  const [users, repos] = await Promise.all([
    Promise.all(usernames.map(getGitHubUser)),
    Promise.all(usernames.map(getGitHubRepos)),
  ]);
  return {
    users: users.filter((user): user is GitHubUser => user !== null),
    repos: repos.flat(),
  };
}
