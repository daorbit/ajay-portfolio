import Image from "next/image";
import { PROFILE } from "@/data/profile";
import { cn } from "@/lib/cn";

type AvatarSize = "sm" | "md" | "lg";

type AvatarProps = {
  size?: AvatarSize;
  className?: string;
};

const SIZES: Record<AvatarSize, string> = {
  sm: "size-8 type-label",
  md: "size-14 type-poster-sm",
  lg: "size-20 type-poster-sm",
};

export default function Avatar({ size = "lg", className }: AvatarProps) {
  const sizeClass = cn(SIZES[size], className);

  if (PROFILE.photo) {
    return (
      <Image
        src={PROFILE.photo}
        alt=""
        width={160}
        height={160}
        className={cn("shrink-0 rounded-full object-cover ring-2 ring-accent/60 ring-offset-2 ring-offset-canvas", sizeClass)}
      />
    );
  }

  return (
    <span
      aria-hidden
      className={cn("flex shrink-0 items-center justify-center rounded-full bg-accent text-on-accent", sizeClass)}
    >
      {PROFILE.initials}
    </span>
  );
}
