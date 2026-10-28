"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";
import { readActiveTheme, readStoredTheme, storeTheme, type Theme } from "@/lib/theme";

const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const media = matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", listener);
  return () => {
    listeners.delete(listener);
    media.removeEventListener("change", listener);
  };
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  notify();
}

export function useTheme() {
  const theme = useSyncExternalStore<Theme>(subscribe, readActiveTheme, () => "dark");

  useLayoutEffect(() => {
    const stored = readStoredTheme();
    if (stored && document.documentElement.dataset.theme !== stored) applyTheme(stored);
  }, []);

  function toggle() {
    const next: Theme = readActiveTheme() === "dark" ? "light" : "dark";
    storeTheme(next);
    if (document.startViewTransition) {
      document.startViewTransition(() => applyTheme(next));
    } else {
      applyTheme(next);
    }
  }

  return { theme, toggle };
}
