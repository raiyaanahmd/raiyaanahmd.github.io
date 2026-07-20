import { missionLog } from "@/content/experience";
import { SectionHeader } from "@/components/shared/section-header";
import { TechChip } from "@/components/shared/chips";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

/* Work + education in one rail (approved Phase 1 decision).
   Diamond nodes: cyan = work, purple = education. */

export function MissionLog() {
  return (
    <section id="log" className="border-t border-line">
      <div className="mx-auto grid max-w-wrap gap-12 px-6 py-24 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Reveal>
            <SectionHeader tag="MISSION LOG" glyph="flag" title="Where I've worked and studied" />
          </Reveal>
          <div className="relative pl-9 before:absolute before:bottom-2 before:left-2 before:top-2 before:w-px before:bg-linebright">
            {missionLog.map((entry, i) => (
              <Reveal
                key={`${entry.org}-${entry.when}`}
                delay={Math.min(i * 0.05, 0.25)}
                className="relative pb-10 last:pb-0"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -left-[30px] top-2 h-[9px] w-[9px] rotate-45",
                    entry.kind === "work" ? "bg-accent" : "bg-nebula"
                  )}
                />
                <p className="font-mono text-[11px] tracking-[0.1em] text-text3">
                  {entry.when}
                </p>
                <h3 className="mt-1.5 font-display text-[17px] font-semibold text-text1">
                  {entry.title}
                </h3>
                <p
                  className={cn(
                    "text-[13.5px]",
                    entry.kind === "work" ? "text-accent" : "text-nebula"
                  )}
                >
                  {entry.org}
                </p>
                {entry.summary && (
                  <p className="mt-2 max-w-[58ch] text-sm leading-relaxed text-text2">
                    {entry.summary}
                  </p>
                )}
                {entry.chips && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {entry.chips.map((c) => (
                      <TechChip key={c} label={c} />
                    ))}
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4">
          <Reveal delay={0.15}>
            <div className="notch border border-line bg-bg1 p-6 lg:sticky lg:top-24">
              <span className="mb-4 block font-mono text-[10.5px] uppercase tracking-[0.14em] text-text3">
                Side quests
              </span>
              <ul className="space-y-3 font-mono text-[13px] text-text2">
                <li>
                  <span className="text-text3">languages:</span> dhivehi ·
                  english
                </li>
                <li>
                  <span className="text-text3">off-screen:</span> swimming ·
                  hiking · painting
                </li>
                <li>
                  <span className="text-text3">reading:</span> emerging tech ·
                  geopolitics
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
