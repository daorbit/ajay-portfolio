"use client";

import { Search } from "lucide-react";
import { useCommandMenu } from "@/hooks/useCommandMenu";
import { useShortcutLabel } from "@/hooks/useShortcutLabel";

type SearchTriggerProps = {
  onOpen?: () => void;
};

export default function SearchTrigger({ onOpen }: SearchTriggerProps) {
  const { setOpen } = useCommandMenu();
  const modifier = useShortcutLabel();

  return (
    <button
      type="button"
      onClick={() => {
        onOpen?.();
        setOpen(true);
      }}
      className="type-caption flex w-full items-center gap-3 rounded-xl border border-hairline bg-canvas px-3 py-2.5 text-label-tertiary transition-colors duration-300 ease-apple hover:border-hairline-strong hover:text-label-secondary"
    >
      <Search className="size-4" aria-hidden />
      <span className="flex-1 text-left">Search</span>
      <kbd className="type-micro rounded-md border border-hairline px-1.5 py-0.5">{modifier} K</kbd>
    </button>
  );
}
