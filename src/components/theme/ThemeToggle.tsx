"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/cn";

type ThemeToggleProps = {
  compact?: boolean;
  className?: string;
};

export default function ThemeToggle({ compact = false, className }: ThemeToggleProps) {
  const { theme, toggle } = useTheme();
  const next = theme === "dark" ? "light" : "dark";
  const Icon = next === "light" ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} mode`}
      className={cn(
        "type-label inline-flex items-center gap-2 text-label-secondary transition-colors duration-300 hover:text-label",
        compact && "-m-2 p-2",
        className,
      )}
    >
      <Icon className={compact ? "size-4" : "size-3.5"} aria-hidden />
      {!compact && <span>{next} mode</span>}
    </button>
  );
}
