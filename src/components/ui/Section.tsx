import type { ReactNode } from "react";
import type { HeadlineSegment } from "@/types/portfolio";
import { cn } from "@/lib/cn";
import Reveal from "@/components/ui/Reveal";
import AnimatedHeadline from "@/components/motion/AnimatedHeadline";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: HeadlineSegment[];
  intro?: string;
  tone?: "default" | "raised";
  width?: "content" | "wide";
  headingLevel?: "h1" | "h2";
  children: ReactNode;
};

export default function Section({
  id,
  eyebrow,
  title,
  intro,
  tone = "default",
  width = "content",
  headingLevel = "h2",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28 lg:py-36",
        headingLevel === "h2" && "border-t border-hairline",
        tone === "raised" ? "bg-canvas-raised" : "bg-canvas",
      )}
    >
      <div className={width === "wide" ? "wide-width" : "content-width"}>
        {(eyebrow || title || intro) && (
          <div className="mb-12 max-w-3xl md:mb-20">
            {eyebrow && (
              <Reveal>
                <p className="type-body mb-4 font-semibold text-link">{eyebrow}</p>
              </Reveal>
            )}
            {title && (
              <AnimatedHeadline as={headingLevel} segments={title} className="type-headline text-balance" />
            )}
            {intro && (
              <Reveal>
                <p className="type-intro mt-5 text-pretty text-label-secondary">{intro}</p>
              </Reveal>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
