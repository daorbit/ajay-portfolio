"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

export function useShortcutLabel() {
  return useSyncExternalStore(
    subscribe,
    () => (/Mac|iPhone|iPad/.test(navigator.userAgent) ? "⌘" : "Ctrl"),
    () => "⌘",
  );
}
