"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

/* NIGHT_OPS ⇄ DAY_OPS. Mounted guard avoids hydration mismatch on static export. */

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const dark = resolvedTheme !== "light";
  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="notch-sm flex items-center gap-2 border border-linebright bg-bg2 px-3 py-1.5 font-mono text-[11px] tracking-[0.08em] text-text2 transition-colors hover:border-accent hover:text-accent"
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {mounted && dark ? <Moon size={13} /> : <Sun size={13} />}
      <span className="hidden sm:inline">{mounted && !dark ? "DAY_OPS" : "NIGHT_OPS"}</span>
    </button>
  );
}
