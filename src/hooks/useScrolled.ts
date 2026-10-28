"use client";

import { useSyncExternalStore } from "react";

const THRESHOLD = 12;

function subscribe(listener: () => void) {
  window.addEventListener("scroll", listener, { passive: true });
  return () => window.removeEventListener("scroll", listener);
}

export function useScrolled() {
  return useSyncExternalStore(
    subscribe,
    () => window.scrollY > THRESHOLD,
    () => false,
  );
}
