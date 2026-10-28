import type { ToolLogo } from "@/types/portfolio";

type BrandLogoProps = {
  logo: ToolLogo;
  className?: string;
};

export default function BrandLogo({ logo, className }: BrandLogoProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <path d={logo.path} fill="currentColor" />
    </svg>
  );
}
