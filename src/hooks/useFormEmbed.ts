"use client";

import { useEffect, useRef } from "react";
import type { FormEmbedMessage } from "@/types/portfolio";

export function useFormEmbed(origin: string) {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function onMessage(event: MessageEvent<FormEmbedMessage>) {
      const frame = ref.current;
      if (!frame || event.origin !== origin || event.source !== frame.contentWindow) return;

      if (event.data?.type === "da-forms:height" && typeof event.data.height === "number") {
        frame.style.height = `${event.data.height}px`;
      }

      if (event.data?.type === "da-forms:ready") {
        frame.contentWindow?.postMessage(
          { type: "da-forms:context", page: location.href, referrer: document.referrer },
          origin,
        );
      }
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [origin]);

  return ref;
}
