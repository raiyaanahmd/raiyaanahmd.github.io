import { cn } from "@/lib/utils";

/* Identity mark: hand-drawn 9×10 pixel interceptor (design system §01, Option A).
   currentColor hull so it themes automatically; detail pixels use tokens. */

type Props = {
  size?: number;
  className?: string;
  detail?: boolean; // full detail (hero/footer) vs simplified (navbar/favicon scale)
};

export function PixelShip({ size = 20, className, detail = false }: Props) {
  const h = Math.round(size * (10 / 9));
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 9 10"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pixelated shrink-0", className)}
      aria-hidden="true"
    >
      {detail ? (
        <>
          <rect x="4" y="0" width="1" height="2" fill="currentColor" />
          <rect x="3" y="2" width="3" height="1" fill="currentColor" />
          <rect x="3" y="3" width="1" height="1" fill="currentColor" />
          <rect x="4" y="3" width="1" height="1" fill="var(--text1)" />
          <rect x="5" y="3" width="1" height="1" fill="currentColor" />
          <rect x="2" y="4" width="5" height="2" fill="currentColor" />
          <rect x="0" y="6" width="9" height="1" fill="currentColor" />
          <rect x="0" y="7" width="2" height="1" fill="currentColor" />
          <rect x="3" y="7" width="1" height="1" fill="var(--purple)" />
          <rect x="5" y="7" width="1" height="1" fill="var(--purple)" />
          <rect x="7" y="7" width="2" height="1" fill="currentColor" />
          <rect x="2" y="8" width="1" height="1" fill="var(--amber)" />
          <rect x="4" y="8" width="1" height="1" fill="var(--amber)" />
          <rect x="6" y="8" width="1" height="1" fill="var(--amber)" />
          <rect x="4" y="9" width="1" height="1" fill="var(--amber)" opacity="0.55" />
        </>
      ) : (
        <>
          <rect x="4" y="0" width="1" height="2" fill="currentColor" />
          <rect x="3" y="2" width="3" height="4" fill="currentColor" />
          <rect x="0" y="6" width="9" height="2" fill="currentColor" />
        </>
      )}
    </svg>
  );
}
