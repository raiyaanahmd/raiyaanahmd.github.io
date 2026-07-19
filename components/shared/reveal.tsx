"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";

/* Scroll entrance: 12px rise + fade, once, ease [0.16,1,0.3,1] (design system §06).
   MotionConfig reducedMotion="user" in providers disables it globally
   for users who prefer reduced motion. */

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: Props) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </m.div>
  );
}
