# raiyaanahmd.github.io

Personal portfolio — [raiyaanahmd.github.io](https://raiyaanahmd.github.io)

I want the site to feel modern first, with the retro theme acting as a layer of personality rather than the main attraction. Draw inspiration from classic pixel-art space shooters through details like a dark theme, an optional light mode, a subtle animated starfield, HUD-inspired components, and a terminal-style hero section.

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
