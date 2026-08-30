# Rehmat Portfolio

The public marketing website for Rehmat, built as a fully static Next.js site.

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Lucide React icons
- Static export to `out/`

## Local development

```bash
npm ci
npm run dev
```

Open <http://localhost:3000>.

## Validation and build

```bash
npm run lint
npm run build
```

The production build is written to `out/` and can be deployed to any static host.

## Current routes

- `/` — homepage
- `/about` — story, values, and team
- `/services` — service catalogue
- `/contact` — contact details and inquiry form
- `/privacy` — privacy policy
- `/terms` — terms of service

`robots.txt` and `sitemap.xml` are generated from route metadata.

## Project structure

```text
src/
├── app/             Routes, metadata, global styles, sitemap, and robots
├── components/      Shared site components
│   └── ui/          Generic visual primitives
├── data/            Typed site configuration and content
└── lib/             Small framework-independent utilities
```

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for boundaries and extension
guidance. AI coding agents should also read [AGENTS.md](AGENTS.md) before making
changes.

## Editing content

- Company details, navigation, and social links: `src/data/site-config.ts`
- Services: `src/data/services.ts`
- Team profiles: `src/data/team.ts`

The inquiry form currently performs browser-side validation only. It needs an
external form endpoint or a server runtime before it can deliver submissions.
