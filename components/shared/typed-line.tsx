"use client";

import { useEffect, useRef, useState } from "react";

/* Types its text once (no loop), ~35ms/char. Decorative only — never key content.
   Reduced-motion users and no-JS crawlers get the full text instantly. */

export function TypedLine({ text }: { text: string }) {
  const [shown, setShown] = useState(text); // SSR/static render: full text
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setShown("");
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) window.clearInterval(id);
    }, 35);
    return () => window.clearInterval(id);
  }, [text]);

  const done = shown.length >= text.length;
  return (
    <span aria-label={text}>
      {shown}
      <span
        aria-hidden="true"
        className={
        "ml-0.5 inline-block h-[1em] w-[8px] translate-y-[0.15em] bg-accent" +
          (done ? " motion-safe:animate-pulse" : "")
        }
      />
    </span>
  );
}
