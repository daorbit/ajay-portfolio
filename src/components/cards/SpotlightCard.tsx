"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

export default function SpotlightCard({ children, className }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    node.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      className={cn(
        "group relative isolate overflow-hidden rounded-tile border border-hairline bg-surface transition-colors duration-500 ease-apple hover:border-hairline-strong",
        className,
      )}
    >
      <div
        aria-hidden
        className="spotlight pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      {children}
    </div>
  );
}
