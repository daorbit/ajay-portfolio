import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "text";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
};

const VARIANTS: Record<Variant, string> = {
  primary: "rounded-full bg-accent px-6 py-3.5 text-on-accent hover:bg-accent-hover",
  outline: "rounded-full border border-accent/50 px-6 py-3.5 text-accent hover:border-accent hover:bg-accent/10",
  text: "border-b border-current pb-1 text-accent hover:opacity-70",
};

export default function ButtonLink({ href, children, variant = "primary", external = false, className }: ButtonLinkProps) {
  const classes = cn(
    "type-label group/button inline-flex items-center justify-center gap-2 transition-[color,background-color,border-color,opacity] duration-300 ease-apple",
    VARIANTS[variant],
    className,
  );

  if (external || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
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
