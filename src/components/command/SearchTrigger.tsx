"use client";

import { Search } from "lucide-react";
import { useCommandMenu } from "@/hooks/useCommandMenu";
import { useShortcutLabel } from "@/hooks/useShortcutLabel";
import { cn } from "@/lib/cn";

type SearchTriggerProps = {
  onOpen?: () => void;
  compact?: boolean;
  className?: string;
};

export default function SearchTrigger({ onOpen, compact = false, className }: SearchTriggerProps) {
  const { setOpen } = useCommandMenu();
  const modifier = useShortcutLabel();

  return (
    <button
      type="button"
      onClick={() => {
        onOpen?.();
        setOpen(true);
      }}
      aria-label={compact ? "Search" : undefined}
      className={cn(
        "type-label inline-flex items-center gap-2 text-label-secondary transition-colors duration-300 hover:text-label",
        className,
      )}
    >
      <Search className="size-3.5" aria-hidden />
      {!compact && (
        <>
          Search
          <kbd className="rounded border border-hairline px-1.5 font-sans">{modifier}K</kbd>
        </>
      )}
    </button>
  );
}
