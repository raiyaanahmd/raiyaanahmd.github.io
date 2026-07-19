"use client";

import { ThemeProvider } from "next-themes";
import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/* Theme: class strategy, dark ("Night Ops") default.
   Motion: LazyMotion keeps the animation bundle small;
   reducedMotion="user" makes every animation respect OS settings. */

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </LazyMotion>
    </ThemeProvider>
  );
}
