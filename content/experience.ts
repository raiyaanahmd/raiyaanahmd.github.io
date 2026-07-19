/* Mission log: work + education in one chronology, newest first.
   All entries sourced from CV.pdf — condensed, nothing invented.
   kind drives node color: work = cyan, education = purple. */

export type LogEntry = {
  kind: "work" | "education";
  when: string;
  title: string;
  org: string;
  summary?: string;
  chips?: string[];
};

export const missionLog: LogEntry[] = [
  {
    kind: "work",
    when: "JUL 2025 — PRESENT",
    title: "Assistant Computer Technician",
    org: "Ministry of Construction, Housing & Infrastructure",
    summary:
      "Keeping ministry infrastructure online — networks, servers, security systems — while building internal tools that remove manual work and modernising ICT systems.",
    chips: ["networking", "servers", "python", "it security"],
  },
  {
    kind: "education",
    when: "2024 — 2028 (EXPECTED)",
    title: "BSc (Hons) Computer Science — Year 2",
    org: "Villa College · University of the West of England, Bristol",
  },
  {
    kind: "work",
    when: "JAN 2024 — JUL 2025",
    title: "Administrative Officer",
    org: "High Court of the Maldives",
    summary:
      "Case registration and document workflows for the Judges' bench — deadline-driven work where accuracy is non-negotiable.",
    chips: ["case management", "documentation"],
  },
  {
    kind: "education",
    when: "2023",
    title: "Certificate 4 in Information Technology",
    org: "Villa College — CGPA 3.75",
  },
  {
    kind: "work",
    when: "NOV 2022 — OCT 2023",
    title: "Administrative & Computer Technician",
    org: "Blueprint Associates Pvt Ltd",
    summary:
      "Rebuilt the company website to modern standards and brought a decade of project history online; handled IT support alongside.",
    chips: ["web development", "it support"],
  },
  {
    kind: "work",
    when: "MAR 2022 — OCT 2022",
    title: "Assistant Procurement Officer (Contract)",
    org: "Ministry of National Planning, Housing & Infrastructure",
    summary:
      "Purchase orders, vendor coordination and records — process discipline at government scale.",
    chips: ["procurement", "process"],
  },
  {
    kind: "work",
    when: "NOV 2021 — JUL 2022",
    title: "IT & Technical Intern",
    org: "Next TV / Techno Pvt Ltd",
    summary:
      "Video editing and graphics for broadcast programs with Premiere Pro, plus general technical support.",
    chips: ["premiere pro", "graphics"],
  },
];
