import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { SectionHeader } from "@/components/shared/section-header";
import { ProjectCard } from "@/components/projects/project-card";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Client websites in production and apps in development, with full write-ups for the featured ones.",
};

/* n=4 → no filters (they'd be decoration). Featured first, compact after. */

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className="mx-auto max-w-wrap px-6 pb-24 pt-36">
      <Reveal>
<SectionHeader tag="HANGAR" glyph="crosshair" title="Projects" />
        <p className="-mt-4 mb-12 max-w-[56ch] text-[15.5px] text-text2">
          Some of this is client work that&apos;s live right now. Some of it
          is stuff I&apos;m building for myself. The first two have full
          write-ups.
        </p>
      </Reveal>
      <div className="space-y-6">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <ProjectCard project={p} variant="featured" />
          </Reveal>
        ))}
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {rest.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <ProjectCard project={p} variant="compact" />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
