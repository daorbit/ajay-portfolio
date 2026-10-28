import type {
  ContributionDay,
  ContributionLevel,
  ContributionResponse,
  ContributionStats,
  ContributionWeek,
  MonthLabel,
} from "@/types/github";

const MONTH_FORMAT = new Intl.DateTimeFormat("en", { month: "short", timeZone: "UTC" });

function toDate(date: string) {
  return new Date(`${date}T00:00:00Z`);
}

function toLevel(count: number, max: number): ContributionLevel {
  if (count === 0 || max === 0) return 0;
  const ratio = count / max;
  if (ratio <= 0.25) return 1;
  if (ratio <= 0.5) return 2;
  if (ratio <= 0.75) return 3;
  return 4;
}

export function mergeContributions(responses: ContributionResponse[]): ContributionResponse {
  const counts = new Map<string, number>();
  for (const { contributions } of responses) {
    for (const { date, count } of contributions) {
      counts.set(date, (counts.get(date) ?? 0) + count);
    }
  }

  const dates = [...counts.keys()].sort();
  const max = Math.max(0, ...counts.values());

  return {
    total: { lastYear: responses.reduce((sum, response) => sum + response.total.lastYear, 0) },
    contributions: dates.map((date) => {
      const count = counts.get(date) ?? 0;
      return { date, count, level: toLevel(count, max) };
    }),
  };
}

export function getContributionStats(days: ContributionDay[], total: number): ContributionStats {
  let longestStreak = 0;
  let run = 0;
  for (const day of days) {
    run = day.count > 0 ? run + 1 : 0;
    longestStreak = Math.max(longestStreak, run);
  }

  let currentStreak = 0;
  const lastIndex = days.at(-1)?.count === 0 ? days.length - 2 : days.length - 1;
  for (let index = lastIndex; index >= 0 && days[index].count > 0; index -= 1) {
    currentStreak += 1;
  }

  return {
    total,
    thisWeek: days.slice(-7).reduce((sum, day) => sum + day.count, 0),
    bestDay: Math.max(0, ...days.map((day) => day.count)),
    average: days.length ? Math.round((total / days.length) * 100) / 100 : 0,
    currentStreak,
    longestStreak,
  };
}

export function getContributionWeeks(days: ContributionDay[]): ContributionWeek[] {
  if (!days.length) return [];

  const padded: ContributionWeek = [...Array(toDate(days[0].date).getUTCDay()).fill(null), ...days];
  const weeks: ContributionWeek[] = [];
  for (let index = 0; index < padded.length; index += 7) {
    weeks.push(padded.slice(index, index + 7));
  }
  return weeks;
}

export function getMonthLabels(weeks: ContributionWeek[]): MonthLabel[] {
  const labels: MonthLabel[] = [];
  let lastMonth = -1;

  weeks.forEach((week, index) => {
    const firstDay = week.find((day) => day !== null);
    if (!firstDay) return;
    const date = toDate(firstDay.date);
    if (date.getUTCMonth() !== lastMonth && date.getUTCDate() <= 7) {
      labels.push({ week: index, label: MONTH_FORMAT.format(date) });
      lastMonth = date.getUTCMonth();
    }
  });

  return labels;
}

export function formatContributionDate(date: string) {
  return toDate(date).toLocaleDateString("en", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
}
