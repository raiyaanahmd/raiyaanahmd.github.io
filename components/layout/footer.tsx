import { site } from "@/content/site";
import { PixelShip } from "@/components/shared/pixel-ship";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-wrap flex-col items-center gap-4 px-6 py-10 sm:flex-row">
        <span className="flex items-center gap-2.5 text-accent">
          <PixelShip size={14} />
          <span className="font-mono text-[11.5px] text-text3">
            © {new Date().getFullYear()} {site.name}
          </span>
        </span>
        <span className="font-mono text-[11.5px] text-text3 sm:ml-auto">
          built from scratch with next.js
        </span>
        <a
          href="#top"
          className="font-mono text-[11.5px] text-text2 transition-colors hover:text-accent"
        >
          ↑ return_to_base
        </a>
      </div>
    </footer>
  );
}
