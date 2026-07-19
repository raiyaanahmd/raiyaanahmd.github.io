import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/* The workhorse surface: bg1 panel, 1px border, notched corner.
   Optional mono tag label at the top. */

type Props = {
  children: ReactNode;
  className?: string;
  tag?: string;
  hover?: boolean;
};

export function HudCard({ children, className, tag, hover = false }: Props) {
  return (
    <div
      className={cn(
        "notch border border-line bg-bg1 p-6 transition-colors duration-200",
        hover && "hover:border-linebright",
        className
      )}
    >
      {tag && (
        <span className="mb-4 block font-mono text-[10.5px] uppercase tracking-[0.14em] text-text3">
          {tag}
        </span>
      )}
      {children}
    </div>
  );
}
