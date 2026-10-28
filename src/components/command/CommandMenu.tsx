"use client";

import { useEffect, useState, type KeyboardEvent, type MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { CornerDownLeft, Search } from "lucide-react";
import type { CommandItem } from "@/types/command";
import { filterCommandItems } from "@/lib/commandItems";
import { useCommandMenu } from "@/hooks/useCommandMenu";
import { useModalDialog } from "@/hooks/useModalDialog";
import { cn } from "@/lib/cn";

const LIST_ID = "command-menu-list";

function optionId(index: number) {
  return `command-option-${index}`;
}

export default function CommandMenu() {
  const { open, setOpen } = useCommandMenu();
  const ref = useModalDialog(open);
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const items = filterCommandItems(query);

  useEffect(() => {
    document.getElementById(optionId(activeIndex))?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  function close() {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  }

  function select(item: CommandItem) {
    close();
    if (item.href.startsWith("mailto:")) {
      window.location.href = item.href;
    } else if (item.external) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    } else {
      router.push(item.href);
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (!items.length) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % items.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => (index - 1 + items.length) % items.length);
    } else if (event.key === "Enter") {
      event.preventDefault();
      select(items[activeIndex]);
    }
  }

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) close();
  }

  return (
    <dialog
      ref={ref}
      aria-label="Search"
      onClose={close}
      onClick={handleBackdropClick}
      className="mx-auto mt-[12vh] w-[min(38rem,calc(100%-2rem))] overflow-hidden rounded-2xl border border-hairline-strong bg-surface p-0 text-label shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-sm open:animate-dialog-in"
    >
      <div className="flex items-center gap-3 border-b border-hairline px-5">
        <Search className="size-5 shrink-0 text-label-tertiary" aria-hidden />
        <input
          role="combobox"
          aria-expanded="true"
          aria-controls={LIST_ID}
          aria-activedescendant={items.length ? optionId(activeIndex) : undefined}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setActiveIndex(0);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Search pages, projects and links"
          className="type-body h-14 flex-1 bg-transparent text-label outline-none placeholder:text-label-tertiary"
        />
        <kbd className="type-label rounded-md border border-hairline px-1.5 py-0.5 text-label-tertiary">Esc</kbd>
      </div>
      <ul id={LIST_ID} role="listbox" aria-label="Results" className="max-h-[50vh] overflow-y-auto p-2">
        {items.map((item, index) => {
          const active = index === activeIndex;
          const Icon = item.icon;
          return (
            <li key={item.id} role="presentation">
              {item.group !== items[index - 1]?.group && (
                <p className="type-label px-3 pt-3 pb-1.5 text-label-tertiary">{item.group}</p>
              )}
              <div
                id={optionId(index)}
                role="option"
                aria-selected={active}
                onMouseMove={() => setActiveIndex(index)}
                onClick={() => select(item)}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-150",
                  active ? "bg-accent text-white" : "text-label",
                )}
              >
                <Icon className={cn("size-4 shrink-0", active ? "text-white" : "text-label-tertiary")} aria-hidden />
                <span className="type-body flex-1 truncate">{item.label}</span>
                {item.hint && (
                  <span className={cn("type-caption truncate", active ? "text-white/75" : "text-label-tertiary")}>
                    {item.hint}
                  </span>
                )}
              </div>
            </li>
          );
        })}
        {!items.length && (
          <li className="type-body px-3 py-10 text-center text-label-secondary">No results for “{query}”</li>
        )}
      </ul>
      <div className="type-label flex items-center gap-4 border-t border-hairline px-5 py-3 text-label-tertiary">
        <span>↑↓ to navigate</span>
        <span className="flex items-center gap-1">
          <CornerDownLeft className="size-3" aria-hidden /> to open
        </span>
      </div>
    </dialog>
  );
}
