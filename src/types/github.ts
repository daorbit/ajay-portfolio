export type ContributionLevel = 0 | 1 | 2 | 3 | 4;

export type ContributionDay = {
  date: string;
  count: number;
  level: ContributionLevel;
};

export type ContributionResponse = {
  total: { lastYear: number };
  contributions: ContributionDay[];
};

export type ContributionStats = {
  total: number;
  thisWeek: number;
  bestDay: number;
  average: number;
  currentStreak: number;
  longestStreak: number;
};

export type ContributionWeek = Array<ContributionDay | null>;

export type GitHubUser = {
  login: string;
  public_repos: number;
  followers: number;
  created_at: string;
};

export type GitHubRepo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
  owner: { login: string };
};

export type GitHubProfiles = {
  users: GitHubUser[];
  repos: GitHubRepo[];
};

export type ProfileStats = {
  repos: number;
  stars: number;
  followers: number;
  since: number | null;
};

export type ChartDatum = {
  label: string;
  value: number;
  hint?: string;
};

export type MonthLabel = {
  week: number;
  label: string;
};
