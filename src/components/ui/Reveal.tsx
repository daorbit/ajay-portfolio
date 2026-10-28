"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

export default function Reveal({ children, className }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} data-visible={inView} className={cn("reveal", className)}>
      {children}
    </div>
  );
}
