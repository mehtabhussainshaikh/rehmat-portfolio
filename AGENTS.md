# Rehmat Portfolio — Agent Context

## Project purpose

This repository contains Rehmat's public marketing website. It is a fully static
Next.js site for explaining the company, its services, its team, and providing a
contact entry point.

## Technology

- Next.js 16 App Router
- React 19 and strict TypeScript
- Tailwind CSS 4
- Static export through `output: "export"`
- Lucide React icons

There is no application server, database, authentication system, CMS, or API in
this repository. Do not introduce one unless the task explicitly requires it.

## Source structure

- `src/app/` owns routes, route metadata, and route composition.
- `src/components/` contains shared site-level components.
- `src/components/ui/` contains small reusable visual primitives.
- `src/data/` is the source of truth for editable site content and configuration.
- `src/lib/` contains framework-independent utilities.
- `docs/ARCHITECTURE.md` explains architectural boundaries and extension rules.

## Working rules

1. Keep pages thin. Pages should compose sections and obtain repeated business
   content from `src/data`.
2. Default to Server Components. Add `"use client"` only when browser state,
   effects, or event handlers are required.
3. Keep UI primitives business-agnostic. Rehmat-specific copy does not belong in
   `src/components/ui`.
4. Reuse the colors, fonts, and spacing tokens defined in `src/app/globals.css`.
5. Use `@/` imports for files below `src`.
6. Preserve static-export compatibility. Avoid server actions, runtime route
   handlers, and dynamically optimized images unless the deployment model changes.
7. Put shared company details, navigation, services, and team content in
   `src/data`; do not duplicate them across pages.
8. Use semantic links for navigation and buttons for actions. Never nest a button
   inside a link.
9. Any form success message must represent a real successful submission. The
   current inquiry form is presentation-only until a delivery provider is added.
10. Keep accessibility intact: labelled controls, keyboard-operable interactions,
    visible focus states, useful alternative text, and correct heading order.

## Validation

Before handing off code changes, run:

```bash
npm run lint
npm run build
```

If dependencies are absent, run `npm ci` first when installation is within scope.
There is currently no automated test suite; add focused tests when behavior becomes
more complex than static rendering and local form validation.

## Known constraints and follow-up work

- The inquiry form currently validates only in the browser and does not deliver
  submissions. Do not describe it as operational.
- Confirm the production URL, email address, phone number, and legal copy before
  launch.
- External team images are intentionally compatible with static export through
  unoptimized Next.js images.


<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
