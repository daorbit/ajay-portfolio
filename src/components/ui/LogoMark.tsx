import Image from "next/image";
import Link from "next/link";
import { SITE_LOGO_ACCENT } from "@/constants/site";
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
      className={cn("relative block size-13 shrink-0 transition-opacity duration-300 hover:opacity-80", className)}
    >
      <span
        aria-hidden
        className="absolute inset-0 bg-label mask-[url(/icons/logo-mark-shape.png)] mask-contain mask-center mask-no-repeat"
      />
      <Image src={SITE_LOGO_ACCENT} alt="" width={52} height={52} preload className="relative size-13" />
    </Link>
  );
}
