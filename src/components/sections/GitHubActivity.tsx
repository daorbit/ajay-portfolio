import { siGithub } from "simple-icons";
import { PROFILE } from "@/data/profile";
import { GITHUB_URL } from "@/constants/github";
import { getCombinedContributions } from "@/services/github";
import { getContributionStats, getContributionWeeks, getMonthLabels } from "@/lib/contributions";
import ContributionGraph from "@/components/github/ContributionGraph";
import ContributionStatsGrid from "@/components/github/ContributionStatsGrid";
import BrandLogo from "@/components/ui/BrandLogo";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";

export default async function GitHubActivity() {
  const accounts = PROFILE.githubAccounts;
  const data = await getCombinedContributions(accounts);
  const weeks = data ? getContributionWeeks(data.contributions) : [];

  return (
    <Section
      headingLevel="h1"
      eyebrow="Dashboard"
      width="wide"
      title={[{ text: "Shipping code," }, { text: "every week.", muted: true }]}
      intro={
        accounts.length > 1
          ? "Live from GitHub: contributions across my accounts over the last twelve months, refreshed every hour."
          : "Live from GitHub: contributions over the last twelve months, refreshed every hour."
      }
    >
      <Reveal className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h2 className="type-title flex items-center gap-3">
          <BrandLogo logo={siGithub} className="size-6" />
          Contributions
        </h2>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-1">
          {accounts.map((account) => (
            <li key={account}>
              <a
                href={`${GITHUB_URL}/${account}`}
                target="_blank"
                rel="noopener noreferrer"
                className="type-body text-link underline-offset-4 hover:underline"
              >
                @{account}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
      {data ? (
        <div className="flex flex-col gap-6">
          <Reveal>
            <ContributionStatsGrid stats={getContributionStats(data.contributions, data.total.lastYear)} />
          </Reveal>
          <Reveal className="rounded-tile border border-hairline bg-surface p-6 md:p-8">
            <ContributionGraph weeks={weeks} months={getMonthLabels(weeks)} total={data.total.lastYear} />
          </Reveal>
        </div>
      ) : (
        <Reveal className="rounded-tile border border-hairline bg-surface p-8 text-label-secondary">
          <p className="type-body">
            GitHub activity is unavailable right now.{" "}
            <a
              href={`${GITHUB_URL}/${PROFILE.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:underline"
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
