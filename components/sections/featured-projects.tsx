import { projects } from "@/content/projects";
import { SectionHeader } from "@/components/shared/section-header";
import { ProjectCard } from "@/components/projects/project-card";
import { Button } from "@/components/shared/button";
import { Reveal } from "@/components/shared/reveal";

/* Featured = full-width case-study cards; the other client sites sit compact below. */

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-wrap px-6 py-24">
        <Reveal>
          <SectionHeader tag="HANGAR" glyph="crosshair" title="Things I've built" />
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
        <Reveal delay={0.1}>
          <div className="mt-10">
            <Button href="/projects/">All projects</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
