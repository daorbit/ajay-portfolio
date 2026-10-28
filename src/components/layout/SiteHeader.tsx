"use client";

import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/cn";
import SearchTrigger from "@/components/command/SearchTrigger";
import HeaderNav from "@/components/layout/HeaderNav";
import MenuToggle from "@/components/layout/MenuToggle";
import ThemeToggle from "@/components/theme/ThemeToggle";
import Wordmark from "@/components/ui/Wordmark";

type SiteHeaderProps = {
  onOpenMenu: () => void;
};

export default function SiteHeader({ onOpenMenu }: SiteHeaderProps) {
  const scrolled = useScrolled();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-500 ease-apple",
        scrolled ? "border-hairline bg-nav backdrop-blur-xl backdrop-saturate-150" : "border-transparent",
      )}
    >
      <div className="page-width flex h-nav items-center justify-between gap-6">
        <Wordmark withAvatar nameClassName="md:max-lg:sr-only" />
        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          <HeaderNav />
          <span aria-hidden className="h-4 w-px bg-hairline-strong" />
          <div className="flex items-center gap-5">
            <SearchTrigger compact className="lg:hidden" />
            <SearchTrigger className="hidden lg:inline-flex" />
            <ThemeToggle compact />
          </div>
        </div>
        <div className="md:hidden">
          <MenuToggle open={false} onClick={onOpenMenu} />
        </div>
      </div>
    </header>
  );
}
