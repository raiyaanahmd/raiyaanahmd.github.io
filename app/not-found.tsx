import { Button } from "@/components/shared/button";
import { PixelShip } from "@/components/shared/pixel-ship";

/* 404 — lost in space. The one page allowed a little drama. */

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-wrap flex-col items-center px-6 pb-32 pt-48 text-center">
      <span className="rotate-[135deg] text-accent opacity-80">
        <PixelShip size={40} detail />
      </span>
      <p className="pixel-index mt-10">ERR 404 // SIGNAL LOST</p>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-text1">
        Coordinates unknown
      </h1>
      <p className="mt-3 max-w-[44ch] text-[15px] text-text2">
        This sector of the site doesn&apos;t exist — or it drifted somewhere I
        can&apos;t track.
      </p>
      <div className="mt-10">
        <Button variant="primary" href="/">
          Return to base
        </Button>
      </div>
    </div>
  );
}
