# Site Spec — What Every TcScales Site Must Contain

This folder is the **what**: every page, section, component, backend model, and
functional requirement a finished, shippable site needs. It's the missing piece
next to the two docs you already have:

- **`../DESIGN-RULES.md`** — how a site should *look* (colors, type, motion, review loop).
- **The `website-builder` skill + `../README.md`** — how to *build* it (clone, brand, ship).
- **This folder (`site-spec/`)** — *what* to build, so nothing ships half-finished.

The spec is **general lead-gen** — it works for any local service business
(boat broker, gym, contractor). For healthcare / weight-loss clients, layer
`05-niche-healthcare.md` on top.

This folder rides along inside the template, so every `cp -R` clone carries it
automatically into the new client project. No copying needed.

## How to use it

1. **At build start:** read `01`–`05` and build the site against them. Treat each
   file as a checklist — not every optional item ships in v1, but you should make
   a deliberate call on each.
2. **Before handoff:** run `06-launch-checklist.md` top to bottom. Don't call a
   site done until it passes.

## Reading order

| File | What it covers |
|---|---|
| `01-pages-and-sections.md` | Required pages, and the section anatomy of each |
| `02-components.md` | Reusable UI / interactive components every site needs |
| `03-backend-cms.md` | Payload collections, globals, forms, lead capture |
| `04-functional-requirements.md` | SEO, tracking, performance, a11y, integrations, security |
| `05-niche-healthcare.md` | Healthcare / weight-loss overlay (trust, compliance, local SEO) |
| `06-launch-checklist.md` | Pre-ship QA gate — check before handoff |
