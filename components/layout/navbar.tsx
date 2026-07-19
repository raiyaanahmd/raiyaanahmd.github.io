"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { PixelShip } from "@/components/shared/pixel-ship";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";

/* Fixed navbar: transparent at top, solid panel + border once scrolled.
   Active state: cyan underline. Scrollspy on home sections, pathname elsewhere.
   Mobile: full-screen overlay with mono links. */

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scrollspy — only relevant on the home page. */
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }
    const ids = ["about", "log", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActiveSection(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return pathname === "/" && activeSection === href.slice(2);
    return pathname.startsWith(href.replace(/\/$/, ""));
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-line bg-bg0/90 backdrop-blur-[6px]"
          : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-wrap items-center gap-3 px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-accent"
          aria-label="Home"
        >
          <PixelShip size={16} />
          <span className="font-display text-[15px] font-semibold tracking-tight text-text1">
            {site.wordmark.first}
            <span className="text-accent">.</span>
            {site.wordmark.last}
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-6 md:flex" aria-label="Main">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative py-1 font-mono text-[12.5px] transition-colors",
                isActive(item.href)
                  ? "text-text1 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-accent"
                  : "text-text2 hover:text-accent"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto md:ml-4">
          <ThemeToggle />
        </div>

        <button
          type="button"
          className="text-text1 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <nav
          className="border-b border-line bg-bg0 px-6 pb-6 pt-2 md:hidden"
          aria-label="Mobile"
        >
          <ul className="space-y-1">
            {site.nav.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 font-mono text-sm text-text2 transition-colors hover:text-accent"
                >
                  <span className="mr-3 text-[10px] text-text3">0{i + 1}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
