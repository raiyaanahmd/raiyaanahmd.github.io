import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg0: "var(--bg0)",
        bg1: "var(--bg1)",
        bg2: "var(--bg2)",
        bg3: "var(--bg3)",
        line: "var(--line)",
        linebright: "var(--line-bright)",
        text1: "var(--text1)",
        text2: "var(--text2)",
        text3: "var(--text3)",
        accent: "var(--accent)",
        accenthover: "var(--accent-hover)",
        accentink: "var(--accent-ink)",
        nebula: "var(--purple)",
        magenta: "var(--magenta)",
        good: "var(--green)",
        warn: "var(--amber)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        pixel: ["var(--font-pixel)", "monospace"],
      },
      maxWidth: {
        wrap: "1100px",
      },
      transitionTimingFunction: {
        reveal: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
