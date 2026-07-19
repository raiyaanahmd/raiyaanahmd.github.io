import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects, getProject } from "@/content/projects";
import { StatusBadge, TechChip } from "@/components/shared/chips";
import { Reveal } from "@/components/shared/reveal";

/* Case-study pages — static params from content, only featured projects. */

const caseStudyProjects = projects.filter((p) => p.featured && p.caseStudy);

export function generateStaticParams() {
  return caseStudyProjects.map((p) => ({ slug: p.slug }));
}

/* No `dynamicParams = false` — it breaks `next dev` with output: "export"
   (Next 14 bug: dev demands fallbackMode "static" and 500s every case study).
   The static host 404s unknown slugs anyway, so behavior shipped is identical. */

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return { title: project.title, description: project.oneLiner };
}

const sections = [
  ["brief", "BRIEF"],
  ["problem", "PROBLEM"],
  ["solution", "SOLUTION"],
  ["challenges", "CHALLENGES"],
  ["learned", "LEARNED"],
  ["next", "NEXT"],
] as const;

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project || !project.caseStudy) notFound();

  const idx = caseStudyProjects.findIndex((p) => p.slug === project.slug);
  const prev = caseStudyProjects[idx - 1];
  const next = caseStudyProjects[idx + 1];

  return (
    <div className="mx-auto max-w-wrap px-6 pb-24 pt-32">
      <Reveal>
        <Link
          href="/projects/"
          className="inline-flex items-center gap-2 font-mono text-[12.5px] text-text2 transition-colors hover:text-accent"
        >
          <ArrowLeft size={14} /> projects
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <StatusBadge status={project.status} />
          <span className="font-mono text-[11px] tracking-[0.1em] text-text3">
            {project.year}
          </span>
        </div>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-text1 sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-[56ch] text-lg text-text2">{project.oneLiner}</p>
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-12">
        {/* Prose — 58ch measure */}
        <div className="space-y-12 lg:col-span-8">
          {sections.map(([key, label], i) => (
            <Reveal key={key} delay={Math.min(i * 0.04, 0.2)}>
              <section>
                <h2 className="pixel-index">{label}</h2>
                <p className="mt-4 max-w-[58ch] text-[15.5px] leading-relaxed text-text2">
                  {project.caseStudy![key]}
                </p>
              </section>
            </Reveal>
          ))}
        </div>

        {/* Sticky meta rail */}
        <div className="lg:col-span-4">
          <Reveal delay={0.1}>
            <div className="notch border border-line bg-bg1 p-6 lg:sticky lg:top-24">
              <span className="mb-5 block font-mono text-[10.5px] uppercase tracking-[0.14em] text-text3">
                Mission data
              </span>
              <dl className="space-y-4 text-[13.5px]">
                <div>
                  <dt className="font-mono text-[11px] text-text3">role</dt>
                  <dd className="mt-1 text-text1">{project.role}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] text-text3">stack</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                      <TechChip key={s} label={s} />
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] text-text3">year</dt>
                  <dd className="mt-1 text-text1">{project.year}</dd>
                </div>
                {project.links.length > 0 && (
                  <div>
                    <dt className="font-mono text-[11px] text-text3">links</dt>
                    <dd className="mt-2 space-y-1.5">
                      {project.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 font-mono text-[12.5px] text-accent hover:text-accenthover"
                        >
                          {l.label} <ArrowUpRight size={13} />
                        </a>
                      ))}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Prev / next */}
      <div className="mt-20 flex flex-wrap justify-between gap-4 border-t border-line pt-8">
        {prev ? (
          <Link
            href={`/projects/${prev.slug}/`}
            className="inline-flex items-center gap-2 font-mono text-[12.5px] text-text2 transition-colors hover:text-accent"
          >
            <ArrowLeft size={14} /> {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            href={`/projects/${next.slug}/`}
            className="inline-flex items-center gap-2 font-mono text-[12.5px] text-text2 transition-colors hover:text-accent"
          >
            {next.title} <ArrowRight size={14} />
          </Link>
        )}
      </div>
    </div>
  );
}
