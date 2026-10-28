"use client";

import { createContext, useEffect, useState, type ReactNode } from "react";
import type { CommandMenuState } from "@/types/command";

export const CommandMenuContext = createContext<CommandMenuState | null>(null);

type CommandMenuProviderProps = {
  children: ReactNode;
};

export default function CommandMenuProvider({ children }: CommandMenuProviderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return <CommandMenuContext value={{ open, setOpen }}>{children}</CommandMenuContext>;
}
