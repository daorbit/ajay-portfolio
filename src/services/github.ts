import { cacheLife } from "next/cache";
import { CONTRIBUTIONS_API } from "@/constants/github";
import { mergeContributions } from "@/lib/contributions";
import type { ContributionResponse } from "@/types/github";

export async function getContributions(username: string): Promise<ContributionResponse | null> {
  "use cache";
  cacheLife("hours");

  try {
    const response = await fetch(`${CONTRIBUTIONS_API}/${username}?y=last`);
    if (!response.ok) return null;
    return (await response.json()) as ContributionResponse;
  } catch {
    return null;
  }
}

export async function getCombinedContributions(usernames: string[]): Promise<ContributionResponse | null> {
  const responses = await Promise.all(usernames.map(getContributions));
  const available = responses.filter((response): response is ContributionResponse => response !== null);
  return available.length ? mergeContributions(available) : null;
}
