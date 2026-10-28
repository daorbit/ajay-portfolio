import { AVAILABILITY } from "@/data/profile";
import { cn } from "@/lib/cn";

type StatusDotProps = {
  className?: string;
};

export default function StatusDot({ className }: StatusDotProps) {
  return (
    <span className={cn("type-label inline-flex items-center gap-2.5 text-label", className)}>
      <span aria-hidden className="size-1.5 animate-pulse-dot rounded-full bg-accent" />
      {AVAILABILITY}
    </span>
  );
}
