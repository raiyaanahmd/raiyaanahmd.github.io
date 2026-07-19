import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";

/* 5/7 split (anti-monotony: hero was 7/5). Type-led, no photo by design. */

export function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto grid max-w-wrap gap-10 px-6 py-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeader index="01" label="ABOUT" title="Signal, not noise" />
          </Reveal>
        </div>
        <div className="space-y-5 text-[15.5px] leading-relaxed text-text2 lg:col-span-7">
          <Reveal>
            <p>
              I&apos;m a Computer Science &amp; Software Engineering student in
              Malé who likes understanding how technology works beneath the
              surface — then building things that are reliable, efficient and
              intuitive to use.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <p>
              My work runs on two tracks: building for the web — client sites
              in production, a scheduling app in development — and keeping
              real infrastructure alive as a computer technician at a
              government ministry: networks, servers, firewalls, and the
              Python scripts that quietly remove repetitive work. One track
              teaches me to build software; the other teaches me what happens
              when software meets the real world.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <ul className="grid gap-2 border-l-2 border-line pl-5 font-mono text-[13px] text-text3 sm:grid-cols-2">
              <li>▸ year 2 — bsc (hons) computer science</li>
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
