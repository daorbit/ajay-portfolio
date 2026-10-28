import type { ReactNode } from "react";
import type { HeadlineSegment } from "@/types/portfolio";
import { cn } from "@/lib/cn";
import SectionHeading from "@/components/ui/SectionHeading";

type SectionProps = {
  id?: string;
  index: string;
  label: string;
  title: HeadlineSegment[];
  intro?: string;
  headingLevel?: "h1" | "h2";
  className?: string;
  children: ReactNode;
};

export default function Section({
  id,
  index,
  label,
  title,
  intro,
  headingLevel = "h2",
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(headingLevel === "h1" ? "pt-32 pb-24 md:pt-40 md:pb-32" : "py-24 md:py-32 lg:py-40", className)}
    >
      <div className="page-width">
        <SectionHeading index={index} label={label} title={title} intro={intro} as={headingLevel} />
        {children}
      </div>
    </section>
  );
}
