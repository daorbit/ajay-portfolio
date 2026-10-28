import { COMPANY_PROJECTS } from "@/data/projects";
import IndexLabel from "@/components/ui/IndexLabel";
import PosterList from "@/components/ui/PosterList";
import Reveal from "@/components/ui/Reveal";

type CompanyWorkProps = {
  index: string;
};

export default function CompanyWork({ index }: CompanyWorkProps) {
  return (
    <div>
      <Reveal className="mb-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between md:gap-8">
        <div>
          <IndexLabel>{index} / At work</IndexLabel>
          <h2 className="type-poster-md mt-6">Also contributed to</h2>
        </div>
        <p className="type-body max-w-sm text-label-secondary md:text-right">
          Company and client projects, built as part of a team.
        </p>
      </Reveal>
      <PosterList size="sm" items={COMPANY_PROJECTS.map((title) => ({ title }))} />
    </div>
  );
}
