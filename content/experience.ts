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
    when: "JUL 2025 – PRESENT",
    title: "Assistant Computer Technician",
    org: "Ministry of Construction, Housing & Infrastructure",
    summary:
      "I look after the ministry's networks, servers and security systems, and I write small internal tools that replace manual work.",
    chips: ["networking", "servers", "python", "it security"],
  },
  {
    kind: "education",
    when: "2024 – 2028 (EXPECTED)",
    title: "BSc (Hons) Computer Science, Year 2",
    org: "Villa College · University of the West of England, Bristol",
  },
  {
    kind: "work",
    when: "JAN 2024 – JUL 2025",
    title: "Administrative Officer",
    org: "High Court of the Maldives",
    summary:
      "Handled case registration and document workflows in the court's case-management systems for the Judges' bench. High volume, hard deadlines, and no room for mistakes.",
    chips: ["case management systems", "data workflows"],
  },
  {
    kind: "education",
    when: "2023",
    title: "Certificate 4 in Information Technology",
    org: "Villa College · CGPA 3.75",
  },
  {
    kind: "work",
    when: "NOV 2022 – OCT 2023",
    title: "Administrative & Computer Technician",
    org: "Blueprint Associates Pvt Ltd",
    summary:
      "Rebuilt the company website and brought about a decade of old project records online. Handled day-to-day IT support at the same time.",
    chips: ["web development", "it support"],
  },
  {
    kind: "work",
    when: "NOV 2021 – JUL 2022",
    title: "IT & Technical Intern",
    org: "Next TV / Techno Pvt Ltd",
    summary:
      "Edited video and made graphics for broadcast shows in Premiere Pro, and helped out with general tech support.",
    chips: ["premiere pro", "graphics"],
  },
];
