# TcScales — Client Site Template

Production-grade Next.js + Payload CMS template for healthcare client websites. Built to be cloned per client, branded, and shipped fast.

> **This is the TcScales website builder.** The `website-builder` skill drives the end-to-end build; this README is the reference for the stack, scripts, and per-client workflow. Craft rules live in `DESIGN-RULES.md`.

## Stack

- **Next.js 16** (App Router, Turbopack, React 19)
- **Tailwind CSS v4** + **shadcn/ui** — accessible UI primitives
- **Aceternity-style motion** via `motion/react` — premium animations (see `src/components/ui/aurora-hero.tsx`)
- **Payload CMS 3** (self-hosted, embedded in the same Next.js app)
- **SQLite** for local dev — swap to Postgres for prod

## Layout

```
src/
  app/
    (frontend)/          # Public-facing site — root layout, pages
      layout.tsx
      page.tsx
    (payload)/           # Payload admin + API — DO NOT EDIT (regenerated)
      layout.tsx
      admin/[[...segments]]/
      api/[...slug]/
  collections/           # Payload data models — Users, Media
  components/ui/         # shadcn + Aceternity-style components
  payload.config.ts      # Payload configuration
  lib/utils.ts           # cn() helper for class merging
tools/
  screenshot.mjs         # puppeteer screenshot for the design-review loop
DESIGN-RULES.md          # craft rules every site must follow (the *look*)
site-spec/               # what every site must contain — pages, components, CMS, launch checklist (the *what*)
```

Three reference docs work together: **`site-spec/`** is *what* to build, **`DESIGN-RULES.md`** is how it should *look*, and the `website-builder` skill is *how* to build it. Read `site-spec/README.md` at the start of every build.

## Preview / screenshots

```bash
npm run dev                                        # http://localhost:3000 (+ /admin)
cd tools && npm install                            # first time only (pulls puppeteer)
node tools/screenshot.mjs http://localhost:3000    # saves to tools/screenshots/
```
Read the PNG with the editor/Claude, compare against the reference, fix, repeat — at least 2 rounds. Full discipline in `DESIGN-RULES.md`.

## First-time setup

Already done in this repo, but for reference when cloning:

```bash
npm install
cp .env.example .env
# edit .env: set PAYLOAD_SECRET to a long random string
npm run generate:importmap
npm run dev
```

Visit:
- http://localhost:3000 — frontend (the AuroraHero demo)
- http://localhost:3000/admin — Payload admin (create first user on load)

## Per-client workflow

1. **Clone this template** into a new folder: `cp -R website-template clients/<client-slug>`
2. **Regenerate the Payload secret** in `.env` (random 32+ char string)
3. **Update brand basics** in `src/app/(frontend)/layout.tsx` (title, description, fonts)
4. **Replace the home page** content in `src/app/(frontend)/page.tsx`
5. **Add collections** in `src/collections/` for content the client should edit (Services, Team, Testimonials, etc.) and add them to `src/payload.config.ts`
6. **Run `npm run generate:types`** after any collection change → produces `src/payload-types.ts`
7. **Build, ship, hand off `/admin` to the client**

## Adding more shadcn components

```bash
npx shadcn@latest add <component>   # e.g. dialog, form, dropdown-menu
```

Catalog: https://ui.shadcn.com/docs/components

## Adding Aceternity-style components

Aceternity components are copy-paste. The `motion` library is already installed. Browse https://ui.aceternity.com/components, copy the component into `src/components/ui/`, and use it.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start Next.js dev server |
| `npm run devsafe` | Clear `.next` cache and restart |
| `npm run build` | Production build |
| `npm run start` | Run production build |
| `npm run generate:importmap` | Regenerate Payload admin import map (run after adding custom admin components) |
| `npm run generate:types` | Generate TS types from Payload collections |
| `npm run payload` | Run Payload CLI |

## Deployment

For production:

1. Swap SQLite for Postgres: `npm install @payloadcms/db-postgres`, update `src/payload.config.ts`
2. Set env vars on the host (Vercel/Railway/Fly): `PAYLOAD_SECRET`, `DATABASE_URI`
3. Set up file storage adapter for the Media collection if you'll deploy serverless (S3, R2, etc.)
4. Build + deploy

## Known gotchas

- Next.js 16 is bleeding-edge — read `AGENTS.md` and `node_modules/next/dist/docs/` before refactoring
- The `(payload)` route group is auto-generated boilerplate. Don't hand-edit; if it breaks, re-fetch from https://github.com/payloadcms/payload/tree/main/templates/blank
- Payload's CLI requires `"type": "module"` in package.json (already set)
- SQLite file (`payload.db`) and generated types are gitignored
