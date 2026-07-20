import type { Metadata } from "next";
import { missionLog } from "@/content/experience";
import { skillGroups } from "@/content/skills";
import { site } from "@/content/site";
import { SectionHeader } from "@/components/shared/section-header";
import { TechChip } from "@/components/shared/chips";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${site.name}. Experience, education and skills.`,
};

/* Web resume renders from the same content files as the rest of the site —
   single source of truth. PDF download removed for now (2026-07-20); to bring
   it back: drop the file in public/ and restore a Button href to it here. */

export default function ResumePage() {
  const work = missionLog.filter((e) => e.kind === "work");
  const education = missionLog.filter((e) => e.kind === "education");

  return (
    <div className="mx-auto max-w-wrap px-6 pb-24 pt-36">
      <Reveal>
        <SectionHeader tag="DOSSIER" glyph="file" title="Resume" className="mb-0" />
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="pixel-index">EXPERIENCE</h2>
          </Reveal>
          <div className="mt-6 space-y-8">
            {work.map((e, i) => (
              <Reveal key={`${e.org}-${e.when}`} delay={Math.min(i * 0.04, 0.2)}>
                <div className="border-l-2 border-line pl-5">
                  <p className="font-mono text-[11px] tracking-[0.1em] text-text3">
                    {e.when}
                  </p>
                  <h3 className="mt-1 font-display text-base font-semibold text-text1">
                    {e.title}
                  </h3>
                  <p className="text-[13px] text-accent">{e.org}</p>
                  {e.summary && (
                    <p className="mt-1.5 max-w-[56ch] text-sm text-text2">{e.summary}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="space-y-12 lg:col-span-5">
          <div>
            <Reveal>
              <h2 className="pixel-index">EDUCATION</h2>
            </Reveal>
            <div className="mt-6 space-y-6">
              {education.map((e) => (
                <Reveal key={e.org + e.when}>
                  <div className="border-l-2 border-line pl-5">
                    <p className="font-mono text-[11px] tracking-[0.1em] text-text3">
                      {e.when}
                    </p>
                    <h3 className="mt-1 font-display text-base font-semibold text-text1">
                      {e.title}
                    </h3>
                    <p className={cn("text-[13px]", "text-nebula")}>{e.org}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <h2 className="pixel-index">SKILLS</h2>
            </Reveal>
            <div className="mt-6 space-y-5">
              {skillGroups.map((g) => (
                <Reveal key={g.index}>
                  <div>
                    <h3 className="font-mono text-[12px] text-text2">{g.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {g.chips.map((c) => (
                        <TechChip key={c.label} label={c.label} note={c.note} />
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
