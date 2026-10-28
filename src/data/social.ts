import { GITHUB_URL } from "@/constants/github";
import { PROFILE } from "@/data/profile";

export type SocialLink = {
  label: string;
  href: string;
};

export const SOCIAL_LINKS: SocialLink[] = PROFILE.githubAccounts.map((account) => ({
  label: `GitHub @${account}`,
  href: `${GITHUB_URL}/${account}`,
}));
