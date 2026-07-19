import { cn } from "@/lib/utils";

/* Tech chip: mono lowercase, 1px border. Optional "learning" marker — honesty as a feature. */
export function TechChip({
  label,
  note,
}: {
  label: string;
  note?: "learning";
}) {
  return (
    <span className="inline-flex items-center gap-1.5 border border-linebright px-2.5 py-1 font-mono text-[11.5px] text-text2">
      {label}
      {note && <span className="text-warn">*</span>}
    </span>
  );
}

/* Status badge with pixel dot: DEPLOYED / IN DEVELOPMENT / ONGOING. */
const statusStyles = {
  deployed: { text: "text-good", dot: "bg-good", label: "DEPLOYED" },
  "in-development": { text: "text-warn", dot: "bg-warn", label: "IN DEVELOPMENT" },
  ongoing: { text: "text-nebula", dot: "bg-nebula", label: "ONGOING" },
} as const;

export function StatusBadge({
  status,
  className,
}: {
  status: keyof typeof statusStyles;
  className?: string;
}) {
  const s = statusStyles[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border border-linebright px-2.5 py-1 font-mono text-[10.5px] tracking-[0.12em]",
        s.text,
        className
      )}
    >
      <span className={cn("h-[7px] w-[7px]", s.dot)} aria-hidden="true" />
      {s.label}
    </span>
  );
}
