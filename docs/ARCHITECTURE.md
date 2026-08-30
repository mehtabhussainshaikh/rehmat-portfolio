# Architecture

## Overview

Rehmat Portfolio is a statically exported marketing site. Its architecture is
deliberately shallow: routes compose reusable components, and typed data modules
provide business content. This keeps the site easy to edit without creating an
application-service layer for content that is known at build time.

```text
src/data ───────────────┐
                       v
src/app routes ──> shared components ──> UI primitives
     │                         │                │
     └── metadata              └── icons        └── design tokens
                                                       │
                                                       v
                                              static HTML/CSS/JS
```

## Runtime model

Next.js renders every route during `next build` and writes the deployable output to
`out/`. Most components remain Server Components and produce no page-specific
client JavaScript. Client Components are limited to behavior that requires browser
state:

- `Header` controls the mobile navigation menu.
- `InquiryForm` performs local form validation.

Because there is no server runtime, form delivery must use an external endpoint or
require a deliberate change to the deployment architecture.

## Layer responsibilities

### Routes: `src/app`

Routes own metadata, page-level headings, section ordering, and composition. They
should not own duplicated company configuration or reusable interaction logic.

### Shared components: `src/components`

These components understand site concepts such as the header, hero, inquiry form,
and service presentation. A component belongs here when it is reused or represents
a coherent site-level pattern.

### UI primitives: `src/components/ui`

Primitives provide styling and basic composition without knowing Rehmat's content.
Examples include buttons, badges, cards, section containers, and statistic blocks.

### Content: `src/data`

Typed modules are the content source of truth:

- `site-config.ts`: identity, canonical URL, contact details, social links, and
  navigation.
- `services.ts`: service descriptions, features, technologies, and icon keys.
- `team.ts`: team profiles and social profiles.

Content used by multiple routes must live here. Page-specific copy may stay beside
the route until it becomes shared or large enough to obscure page composition.

### Utilities: `src/lib`

Utilities must be small and independent of page content. `cn` currently performs
simple conditional class joining.

## Design system

`src/app/globals.css` defines semantic design tokens for paper, ink, accent colors,
text, borders, fonts, and shared typography. Components should consume semantic
Tailwind names such as `bg-paper`, `text-ink`, and `border-border-on-paper` instead
of repeating raw colors.

## Dependency direction

Allowed dependencies flow inward:

```text
app -> components -> ui
 |          |         |
 +-------> data       +-> lib
 +----------------------> lib
```

Avoid importing route files into components, importing business data into UI
primitives, or making data modules depend on React components.

## Adding functionality

- New page: create `src/app/<route>/page.tsx`, add metadata, compose existing
  sections, then update navigation and sitemap when appropriate.
- New shared content: define a typed entry in `src/data` and render it from routes.
- New visual primitive: add it to `src/components/ui` only when it is generic and
  likely to be reused.
- New browser behavior: isolate the smallest possible Client Component rather than
  marking an entire page as client-side.
- New backend behavior: first document the hosting/runtime change because static
  export cannot host server actions or API routes.

## Deployment boundary

The `out/` directory is the complete deployment artifact. The host must support
static files only. Canonical metadata, sitemap entries, and robots configuration
derive from `siteConfig.url`, so changing the production domain requires updating a
single value.

