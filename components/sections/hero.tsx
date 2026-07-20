import { site } from "@/content/site";
import { Button } from "@/components/shared/button";
import { Terminal } from "@/components/shared/terminal";
import { TypedLine } from "@/components/shared/typed-line";

/* 7/5 asymmetric hero. H1 + role are static text (SEO);
   the typed line is decorative. One primary CTA per view.
   Entrance is .reveal-css (not Framer <Reveal>): the terminal <pre> is the
   LCP element, and a JS-gated fade left it invisible until hydration. */

export function Hero() {
  return (
    <section className="mx-auto grid max-w-wrap gap-10 px-6 pb-24 pt-36 lg:grid-cols-12 lg:gap-8">
      <div className="reveal-css min-w-0 lg:col-span-7">
        <div>
          <h1 className="font-display text-5xl font-bold tracking-tight text-text1 sm:text-6xl">
            {site.name}
          </h1>
          <p className="mt-4 max-w-[54ch] text-lg text-text2">{site.tagline}</p>
          <p className="mt-6 font-mono text-[13.5px] text-accent">
            <TypedLine text="cs student · web developer · it technician" />
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="primary" href="/projects/">
              View projects
            </Button>
            <Button variant="terminal" href="/resume/">
              &gt; view_resume
            </Button>
          </div>
        </div>
      </div>

      <div
        className="reveal-css min-w-0 lg:col-span-5"
        style={{ animationDelay: "0.12s" }}
      >
        <div>
          <Terminal title="raiyaan@male: ~/portfolio">
            <span className="text-text2">
              $ <span className="text-accent">whoami</span>
              {"\n"}
              <span className="text-good">▸</span> computer science student,
              year 2 of 3{"\n"}$ <span className="text-accent">status</span>{" "}
              --current{"\n"}
              <span className="text-good">▸</span> shipping client sites ·
              building{" "}
              <span className="text-magenta">syncspace</span>
              {"\n"}$ <span className="text-accent">uptime</span>
              {"\n"}
              <span className="text-good">▸</span> ministry systems, kept
              online since 2025{"\n"}$ <span className="text-accent">where</span>
              {"\n"}
              <span className="text-good">▸</span> malé, maldives · utc+5_
            </span>
          </Terminal>
        </div>
      </div>
    </section>
  );
}
