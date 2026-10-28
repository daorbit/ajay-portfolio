import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "text";
type Size = "sm" | "md";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
};

const VARIANTS: Record<Variant, string> = {
  primary: "rounded-full bg-accent text-white hover:bg-accent-hover",
  secondary: "rounded-full border border-hairline-strong text-label hover:border-label hover:bg-label/5",
  text: "text-link hover:underline underline-offset-4",
};

const SIZES: Record<Size, string> = {
  sm: "type-micro px-3 py-1",
  md: "type-body px-[1.375rem] py-3",
};

const TEXT_SIZES: Record<Size, string> = {
  sm: "type-micro",
  md: "type-body",
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className,
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-1.5 transition-colors duration-300 ease-apple",
    VARIANTS[variant],
    variant === "text" ? TEXT_SIZES[size] : SIZES[size],
    className,
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
