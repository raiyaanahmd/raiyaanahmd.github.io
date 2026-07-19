import { site } from "@/content/site";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/shared/button";
import { Reveal } from "@/components/shared/reveal";

/* No backend → mailto. Social slots appear automatically once URLs exist in content/site.ts. */

export function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-wrap px-6 py-24">
        <Reveal>
          <SectionHeader index="05" label="TRANSMISSION" title="Get in touch" />
        </Reveal>
        <Reveal delay={0.06}>
          <p className="max-w-[52ch] text-[15.5px] leading-relaxed text-text2">
            Open to internships, junior roles and interesting web projects. The
            inbox is monitored more reliably than most government servers.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="primary" href={`mailto:${site.email}`}>
              Initiate contact
            </Button>
            <span className="font-mono text-[13px] text-text3">{site.email}</span>
          </div>
        </Reveal>
        {site.socials.length > 0 && (
          <Reveal delay={0.18}>
            <div className="mt-6 flex gap-5">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[12.5px] text-text2 transition-colors hover:text-accent"
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
