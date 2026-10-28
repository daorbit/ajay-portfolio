import { PROFILE } from "@/data/profile";
import { GITHUB_URL } from "@/constants/github";
import { getAccountContributionTotals, getCombinedContributions, getGitHubProfiles } from "@/services/github";
import {
  getContributionStats,
  getContributionWeeks,
  getMonthLabels,
  getMonthlyTotals,
  getWeekdayTotals,
} from "@/lib/contributions";
import { getLanguageShares, getProfileStats, getRecentRepos } from "@/lib/githubStats";
import BarChart from "@/components/github/BarChart";
import ChartPanel from "@/components/github/ChartPanel";
import ContributionGraph from "@/components/github/ContributionGraph";
import ContributionStatsGrid from "@/components/github/ContributionStatsGrid";
import RankedBars from "@/components/github/RankedBars";
import RepoList from "@/components/github/RepoList";
import SocialLinks from "@/components/layout/SocialLinks";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";

export default async function GitHubActivity() {
  const accounts = PROFILE.githubAccounts;
  const [data, accountTotals, profiles] = await Promise.all([
    getCombinedContributions(accounts),
    getAccountContributionTotals(accounts),
    getGitHubProfiles(accounts),
  ]);

  const weeks = data ? getContributionWeeks(data.contributions) : [];
  const languages = getLanguageShares(profiles.repos);
  const recentRepos = getRecentRepos(profiles.repos);

  return (
    <Section
      headingLevel="h1"
      index="Index"
      label="Dashboard"
      title={[{ text: "Shipping code," }, { text: "every week.", muted: true }]}
      intro={
        accounts.length > 1
          ? "Live from GitHub: contributions, languages and repositories across my accounts, refreshed every hour."
          : "Live from GitHub: contributions, languages and repositories, refreshed every hour."
      }
    >
      <Reveal className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h2 className="type-poster-sm">GitHub at a glance</h2>
        <SocialLinks className="flex-wrap" />
      </Reveal>
      {data ? (
        <div className="flex flex-col gap-5 md:gap-6">
          <Reveal>
            <ContributionStatsGrid
              stats={getContributionStats(data.contributions, data.total.lastYear)}
              profile={getProfileStats(profiles)}
            />
          </Reveal>
          <ChartPanel title="Contribution calendar" caption={`${data.total.lastYear} contributions in the last year`}>
            <ContributionGraph weeks={weeks} months={getMonthLabels(weeks)} total={data.total.lastYear} />
          </ChartPanel>
          <div className="grid gap-5 md:gap-6 lg:grid-cols-[1.6fr_1fr]">
            <ChartPanel title="Contributions per month" caption="Last twelve months">
              <BarChart data={getMonthlyTotals(data.contributions)} unit="Contributions" caption="Contributions per month" />
            </ChartPanel>
            <ChartPanel title="Busiest days" caption="Contributions by day of the week">
              <BarChart data={getWeekdayTotals(data.contributions)} unit="Contributions" caption="Contributions by weekday" />
            </ChartPanel>
          </div>
          <div className="grid gap-5 md:gap-6 lg:grid-cols-2">
            {languages.length > 0 && (
              <ChartPanel title="Top languages" caption="Share of public repositories by primary language">
                <RankedBars data={languages} caption="Repositories by primary language" />
              </ChartPanel>
            )}
            {accountTotals.length > 1 && (
              <ChartPanel title="Contributions by account" caption="Last twelve months">
                <RankedBars data={accountTotals} caption="Contributions by GitHub account" />
              </ChartPanel>
            )}
          </div>
          {recentRepos.length > 0 && (
            <ChartPanel title="Recently active repositories" caption="Latest pushes across my public repos">
              <RepoList repos={recentRepos} />
            </ChartPanel>
          )}
        </div>
      ) : (
        <Reveal className="border-t border-hairline pt-8 text-label-secondary">
          <p className="type-body">
            GitHub activity is unavailable right now.{" "}
            <a
              href={`${GITHUB_URL}/${PROFILE.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link underline-offset-4 hover:underline"
            >
              View the profile on GitHub
            </a>
            .
          </p>
        </Reveal>
      )}
    </Section>
  );
}
