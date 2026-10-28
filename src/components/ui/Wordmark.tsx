import Link from "next/link";
import { PROFILE } from "@/data/profile";
import { cn } from "@/lib/cn";

type WordmarkProps = {
  onNavigate?: () => void;
  className?: string;
};

export default function Wordmark({ onNavigate, className }: WordmarkProps) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      className={cn("font-display text-2xl leading-none tracking-wide whitespace-nowrap uppercase", className)}
    >
      {PROFILE.name}
    </Link>
  );
}
