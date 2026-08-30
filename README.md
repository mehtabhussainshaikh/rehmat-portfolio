# Rehmat

A production-ready, spacious marketing site built with Next.js (App Router), TypeScript, and Tailwind CSS. Fully static — no backend, database, or API calls; all content lives in `src/data/*.ts`.

## Stack

- Next.js 16 (App Router) with static export (`output: "export"`)
- TypeScript
- Tailwind CSS v4
- lucide-react icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Generates a static site in `/out`, ready to deploy to Vercel, Netlify, GitHub Pages, or any static host.

## Project Structure

- `src/app` — routes (home, about, services, portfolio, blog, contact, privacy, terms)
- `src/components` — shared UI (Header, Footer, Hero, ServiceCard, CaseStudyCard) and `ui/` primitives (Button, Card, Badge, SectionContainer)
- `src/data` — site content (`site-config`, `services`, `portfolio`, `blog`, `team`)
- `src/lib` — small utilities

## Content

Edit the files in `src/data` to update copy, services, portfolio case studies, blog posts, and team members. Replace the placeholder SVGs in `public/images` with real photography/screenshots when available.
