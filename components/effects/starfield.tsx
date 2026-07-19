"use client";

import { useEffect, useRef } from "react";

/* The single ambient element (design system §06).
   ~70 square pixel stars in two parallax layers, drifting 0.2–0.5 px/s.
   Budget-conscious: DPR capped at 2, paused when the tab is hidden,
   fully static when the user prefers reduced motion.
   Star opacity follows the theme via --star-opacity. */

type Star = { x: number; y: number; size: number; speed: number; tint: boolean };

export function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let stars: Star[] = [];
    let raf = 0;
    let width = 0;
    let height = 0;
    let opacity = 0.9;
    let last = performance.now();

    const readOpacity = () => {
      opacity = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--star-opacity") || "0.9"
      );
    };

    const seed = () => {
      const count = Math.min(70, Math.floor((width * height) / 22000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() < 0.75 ? 1 : 2,
        speed: Math.random() < 0.5 ? 0.2 : 0.5, // two parallax layers
        tint: Math.random() < 0.18, // a few cyan stars among white
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const styles = getComputedStyle(document.documentElement);
      const white = styles.getPropertyValue("--text1").trim() || "#e8eef9";
      const cyan = styles.getPropertyValue("--accent").trim() || "#3fe0ff";
      for (const s of stars) {
        ctx.globalAlpha = opacity * (s.speed === 0.5 ? 0.9 : 0.5);
        ctx.fillStyle = s.tint ? cyan : white;
        ctx.fillRect(Math.round(s.x), Math.round(s.y), s.size, s.size);
      }
      ctx.globalAlpha = 1;
    };

    const tick = (now: number) => {
      const dt = Math.min(now - last, 100) / 1000;
      last = now;
      for (const s of stars) {
        s.y += s.speed * dt * 4; // gentle downward drift
        if (s.y > height + 2) {
          s.y = -2;
          s.x = Math.random() * width;
        }
      }
      draw();
      raf = requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      if (reduced) return;
      cancelAnimationFrame(raf);
      if (!document.hidden) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    /* Re-read tokens when the theme class flips. */
    const observer = new MutationObserver(() => {
      readOpacity();
      draw();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    readOpacity();
    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    if (!reduced) raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pixelated pointer-events-none fixed inset-0 -z-10"
    />
  );
}
