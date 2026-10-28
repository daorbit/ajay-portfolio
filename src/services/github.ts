import { cacheLife } from "next/cache";
import { CONTRIBUTIONS_API } from "@/constants/github";
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
