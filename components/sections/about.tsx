import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";

/* 5/7 split (anti-monotony: hero was 7/5). Type-led, no photo by design. */

export function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto grid max-w-wrap gap-10 px-6 py-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeader tag="PILOT FILE" glyph="ship" title="A brief introduction" />
          </Reveal>
        </div>
        <div className="space-y-5 text-[15.5px] leading-relaxed text-text2 lg:col-span-7">
          <Reveal>
            <p>
              I&apos;m a Computer Science and Software Engineering student in
              Malé. I like taking things apart to figure out how they work,
              and I like building things that people find easy to use.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <p>
              Most of my time goes into two things. I build websites for
              clients, some of which are live and in use today. And I work as
              a computer technician at a government ministry, keeping
              networks, servers and security systems running. That second job
              has taught me a lot about what happens to software after it
              ships.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <ul className="grid gap-2 border-l-2 border-line pl-5 font-mono text-[13px] text-text3 sm:grid-cols-2">
              <li>▸ year 2, bsc (hons) computer science</li>
              <li>▸ computer technician @ govt ministry</li>
              <li>▸ currently building: syncspace</li>
              <li>▸ interests: security, ai, geopolitics</li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
