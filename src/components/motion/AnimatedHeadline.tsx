"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { HeadlineSegment } from "@/types/portfolio";
import { APPLE_EASE } from "@/constants/motion";
import { cn } from "@/lib/cn";

type AnimatedHeadlineProps = {
  segments: HeadlineSegment[];
  as?: "h1" | "h2";
  trigger?: "load" | "view";
  delay?: number;
  className?: string;
};

export default function AnimatedHeadline({
  segments,
  as: Tag = "h2",
  trigger = "view",
  delay = 0,
  className,
}: AnimatedHeadlineProps) {
  const reduce = useReducedMotion();
  const words = segments.flatMap(({ text, muted }) => text.split(" ").map((word) => ({ word, muted })));
  const hidden = reduce ? { opacity: 0 } : { opacity: 0, y: "0.4em", filter: "blur(12px)" };
  const visible = { opacity: 1, y: 0, filter: "blur(0px)" };

  return (
    <Tag className={className}>
      {words.map(({ word, muted }, index) => (
        <Fragment key={`${word}-${index}`}>
          <motion.span
            className={cn("inline-block", muted ? "text-label-tertiary" : "text-metal")}
            initial={hidden}
            animate={trigger === "load" ? visible : undefined}
            whileInView={trigger === "view" ? visible : undefined}
            viewport={{ once: true, margin: "0px 0px -15% 0px" }}
            transition={{ duration: 0.9, delay: delay + index * 0.06, ease: APPLE_EASE }}
          >
            {word}
          </motion.span>{" "}
        </Fragment>
      ))}
    </Tag>
  );
}
