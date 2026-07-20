/* Single source of truth for identity + contact.
   Social slots render only when a URL is present — add GitHub/LinkedIn here later. */

export const site = {
  name: "Raiyaan Ahmed",
  wordmark: { first: "raiyaan", last: "ahmed" },
  role: "CS student & web developer",
  location: "Malé, Maldives",
  timezone: "UTC+5",
  email: "raiyaanahmd@gmail.com",
  tagline:
    "I study computer science, build websites for real clients, and keep the computers running at a government ministry.",
  description:
    "Raiyaan Ahmed is a computer science student and web developer from Malé, Maldives. He builds websites for real clients and works in government IT.",
  url: "https://raiyaanahmd.github.io",
  socials: [
    // { label: "github", href: "https://github.com/..." },
    // { label: "linkedin", href: "https://linkedin.com/in/..." },
  ] as { label: string; href: string }[],
  nav: [
    { label: "about", href: "/#about" },
    { label: "projects", href: "/projects/" },
    { label: "log", href: "/#log" },
    { label: "contact", href: "/#contact" },
  ],
};
