import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { StatusBadge, TechChip } from "@/components/shared/chips";
import { cn } from "@/lib/utils";

/* Two shapes:
   featured → large card linking to the case study
   compact  → small card linking out to the live site
   Thumbnails: intentional HUD placeholder frame until real screenshots land (Phase 4). */

export function ProjectCard({
  project,
  variant = "featured",
}: {
  project: Project;
  variant?: "featured" | "compact";
}) {
  const external = project.links.find((l) => l.label === "live site");

  if (variant === "compact") {
    return (
      <a
        href={external?.href ?? "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="notch group flex h-full flex-col border border-line bg-bg1 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-[17px] font-semibold text-text1">
            {project.title}
          </h3>
          <ArrowUpRight
            size={16}
            className="mt-1 shrink-0 text-text3 transition-colors group-hover:text-accent"
          />
        </div>
        <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-text2">
          {project.oneLiner}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <StatusBadge status={project.status} />
          {project.stack.map((s) => (
            <TechChip key={s} label={s} />
          ))}
        </div>
      </a>
    );
  }

  return (
    <Link
      href={`/projects/${project.slug}/`}
      className="notch group grid overflow-hidden border border-line bg-bg1 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent md:grid-cols-2"
    >
      {project.image ? (
        /* Real screenshot; decorative — the card title carries the meaning. */
        <div className="relative min-h-[210px] border-b border-line bg-bg3 md:border-b-0 md:border-r">
          <Image
            src={project.image.src}
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      ) : (
        /* Placeholder visual frame — deliberate HUD styling, not a broken image. */
        <div
          aria-hidden="true"
          className="relative min-h-[180px] border-b border-line bg-bg3 md:border-b-0 md:border-r"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent 0 22px, var(--line) 22px 23px)",
          }}
        >
          <span className="absolute inset-0 flex items-center justify-center font-mono text-[11px] tracking-[0.14em] text-text3">
            [ {project.status === "in-development" ? "VISUAL PENDING" : "SCREENSHOT INCOMING"} ]
          </span>
        </div>
      )}
      <div className="flex flex-col p-7">
        <StatusBadge status={project.status} className="self-start" />
        <h3 className="mt-4 font-display text-[22px] font-semibold text-text1">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text2">
          {project.oneLiner}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <TechChip key={s} label={s} />
          ))}
        </div>
        <span
          className={cn(
            "mt-5 inline-flex items-center gap-2 font-mono text-[12.5px] text-accent",
            "transition-transform duration-200 group-hover:translate-x-1"
          )}
        >
          read case study <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
