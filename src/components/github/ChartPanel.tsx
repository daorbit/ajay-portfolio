import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import Reveal from "@/components/ui/Reveal";

type ChartPanelProps = {
  title: string;
  caption?: string;
  className?: string;
  children: ReactNode;
};

export default function ChartPanel({ title, caption, className, children }: ChartPanelProps) {
  return (
    <Reveal className={cn("flex flex-col rounded-panel bg-canvas-raised p-5 md:p-8", className)}>
      <div className="mb-8">
        <h3 className="text-lg font-medium tracking-tight">{title}</h3>
        {caption && <p className="type-caption mt-1 text-label-tertiary">{caption}</p>}
      </div>
      <div className="mt-auto">{children}</div>
    </Reveal>
  );
}
