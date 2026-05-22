# 06 — Launch Checklist

The pre-ship QA gate. Run this top to bottom before calling a site done or
handing off `/admin`. Don't ship with anything unchecked unless it's a deliberate
"not for v1" call.

## Content
- [ ] Real content everywhere — no lorem ipsum, no placeholder images/logos.
- [ ] All copy proofread; client name/NAP correct and consistent site-wide.
- [ ] Favicon set; OG image (1200×630) set.

## Links & navigation
- [ ] Every nav link, button, and footer link goes somewhere real.
- [ ] Primary CTA reachable in one click from every page.
- [ ] Branded 404 page with a way back.

## Forms & lead capture
- [ ] Submitted a test lead — record appears in Payload `/admin`.
- [ ] Notification email actually arrived in the client's inbox.
- [ ] Validation + spam protection + success state all work.
- [ ] Thank-you page loads after submit.

## Tracking (TcScales-critical)
- [ ] Meta Pixel fires on page view (Meta Events Manager test tool).
- [ ] `Lead` conversion event fires on form submit + click-to-call.
- [ ] Conversions API (server-side) confirmed sending.
- [ ] GA4 receiving traffic (DebugView).

## SEO
- [ ] Unique title + meta description on every page.
- [ ] OG/Twitter tags present (share preview looks right).
- [ ] `sitemap.xml` + `robots.txt` reachable.
- [ ] `LocalBusiness` JSON-LD present and valid (Rich Results Test).
- [ ] One `<h1>` per page; clean heading hierarchy.

## Performance & accessibility
- [ ] Lighthouse ≥ 90 on Performance, SEO, Best Practices, Accessibility.
- [ ] Mobile tested on a real/emulated device — sticky CTA, tap targets, layout.
- [ ] Keyboard navigation works; focus states visible; contrast passes.

## Legal
- [ ] Privacy Policy + Terms live and linked in footer.
- [ ] Cookie consent (if running tracking in applicable regions).
- [ ] Accessibility statement present.
- [ ] Healthcare clients: disclaimers + no-PHI-in-forms confirmed (`05`).

## Infrastructure / deploy
- [ ] SQLite swapped for **Postgres** for production.
- [ ] Host env vars set: `PAYLOAD_SECRET` (fresh random), `DATABASE_URI`.
- [ ] Media storage adapter configured (S3/R2) if deploying serverless.
- [ ] SSL active; HTTP → HTTPS redirect; correct domain + any redirects.
- [ ] Production build passes: `npm run build`.

## Handoff
- [ ] Client admin user created; `/admin` URL + login delivered.
- [ ] Client shown how to edit their content (Services, Testimonials, etc.).
