# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start local dev server at localhost:3000
npm run build    # Build static export (outputs to ./out)
npm run lint     # Run ESLint
```

Deployment is automatic: pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/nextjs.yml`), which builds and deploys the static site to GitHub Pages at `byeongju.me`.

## Architecture

This is a **Next.js 15 static personal academic website** using TypeScript and Tailwind CSS. It follows a strict data/component separation pattern.

### Data layer (`src/data/`)

All content lives in typed TypeScript files — edit these to update the site:

| File | Purpose |
|---|---|
| `aboutme.ts` | Profile info, social links, bio (supports inline HTML in `description` and `researchInterests`) |
| `publication.ts` | Publications list with optional `imageUrl`, `award`, `tldr`, `paperUrl`, `codeUrl`, `pageUrl` |
| `ongoing.ts` | Ongoing projects (same shape as publications) |
| `news.ts` | News items |
| `experience.ts` | Work/research experience entries |
| `education.ts` | Education entries |
| `section-order.ts` | Controls which sections appear and in what order via the `sectionOrder` array |
| `title-description.ts` | OG/Twitter metadata overrides |

### Component layer (`src/components/`)

Each `*-entry.tsx` component receives a single typed item from its corresponding data file. Components are stateless and presentational only.

`publication-entry.tsx` has a hardcoded `highlightNames` array (`["Byeongju Woo", "Byungju Woo"]`) that underlines the author's name — update this if the display name changes.

### Page assembly (`src/app/page.tsx`)

The single page (`page.tsx`) imports all data and components. It renders a two-column layout (sticky profile left, scrolling sections right) and maps over `sectionOrder` to render sections in the configured order. Sections with empty data arrays are automatically hidden.

### Project pages

Project-specific pages (e.g., `/CAFT/`) live under `public/` as standalone HTML, not as Next.js routes.

### HTML strings in data

The `description` and `researchInterests` fields in `aboutme.ts` are raw HTML strings rendered via `dangerouslySetInnerHTML`. Use `<br />`, `<a>`, `<em>`, `<strong>`, and inline `style` attributes freely there.
