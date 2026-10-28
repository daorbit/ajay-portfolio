import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type IndexLabelProps = {
  children: ReactNode;
  className?: string;
};

export default function IndexLabel({ children, className }: IndexLabelProps) {
  return (
    <p className={cn("type-label flex items-center gap-3 text-label-tertiary", className)}>
      <span aria-hidden className="h-px w-8 bg-current" />
      {children}
    </p>
  );
}
