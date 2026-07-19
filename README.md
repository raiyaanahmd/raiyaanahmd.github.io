# raiyaanahmd.github.io

Personal portfolio — [raiyaanahmd.github.io](https://raiyaanahmd.github.io)

Built from scratch with Next.js 14 (static export), TypeScript (strict), Tailwind CSS and Framer Motion. Retro pixel-art space-shooter accents over a modern, minimal layout: dark "Night Ops" default with a light "Day Ops" toggle, a canvas starfield, HUD-style cards and a terminal hero.

## Develop

```bash
npm install
npm run dev      # localhost:3000
```

## Build

```bash
npm run build    # static export → out/
npx serve out    # preview the real thing
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes `out/` to GitHub Pages. One-time setup: repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Editing content

All copy lives in `content/*.ts` (identity/contact, projects, experience, skills) — components never hard-code content. Social links appear automatically when added to `content/site.ts`.

## Notes

- Fonts are self-hosted via @fontsource — no runtime font requests.
- `app/projects/[slug]/page.tsx` intentionally has no `dynamicParams = false`; adding it back breaks `next dev` under `output: "export"` (Next 14 bug).
- Lighthouse (mobile): 94–96 / 100 / 100 / 100. The ~2.9s LCP reading is the webfont swap repaint under simulated slow-4G, not a blank screen — text paints in fallback font at ~0.8s.
