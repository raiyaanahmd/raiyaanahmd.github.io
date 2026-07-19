import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/* Terminal window: hero/about accent (design system §05).
   Static markup — content is real text for crawlers. */

export function Terminal({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("border border-line bg-bg1", className)}>
      <div className="flex items-center gap-1.5 border-b border-line px-3.5 py-2.5">
        <i className="block h-2 w-2 bg-linebright" />
        <i className="block h-2 w-2 bg-linebright" />
        <i className="block h-2 w-2 bg-linebright" />
        <span className="ml-2 font-mono text-[10.5px] tracking-[0.1em] text-text3">
          {title}
        </span>
      </div>
      <pre className="overflow-x-auto whitespace-pre-wrap p-4 font-mono text-[13px] leading-[1.75] text-text2">
        {children}
      </pre>
    </div>
  );
}
