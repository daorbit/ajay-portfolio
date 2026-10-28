"use client";

import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/cn";
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
        <Wordmark />
        <div className="flex items-center gap-5 md:gap-7 lg:gap-10">
          <div className="hidden md:block">
            <HeaderNav />
          </div>
          <span aria-hidden className="hidden h-4 w-px bg-hairline-strong md:block" />
          <ThemeToggle compact />
          <div className="md:hidden">
            <MenuToggle open={false} onClick={onOpenMenu} />
          </div>
        </div>
      </div>
    </header>
  );
}
