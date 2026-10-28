"use client";

import { useContext } from "react";
import { CommandMenuContext } from "@/components/command/CommandMenuProvider";

export function useCommandMenu() {
  const context = useContext(CommandMenuContext);
  if (!context) throw new Error("useCommandMenu must be used inside CommandMenuProvider");
  return context;
}
