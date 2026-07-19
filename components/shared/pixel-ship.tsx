import { cn } from "@/lib/utils";

/* Identity mark v2: delta-wing pixel interceptor on an 11×8 grid.
   Deliberately wider than tall — the original 9×10 mark's narrow hull
   read badly at navbar size. currentColor hull so it themes automatically;
   detail pixels use tokens. */

type Props = {
  size?: number;
  className?: string;
  detail?: boolean; // full detail (404/OG scale) vs simplified (navbar/footer scale)
};

export function PixelShip({ size = 20, className, detail = false }: Props) {
  const h = Math.round(size * (8 / 11));
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 11 8"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pixelated shrink-0", className)}
      aria-hidden="true"
    >
      {detail ? (
        <>
          <rect x="5" y="0" width="1" height="1" fill="currentColor" />
          <rect x="4" y="1" width="3" height="1" fill="currentColor" />
          <rect x="5" y="1" width="1" height="1" fill="var(--text1)" />
          <rect x="3" y="2" width="5" height="1" fill="currentColor" />
          <rect x="2" y="3" width="7" height="1" fill="currentColor" />
          <rect x="0" y="3" width="1" height="1" fill="currentColor" />
          <rect x="10" y="3" width="1" height="1" fill="currentColor" />
          <rect x="0" y="4" width="11" height="1" fill="currentColor" />
          <rect x="1" y="5" width="1" height="1" fill="var(--purple)" />
          <rect x="3" y="5" width="5" height="1" fill="currentColor" />
          <rect x="9" y="5" width="1" height="1" fill="var(--purple)" />
          <rect x="3" y="6" width="1" height="1" fill="var(--amber)" />
          <rect x="5" y="6" width="1" height="1" fill="var(--amber)" />
          <rect x="7" y="6" width="1" height="1" fill="var(--amber)" />
          <rect x="5" y="7" width="1" height="1" fill="var(--amber)" opacity="0.55" />
        </>
      ) : (
        <>
          <rect x="5" y="0" width="1" height="2" fill="currentColor" />
          <rect x="3" y="2" width="5" height="2" fill="currentColor" />
          <rect x="0" y="4" width="11" height="2" fill="currentColor" />
        </>
      )}
    </svg>
  );
}
