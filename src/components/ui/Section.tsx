import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import Reveal from "@/components/ui/Reveal";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  tone?: "default" | "raised";
  width?: "content" | "wide";
  children: ReactNode;
};

export default function Section({
  id,
  eyebrow,
  title,
  intro,
  tone = "default",
  width = "content",
  children,
}: SectionProps) {
  const hasHeader = eyebrow || title || intro;

  return (
    <section
      id={id}
      className={cn(
        "border-t border-hairline py-20 md:py-28 lg:py-36",
        tone === "raised" ? "bg-canvas-raised" : "bg-canvas",
      )}
    >
      <div className={width === "wide" ? "wide-width" : "content-width"}>
        {hasHeader && (
          <Reveal className="mb-12 max-w-3xl md:mb-20">
            {eyebrow && <p className="type-body mb-4 font-semibold text-link">{eyebrow}</p>}
            {title && <h2 className="type-headline text-balance">{title}</h2>}
            {intro && <p className="type-intro mt-5 text-pretty text-label-secondary">{intro}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
