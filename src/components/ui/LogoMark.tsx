import Image from "next/image";
import Link from "next/link";
import { SITE_LOGO } from "@/constants/site";
import { PROFILE } from "@/data/profile";
import { cn } from "@/lib/cn";

type LogoMarkProps = {
  onNavigate?: () => void;
  className?: string;
};

export default function LogoMark({ onNavigate, className }: LogoMarkProps) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      aria-label={`${PROFILE.name}, home`}
      className={cn("block shrink-0 transition-opacity duration-300 hover:opacity-80", className)}
    >
      <Image src={SITE_LOGO} alt="" width={40} height={40} preload className="size-10" />
    </Link>
  );
}
