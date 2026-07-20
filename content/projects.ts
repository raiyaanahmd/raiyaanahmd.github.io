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
      "An app that compares schedules across your friend group and finds the times everyone is actually free.",
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
        "SyncSpace is an app I'm building to make planning time with friends less painful. You keep your own schedule, add your friends, and it shows you when everyone is free.",
      problem:
        "Planning a simple meetup usually turns into twenty messages of \"when are you free\". Everyone's schedule lives somewhere different, nobody wants to type theirs out again, and half the time the plan just dies.",
      solution:
        "Everyone fills in their recurring schedule once. When a group wants to meet, SyncSpace lines the schedules up and shows the windows where everyone is free. Then you just pick one.",
      challenges:
        "The hard part is representing recurring availability without the data model turning into a mess, and making schedule input quick enough that people actually keep theirs up to date.",
      learned:
        "Scoping. My first instinct was to keep adding features. Building around one specific problem, and designing the data model before the screens, has made it much more manageable.",
      next: "Finish the core loop of schedules, friends and overlaps, then get a small group of friends to actually use it.",
    },
  },
  {
    slug: "islaverde",
    title: "Isla Verde Travel Co",
    status: "deployed",
    year: "2026",
    oneLiner:
      "A booking website for a Maldives travel agency, with property listings, experiences and an admin panel the staff run themselves.",
    role: "Developer",
    stack: ["react", "tailwind css"],
    featured: true,
    image: { src: "/projects/islaverde.jpg", width: 1400, height: 875 },
    links: [{ label: "live site", href: "https://islaverdemv.com" }],
    caseStudy: {
      brief:
        "Isla Verde is a travel agency in the Maldives selling tailor-made holidays. I built their website, which is both their storefront and the admin system they run the business on.",
      problem:
        "A travel agency site can't just be a brochure. Prices change with the seasons, properties come and go, and bookings arrive every day. The staff needed to manage all of that without calling a developer for every edit.",
      solution:
        "There are two sides. Guests browse properties and experiences and make bookings. Staff get an admin panel covering bookings, users, properties, pricing, campaigns and bulk imports, so they can run everything themselves.",
      challenges:
        "Turning real inventory like seasonal pricing and amenities into screens that non-technical staff can use without training. And keeping the guest side fast and trustworthy, because people are paying real money through it.",
      learned:
        "Client work is different. Edge cases, admin screens and content workflows matter just as much as the public design. Probably more.",
      next: "Iterating with the client as bookings grow.",
    },
  },
  {
    slug: "goldenwings",
    title: "Golden Wings",
    status: "deployed",
    year: "2025",
    oneLiner:
      "The company website for a Maldives construction and renovation firm. Services, past projects and contact.",
    role: "Developer",
    stack: ["wordpress"],
    featured: false,
    links: [{ label: "live site", href: "https://goldenwingsco.com" }],
  },
  {
    slug: "blueprint",
    title: "Blueprint Associates",
    status: "ongoing",
    year: "2022 – PRESENT",
    oneLiner:
      "Rebuilt an ageing civil engineering consultancy site and brought 15 years of their projects online. Still evolving.",
    role: "Developer, in collaboration with a senior developer",
    stack: ["web"],
    featured: false,
    links: [{ label: "live site", href: "https://blueprintmv.com" }],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
