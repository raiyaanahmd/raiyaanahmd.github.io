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
    "I build web software for real clients and keep government infrastructure running.",
  description:
    "Raiyaan Ahmed — Computer Science student and web developer in Malé, Maldives. Building modern web applications and managing production IT infrastructure.",
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
