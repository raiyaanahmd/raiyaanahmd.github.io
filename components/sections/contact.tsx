import { site } from "@/content/site";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/shared/button";
import { Reveal } from "@/components/shared/reveal";

/* No backend → mailto. Social slots appear automatically once URLs exist in content/site.ts. */

export function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto flex max-w-wrap flex-col items-center px-6 py-28 text-center">
        <Reveal>
          <SectionHeader
            tag="COMMS"
            glyph="antenna"
            title="Get in touch"
            className="mb-8 [&>span]:justify-center"
          />
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mx-auto max-w-[46ch] text-[15.5px] leading-relaxed text-text2">
            I&apos;m looking for internships and junior roles, and I&apos;m
            always up for an interesting project. Email me and I&apos;ll get
            back to you.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href={`mailto:${site.email}`}>
              Email me
            </Button>
            <span className="font-mono text-[13px] text-text3">{site.email}</span>
          </div>
        </Reveal>
        {site.socials.length > 0 && (
          <Reveal delay={0.18}>
            <div className="mt-6 flex justify-center gap-5">
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
