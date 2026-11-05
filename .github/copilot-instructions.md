# Copilot instructions for HireLoop Client

## Project overview

- This is a Next.js `16.4.5` App Router application using React `19.3.0`, TypeScript, and the `src` directory.
- The route tree lives under `src/app`. `src/app/layout.tsx` is the root layout and currently owns the global stylesheet, Dosis font setup, metadata, and site-wide `Navbar`.
- Feature UI is organized by area under `src/components` (for example, `home` and `shared`). Reusable shadcn/base-nova primitives live in `src/components/ui`; use those primitives instead of creating parallel versions.
- Shared utilities and integrations live under `src/lib`, and browser-oriented reusable hooks live under `src/hooks`.
- Static assets are served from `public`, including the project images and company logos.
- The app uses Better Auth with email/password enabled. Server auth is configured in `src/lib/auth.ts` with the MongoDB adapter and `MONGODB_URI`; the browser client is in `src/lib/auth-client.ts` and uses `BETTER_AUTH_URL`.
- `/api/auth/[...all]` is a Next.js Route Handler that delegates `GET` and `POST` requests to Better Auth via `toNextJsHandler(auth)`. Keep auth configuration on the server and do not expose MongoDB credentials to client code.

## Commands

Use npm (the repository includes `package-lock.json`):

```bash
npm run dev       # Start the development server at http://localhost:3000
npm run build     # Create a production build
npm run start     # Serve the production build
npm run lint      # Run ESLint
```

There is currently no test script, test framework, or test configuration in `package.json`. No single-test command is available until a test runner is added.

## Architecture and implementation conventions

- Pages and layouts are Server Components by default. Add `"use client"` only at the boundary for state, event handlers, browser APIs, or hooks such as `useIsMobile`; keep server-only auth/database code out of client component import graphs.
- Add routes using App Router conventions under `src/app`: `page.tsx` exposes UI routes, `layout.tsx` wraps route segments, and `route.ts` exposes API handlers. Do not place a `page.tsx` and `route.ts` at the same route segment.
- Use the `@/*` alias for imports from `src` (`@/components`, `@/components/ui`, `@/lib`, and `@/hooks` are the configured shadcn aliases). Prefer these aliases over long relative paths.
- Styling is Tailwind CSS v4. Global setup is in `src/app/globals.css`, which imports `tailwindcss`, `tw-animate-css`, and `shadcn/tailwind.css`. Use Tailwind utilities and the existing CSS variables/theme tokens; avoid introducing a second styling system without a clear need.
- `components.json` configures shadcn with `base-nova`, CSS variables, Lucide icons, and `src/app/globals.css`. Keep new generated UI components consistent with that configuration and place them in `src/components/ui`.
- `next.config.ts` enables Cache Components, partial prefetching, the React Compiler, and the Tailwind Turbopack loader. Preserve these settings when changing Next.js configuration.
- TypeScript is strict, uses bundler module resolution, and emits no JavaScript. Keep new code type-safe and compatible with the `@/*` path mapping.
- `next/font/google` is used in the root layout for Dosis and exposed as `--font-dosis`; preserve the existing font variable and global body styling when changing typography.
- Environment-specific values belong in the local `.env` files and should not be committed. In particular, auth/database changes should account for `MONGODB_URI` and `BETTER_AUTH_URL`.

## Existing repository guidance

`AGENTS.md` contains the Next.js-specific requirement to read the relevant documentation under `node_modules/next/dist/docs/` before writing Next.js code. Follow that guidance for route, caching, Server/Client Component, styling, or configuration changes.
