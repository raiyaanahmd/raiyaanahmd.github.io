/* Fonts are self-hosted via @fontsource packages, imported in app/layout.tsx:
     @fontsource/chakra-petch   → --font-display
     @fontsource/ibm-plex-sans  → --font-body
     @fontsource/ibm-plex-mono  → --font-mono
     @fontsource/press-start-2p → --font-pixel
   CSS variables are declared in app/globals.css; Tailwind maps them in
   tailwind.config.ts (font-display / font-body / font-mono / font-pixel).

   Why not next/font? Same result (self-hosted, zero runtime requests,
   display: swap) with one less build-time dependency on the SWC toolchain —
   keeps the project portable across build environments. */

export {};
