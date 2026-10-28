import { COMPANY_PROJECTS } from "@/data/projects";
import Reveal from "@/components/ui/Reveal";

export default function CompanyWork() {
  return (
    <Reveal className="border-t border-hairline pt-10">
      <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-8">
        <h3 className="type-title">At work, I&apos;ve also contributed to</h3>
        <p className="type-body text-label-secondary">Company and client projects, built as part of a team.</p>
      </div>
      <ul className="type-subhead mt-8 flex flex-wrap gap-x-10 gap-y-4 text-label-secondary">
        {COMPANY_PROJECTS.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </Reveal>
  );
}
