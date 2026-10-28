import Link from "next/link";
import { PROFILE } from "@/data/profile";
import { cn } from "@/lib/cn";
import Avatar from "@/components/layout/Avatar";

type WordmarkProps = {
  onNavigate?: () => void;
  withAvatar?: boolean;
  className?: string;
  nameClassName?: string;
};

export default function Wordmark({ onNavigate, withAvatar = false, className, nameClassName }: WordmarkProps) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      className={cn("flex items-center gap-3 font-display text-2xl leading-none tracking-wide uppercase", className)}
    >
      {withAvatar && <Avatar size="sm" />}
      <span className={cn("pt-0.5", nameClassName)}>{PROFILE.name}</span>
    </Link>
  );
}
