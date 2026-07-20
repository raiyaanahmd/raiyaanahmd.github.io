import { skillGroups } from "@/content/skills";
import { SectionHeader } from "@/components/shared/section-header";
import { HudCard } from "@/components/shared/hud-card";
import { TechChip } from "@/components/shared/chips";
import { Reveal } from "@/components/shared/reveal";

/* Three HUD cards, honest chips, no percentage bars (they fake precision).
   * = currently learning — self-awareness reads stronger than inflation. */

export function Skills() {
  return (
    <section className="relative border-t border-line">
      <div aria-hidden="true" className="blueprint-grid absolute inset-0 opacity-[0.35]" />
      <div className="relative mx-auto max-w-wrap px-6 py-24">
        <Reveal>
          <SectionHeader tag="LOADOUT" glyph="bars" title="What I work with" />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.index} delay={i * 0.06}>
              <HudCard tag={`MODULE ${group.index}`} hover className="h-full">
                <h3 className="font-display text-lg font-semibold text-text1">
                  {group.title}
                </h3>
                <p className="mt-1.5 text-[13.5px] text-text2">{group.blurb}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.chips.map((chip) => (
                    <TechChip key={chip.label} label={chip.label} note={chip.note} />
                  ))}
                </div>
              </HudCard>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 font-mono text-[11.5px] text-text3">
          <span className="text-warn">*</span> still learning this one. this
          site is how I&apos;m practicing.
        </p>
      </div>
    </section>
  );
}
