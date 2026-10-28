import type { ContributionStats, ProfileStats } from "@/types/github";
import CountUp from "@/components/motion/CountUp";
import StatGrid from "@/components/github/StatGrid";

type ContributionStatsGridProps = {
  stats: ContributionStats;
  profile: ProfileStats;
};

export default function ContributionStatsGrid({ stats, profile }: ContributionStatsGridProps) {
  return (
    <StatGrid
      items={[
        { label: "Contributions", value: <CountUp value={stats.total} />, unit: "last year" },
        { label: "Current streak", value: <CountUp value={stats.currentStreak} />, unit: "days" },
        { label: "Longest streak", value: <CountUp value={stats.longestStreak} />, unit: "days" },
        { label: "Best day", value: <CountUp value={stats.bestDay} />, unit: "contributions" },
        { label: "Repositories", value: <CountUp value={profile.repos} />, unit: "public" },
        { label: "Stars earned", value: <CountUp value={profile.stars} />, unit: "across repos" },
        { label: "Daily average", value: stats.average, unit: "contributions" },
        { label: "On GitHub since", value: profile.since ?? "—", unit: "" },
      ]}
    />
  );
}
