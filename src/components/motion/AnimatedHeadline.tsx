"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { HeadlineSegment } from "@/types/portfolio";
import { EXPO_EASE } from "@/constants/motion";
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
  const hidden = reduce ? { opacity: 0 } : { y: "110%" };
  const visible = { opacity: 1, y: 0 };

  return (
    <Tag className={className}>
      {words.map(({ word, muted }, index) => (
        <Fragment key={`${word}-${index}`}>
          <span className="mb-[-0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
            <motion.span
              className={cn("inline-block", muted && "font-serif tracking-tight text-label-secondary normal-case italic")}
              initial={hidden}
              animate={trigger === "load" ? visible : undefined}
              whileInView={trigger === "view" ? visible : undefined}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 1.1, delay: delay + index * 0.05, ease: EXPO_EASE }}
            >
              {word}
            </motion.span>
          </span>{" "}
        </Fragment>
      ))}
    </Tag>
  );
}
