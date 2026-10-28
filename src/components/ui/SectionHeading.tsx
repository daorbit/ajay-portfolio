import type { HeadlineSegment } from "@/types/portfolio";
import AnimatedHeadline from "@/components/motion/AnimatedHeadline";
import IndexLabel from "@/components/ui/IndexLabel";
import Reveal from "@/components/ui/Reveal";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: HeadlineSegment[];
  intro?: string;
  as?: "h1" | "h2";
};

export default function SectionHeading({ index, label, title, intro, as = "h2" }: SectionHeadingProps) {
  return (
    <div className="mb-14 md:mb-20">
      <Reveal className="border-b border-hairline pb-5">
        <IndexLabel>
          {index} / {label}
        </IndexLabel>
      </Reveal>
      <div className="mt-10 grid items-end gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
        <AnimatedHeadline as={as} trigger={as === "h1" ? "load" : "view"} segments={title} className="type-poster text-balance" />
        {intro && (
          <Reveal>
            <p className="type-intro max-w-md text-label-secondary lg:pb-3">{intro}</p>
          </Reveal>
        )}
      </div>
    </div>
  );
}
