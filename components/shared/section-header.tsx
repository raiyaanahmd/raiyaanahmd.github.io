import { cn } from "@/lib/utils";

/* Pixel index + display heading — every section opens with this.
   The pixel font's only sanctioned habitat. */

type Props = {
  index: string;
  label: string;
  title: string;
  className?: string;
};

export function SectionHeader({ index, label, title, className }: Props) {
  return (
    <div className={cn("mb-10", className)}>
      <span className="pixel-index">
        {index} <span aria-hidden="true">//</span> {label}
      </span>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text1 sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
