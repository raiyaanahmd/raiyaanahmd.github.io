import { cn } from "@/lib/utils";

/* Section opener v2: bracketed pixel tag + a tiny 8-bit glyph unique to each
   section. Numbered "01 //" headers retired — the theme lives in the tag,
   the titles underneath stay plain. Glyphs are 7×7 grids in currentColor. */

export type GlyphName = "ship" | "bars" | "flag" | "crosshair" | "antenna" | "file";

const glyphRects: Record<GlyphName, [number, number, number, number][]> = {
  // mini delta ship
  ship: [[3, 1, 1, 1], [2, 2, 3, 1], [1, 3, 5, 1], [0, 4, 7, 1]],
  // ascending loadout bars
  bars: [[1, 4, 1, 2], [3, 2, 1, 4], [5, 0, 1, 6]],
  // log flag
  flag: [[1, 0, 1, 7], [2, 0, 4, 2], [2, 2, 3, 1]],
  // targeting reticle
  crosshair: [[3, 0, 1, 2], [3, 5, 1, 2], [0, 3, 2, 1], [5, 3, 2, 1], [3, 3, 1, 1]],
  // comms mast
  antenna: [[3, 0, 1, 1], [1, 2, 1, 1], [5, 2, 1, 1], [3, 2, 1, 5], [2, 6, 3, 1]],
  // dossier page
  file: [[1, 0, 5, 1], [1, 6, 5, 1], [1, 1, 1, 5], [5, 1, 1, 5], [2, 2, 3, 1], [2, 4, 2, 1]],
};

export function SectionGlyph({
  name,
  size = 14,
  className,
}: {
  name: GlyphName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 7 7"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pixelated shrink-0", className)}
      aria-hidden="true"
    >
      {glyphRects[name].map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} fill="currentColor" />
      ))}
    </svg>
  );
}

type Props = {
  tag: string;
  glyph: GlyphName;
  title: string;
  className?: string;
};

export function SectionHeader({ tag, glyph, title, className }: Props) {
  return (
    <div className={cn("mb-10", className)}>
      <span className="flex items-center gap-2.5 font-pixel text-[10px] tracking-[0.14em] text-accent">
        <SectionGlyph name={glyph} />
        <span>[ {tag} ]</span>
      </span>
      <h2 className="mt-3.5 font-display text-3xl font-semibold tracking-tight text-text1 sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
