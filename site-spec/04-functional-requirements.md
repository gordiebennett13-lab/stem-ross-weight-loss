# 04 — Functional Requirements

What makes the site actually *work* once it looks right: get found, get tracked,
load fast, be usable by everyone, and capture every lead.

## SEO
- **Per-page metadata** — unique `<title>` + meta description on every page
  (Next.js `metadata` export).
- **Open Graph + Twitter card** — title, description, and a 1200×630 OG image so
  shared links look right.
- **`sitemap.xml`** and **`robots.txt`** — generated and reachable.
- **Structured data** — `LocalBusiness` JSON-LD with NAP, hours, geo (pulls from
  SiteSettings). Add `FAQPage` schema if there's an FAQ.
- **Canonical tags** + clean semantic heading hierarchy (one `<h1>` per page).

## Tracking — critical for TcScales (we run Meta ads)
The whole point is to send paid traffic and measure conversions. This is not
optional on a TcScales site.
- **Meta Pixel + Conversions API (CAPI)** — Pixel for browser events, CAPI for
  server-side reliability. Fire a conversion event (e.g. `Lead`) on form submit
  and on click-to-call.
- **GA4** — baseline web analytics.
- **GTM** *(optional)* — if the client wants to manage tags themselves.
- Tracking IDs live in **SiteSettings** (`03`), not hardcoded.
- **Verify events fire** during QA (`06`) — Meta Events Manager test tool + GA
  DebugView.

## Performance
- Core Web Vitals green (LCP, CLS, INP).
- `next/image` for all images; lazy-load below the fold.
- Font optimization (subset, `next/font`); no layout shift on load.
- Lighthouse ≥ 90 on Performance, SEO, Best Practices, Accessibility.

## Accessibility (WCAG AA)
- Alt text on all meaningful images.
- Visible `focus-visible` states; full keyboard navigation.
- Color contrast ≥ 4.5:1 for body text.
- Aria labels on icon-only buttons; semantic landmarks (`nav`, `main`, `footer`).

## Forms
- Inline validation with clear error messages.
- Spam protection — honeypot field minimum; reCAPTCHA/Turnstile for high-traffic.
- Success state + redirect to thank-you page (which fires the conversion event).
- Server-side handling; store **and** email every submission (`03`).

## Integrations
- **Booking** — Calendly / Cal.com embed where the client takes appointments.
- **Click-to-call** — `tel:` links on every phone number; tracked as a conversion.
- **Maps** — embedded map on the contact page for local businesses.
- **CRM / email routing** — make sure leads land where the client actually checks
  (their inbox at minimum; CRM/Zapier if they have one).

## Security & legal
- **SSL** (HTTPS) enforced; HTTP → HTTPS redirect.
- **Cookie consent** banner if running analytics/tracking in applicable regions.
- **Privacy Policy** + **Terms** linked in the footer (`01`).
- ADA / accessibility cover (statement page + meeting WCAG AA above).
