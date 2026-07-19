import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

/* shadcn-style button re-skinned to the design system:
   notched corners, mono type, one primary per view.

   Server-component safe by design: this is a styled link, not an
   interactive button (no event handlers — those live in client
   components like ThemeToggle). Destination handling is automatic:
     /route     → next/link
     /file.pdf  → plain <a>
     https://…  → <a target="_blank" rel="noopener noreferrer">
     mailto:…   → plain <a> (no new tab)                          */

const buttonVariants = cva(
  "notch-sm inline-flex items-center gap-2.5 font-mono text-[13.5px] font-medium tracking-tight px-5 py-2.5 transition-all duration-200 select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-accentink hover:bg-accenthover hover:-translate-y-px hover:[box-shadow:var(--glow)]",
        ghost:
          "border border-linebright text-text1 hover:border-accent hover:text-accent",
        terminal:
          "border border-dashed border-linebright bg-bg1 text-accent hover:border-solid hover:border-accent",
      },
    },
    defaultVariants: { variant: "ghost" },
  }
);

type Props = VariantProps<typeof buttonVariants> & {
  href: string;
  className?: string;
  children: ReactNode;
};

export function Button({ variant, href, className, children }: Props) {
  const cls = cn(buttonVariants({ variant }), className);
  const isHttp = /^https?:/.test(href);
  const isInternalRoute = href.startsWith("/") && !/\.[a-z0-9]+$/i.test(href);

  if (isInternalRoute) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={cls}
      {...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
