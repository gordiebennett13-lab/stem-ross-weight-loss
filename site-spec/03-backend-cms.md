# 03 — Backend & CMS

The site ships with **Payload CMS 3** (embedded in the same Next.js app) so the
client can edit their own content after handoff. This file lists the data models
a lead-gen site needs. Stack + workflow: `../README.md`.

## Already in the template
- **Users** — Payload auth (admin login). First user created on `/admin` load.
- **Media** — uploads (images). Used by every other collection.

## Collections to add per client

| Collection | Fields (typical) | Why |
|---|---|---|
| **Services** | title, slug, summary, body, icon/image, order | Powers the services grid + any detail pages. |
| **Testimonials** | quote, name, role/location, photo, rating, featured | Powers proof sections. |
| **Team** | name, role, photo, bio, credentials | Powers about/credentials. |
| **FAQ** | question, answer, category, order | Powers FAQ accordion. |
| **Posts** *(optional)* | title, slug, excerpt, body, cover, publishedAt, author | Only if the client will maintain a blog. |

## Globals (single-instance settings)

| Global | Holds |
|---|---|
| **SiteSettings** | Brand name, logo, NAP (name/address/phone), hours, social links, tracking IDs (Meta Pixel ID, GA4 ID), default SEO/OG. |
| **Header / Nav** | Nav links, CTA label + target. |
| **Footer** | Footer columns, legal links, copyright. |

Putting NAP, hours, and tracking IDs in **SiteSettings** means the client edits
them in one place and they propagate site-wide (footer, contact page, schema).

## Forms & lead capture

Every form submission must be **stored AND emailed** — losing a lead is the worst
possible failure for a lead-gen site.

- **Recommended:** `@payloadcms/plugin-form-builder` — stores submissions in
  Payload and sends an email notification out of the box. Client can view leads
  in `/admin`.
- **Alternative:** a custom `Leads` / `Submissions` collection + an API route
  that writes the record and triggers an email.
- Either way: confirm the email actually arrives during QA (`06`).

## Working rules
- After **any** collection or field change: `npm run generate:types`
  → regenerates `src/payload-types.ts`. Build will drift otherwise.
- **Never hand-edit** the `(payload)/` route group — it's auto-generated. If it
  breaks, re-fetch from the Payload blank template (see `../README.md` gotchas).
- Register every new collection/global in `src/payload.config.ts`.
- Dev uses SQLite; **swap to Postgres for production** (see `../README.md`
  Deployment + `06` launch checklist).
