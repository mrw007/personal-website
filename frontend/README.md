# Frontend (React 19 + Vite)

This frontend is built with React 19 and Vite.

## Requirements

- Node.js 20+
- npm 10+

## Available Scripts

Run from the `frontend` folder:

- `npm run dev` - Start Vite dev server on `http://localhost:3000`
- `npm run start` - Alias for `npm run dev`
- `npm run build` - Create production build in `build/`
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint on source files

## Project Notes

- Entry HTML is `index.html` at the project root (Vite standard).
- Static files are served from the `public/` folder.
- Path alias `@` maps to `src/` (configured in Vite and `jsconfig.json`).
- Optional health endpoints can be enabled in dev with `ENABLE_HEALTH_CHECK=true npm run dev`.
