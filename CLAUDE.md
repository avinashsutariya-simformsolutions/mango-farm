# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

"Aamrai" (package name `AamRai`) is a small React 19 + TypeScript + Vite app themed around a mango orchard. It is a learning project scaffolded from the Vite React-TS template; it is currently minimal (`src/App.tsx` renders a header, with a `src/components/PlantingCounter.tsx` component alongside).

## Commands

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — type-check (`tsc -b`) then `vite build` (output in `dist/`)
- `npm run lint` — ESLint over the whole repo (flat config in `eslint.config.js`; `dist` is ignored)
- `npm run preview` — serve the production build

There is no test runner configured.

## Architecture

- Entry: `index.html` → `src/main.tsx` (renders `<App />` in `StrictMode`) → `src/App.tsx`, the root component from which the app is intended to grow.
- Components live in `src/components/`. Global styles in `src/index.css`, app styles in `src/App.css`.
- Build uses `@vitejs/plugin-react` with no React Compiler (`vite.config.ts` has only the react plugin). TypeScript is split into `tsconfig.app.json` (src) and `tsconfig.node.json` (Vite config), referenced from `tsconfig.json`.
