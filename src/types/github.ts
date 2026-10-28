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

export type MonthLabel = {
  week: number;
  label: string;
};
