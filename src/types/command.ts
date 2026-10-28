import type { LucideIcon } from "lucide-react";

export type CommandGroup = "Pages" | "Projects" | "Contact";

export type CommandItem = {
  id: string;
  label: string;
  group: CommandGroup;
  href: string;
  icon: LucideIcon;
  hint?: string;
  external?: boolean;
};

export type CommandMenuState = {
  open: boolean;
  setOpen: (open: boolean) => void;
};
