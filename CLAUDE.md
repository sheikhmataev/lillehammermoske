# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Lillehammer Moske is a Next.js 14 website for the Muslim Cultural Center Lillehammer (org nr. 988 588 660). It uses the App Router with static export for GitHub Pages deployment.

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Build static export (output: out/)
npm run export       # Build for GitHub Pages
npm run deploy       # Build & push to gh-pages branch
npm run lint         # Run ESLint
npm run type-check   # TypeScript type check
npm run test         # Run Jest tests
npm run test:watch   # Jest in watch mode
```

Database (Prisma):
```bash
npm run db:generate  # Generate Prisma client
npm run db:push      # Sync schema to DB
npm run db:studio    # Open Prisma Studio
```

## Architecture

**Stack:** Next.js 14 App Router · TypeScript · Tailwind CSS · Framer Motion · Zustand · React Hook Form · Prisma

**Path alias:** `@/*` → `./src/*`

### Key Directories

- `src/app/(pages)/` — All routes grouped under shared layout (about, board, contact, donate, iftar, membership, prayer-times, quran-school, ramadan, whatsapp)
- `src/components/features/` — 45+ feature components (Hero, PrayerTimes, RamadanCountdown, BoardMembers, etc.)
- `src/components/ui/` — Reusable primitives (Button, Card, Input, Modal, Select, Textarea)
- `src/lib/config.ts` — **Central source of truth**: org info, board members, prayer times location, Jummah schedule, WhatsApp link, feature flags, color palette
- `src/data/csv-data.ts` + `src/data/*.csv` — Embedded prayer times data (monthly CSVs, Nov 2025–Dec 2026)
- `src/services/prayer-times.ts` — Parses CSV data into typed `PrayerTime` objects
- `src/types/` — Core interfaces and prayer-times type definitions

### Data Flow

- **Prayer times**: Local CSV → `csv-data.ts` (embedded strings) → `prayer-times.ts` service → feature components
- **Org/config data**: `src/lib/config.ts` → imported directly by components (no API calls)
- **Ramadan**: Hardcoded dates (Feb 18 – Mar 19, 2026) with real-time Hijri calculation via `Intl.DateTimeFormat`

### Styling Conventions

Custom Tailwind palette defined in `tailwind.config.js`:
- `emerald` (`#1B5E20`) — primary green
- `gold` (`#D4AF37`) — accent
- `cream`, `mint`, `charcoal` — secondary colors

Fonts: Inter (sans), Amiri (Arabic fallback). Prettier auto-sorts Tailwind classes via `prettier-plugin-tailwindcss`.

### Deployment

Static export (`next.config.js` sets `output: 'export'` when `GITHUB_PAGES=true`). Images unoptimized for static hosting. Custom domain: `lillehammermoske.no`.

### Pre-commit Hooks

Husky + lint-staged runs ESLint and Prettier on staged files before each commit.

