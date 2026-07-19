/* Projects — from PROJECTS/project.txt + verified live sites.
   featured=true → full case-study page at /projects/[slug].
   Others render as compact cards linking out.
   All content confirmed by Raiyaan 2026-07-20. Nothing here should overstate
   your role. */

export type Project = {
  slug: string;
  title: string;
  status: "deployed" | "in-development" | "ongoing";
  year: string;
  oneLiner: string;
  role: string;
  stack: string[];
  featured: boolean;
  /* Card thumbnail (public/ path). Absent → styled HUD placeholder frame. */
  image?: { src: string; width: number; height: number };
  links: { label: string; href: string }[];
  caseStudy?: {
    brief: string;
    problem: string;
    solution: string;
    challenges: string;
    learned: string;
    next: string;
  };
};

export const projects: Project[] = [
  {
    slug: "syncspace",
    title: "SyncSpace",
    status: "in-development",
    year: "2026",
    oneLiner:
      "A social scheduling platform that finds overlapping free time — so plans take seconds, not twenty messages.",
    role: "Designer & developer (solo)",
    stack: [
      "next.js",
      "react",
      "typescript",
      "tailwind css",
      "nestjs",
      "postgresql",
      "prisma",
      "better auth",
      "docker",
    ],
    featured: true,
    links: [], // repo/demo links appear here when public
    caseStudy: {
      brief:
        "SyncSpace makes planning time with friends effortless. Build your own schedule, connect with friends, and instantly see when everyone is actually free.",
      problem:
        "Coordinating a simple meetup usually means a wall of \"when are you free?\" messages across group chats. Everyone's schedule lives in a different place, nobody wants to type it out repeatedly, and plans die in the back-and-forth.",
      solution:
        "A shared scheduling space: each person maintains their own recurring schedule once, connects with friends, and SyncSpace computes the overlap — surfacing windows where everyone is free and letting the group lock a plan in seconds.",
      challenges:
        "The core problem is deceptively hard: representing recurring availability cleanly, comparing many schedules efficiently, and designing an input UI fast enough that people actually keep their schedules updated.",
      learned:
        "Scoping an app around one sharp problem instead of feature sprawl, and designing data models before interfaces.",
      next: "Finish the MVP loop — schedules, connections, overlap view — then open it to a small test group of friends.",
    },
  },
  {
    slug: "islaverde",
    title: "Isla Verde Travel Co",
    status: "deployed",
    year: "2026",
    oneLiner:
      "Full booking website for a Maldives travel agency — property listings, experiences, and a complete admin panel.",
    role: "Developer",
    stack: ["react", "tailwind css"],
    featured: true,
    image: { src: "/projects/islaverde.jpg", width: 1400, height: 875 },
    links: [{ label: "live site", href: "https://islaverdemv.com" }],
    caseStudy: {
      brief:
        "Isla Verde Travel Co sells tailor-made Maldives holidays. The site is their storefront: browsable properties and experiences, a booking flow for guests, and an admin dashboard the agency runs itself.",
      problem:
        "A travel agency needs more than a brochure — inventory changes, prices move seasonally, and bookings arrive daily. Managing that through a developer for every edit doesn't scale for a small business.",
      solution:
        "A React + Tailwind site with a guest-facing side (properties, amenities, experiences, booking confirmation) and an admin side covering bookings, users, properties, pricing, campaigns and bulk imports — so staff manage everything without touching code.",
      challenges:
        "Modelling real inventory (properties, amenities, seasonal pricing) into screens non-technical staff can operate, and keeping the guest flow fast and trustworthy enough for people paying real money.",
      learned:
        "Building for a paying client changes everything: edge cases, admin ergonomics and content workflows matter as much as the public design.",
      next: "Iterating with the client as bookings grow.",
    },
  },
  {
    slug: "goldenwings",
    title: "Golden Wings",
    status: "deployed",
    year: "2025",
    oneLiner:
      "Corporate site for a Maldives construction & renovation company — services, projects, and brand presence.",
    role: "Developer",
    stack: ["wordpress"],
    featured: false,
    links: [{ label: "live site", href: "https://goldenwingsco.com" }],
  },
  {
    slug: "blueprint",
    title: "Blueprint Associates",
    status: "ongoing",
    year: "2022 — PRESENT",
    oneLiner:
      "Civil engineering consultancy site with a 15-year project portfolio — rebuilt from a legacy site, still evolving.",
    role: "Developer, in collaboration with a senior developer",
    stack: ["web"],
    featured: false,
    links: [{ label: "live site", href: "https://blueprintmv.com" }],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
