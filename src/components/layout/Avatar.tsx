import Image from "next/image";
import { PROFILE } from "@/data/profile";
import { cn } from "@/lib/cn";

type AvatarProps = {
  size?: "sm" | "lg";
};

export default function Avatar({ size = "lg" }: AvatarProps) {
  const sizeClass = size === "lg" ? "size-16 type-subhead" : "size-8 type-micro font-semibold";

  if (PROFILE.photo) {
    return (
      <Image
        src={PROFILE.photo}
        alt={PROFILE.name}
        width={128}
        height={128}
        className={cn("rounded-full object-cover ring-1 ring-hairline-strong", sizeClass)}
      />
    );
  }

  return (
    <span
      aria-hidden
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full bg-linear-to-br from-accent to-link text-white ring-1 ring-hairline-strong",
        sizeClass,
      )}
    >
      {PROFILE.initials}
    </span>
  );
}
