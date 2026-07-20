/* Honest skills only (NOTES.md content rules) — no invented technologies, no fake levels.
   "learning" flags are a feature: they read as self-aware, not weak. */

export type SkillGroup = {
  index: string;
  title: string;
  blurb: string;
  chips: { label: string; note?: "learning" }[];
};

export const skillGroups: SkillGroup[] = [
  {
    index: "A",
    title: "Web & software",
    blurb: "What I build with. Some of it is in production right now.",
    chips: [
      { label: "react" },
      { label: "tailwind css" },
      { label: "javascript" },
      { label: "html/css" },
      { label: "wordpress" },
      { label: "python" },
      { label: "next.js", note: "learning" },
      { label: "typescript", note: "learning" },
    ],
  },
  {
    index: "B",
    title: "Systems & networks",
    blurb: "From the ministry job. Real networks with real users on them.",
    chips: [
      { label: "network admin" },
      { label: "servers" },
      { label: "firewalls" },
      { label: "access control" },
      { label: "cctv & pabx" },
      { label: "it security" },
      { label: "troubleshooting" },
    ],
  },
  {
    index: "C",
    title: "Tools & beyond",
    blurb: "Everything else I reach for.",
    chips: [
      { label: "git & github" },
      { label: "premiere pro" },
      { label: "photo editing" },
      { label: "office automation" },
      { label: "documentation" },
    ],
  },
];
