# 02 — Components

The reusable UI pieces every site is assembled from. Build these once per client,
branded. **Every clickable element needs hover, focus-visible, and active states**
(per `../DESIGN-RULES.md`) — no exceptions.

Start from shadcn primitives in `src/components/ui/` and scaffold with Magic MCP
(`/ui ...`), then brand them. Don't ship default Tailwind blue/indigo.

## Core components

| Component | Notes / states |
|---|---|
| **Button system** | Primary, secondary, ghost. Consistent sizing + radius. All 3 interaction states. |
| **Nav (desktop)** | Logo, links, primary CTA. Sticky, shrinks on scroll. Active-link styling. |
| **Nav (mobile drawer)** | Hamburger → slide-in drawer. Trap focus, close on Esc/overlay click. |
| **Sticky mobile CTA bar** | Fixed bottom bar on mobile with "Call" + "Book" — always one tap from converting. |
| **Lead form** | Name, email, phone, message. Inline validation, error + success states, spam protection, submit-loading state. See `04` forms. |
| **Service card** | Icon/image, title, one line, optional link. Hover elevation. |
| **Testimonial card** | Quote, name, photo, star rating, optional role/location. |
| **FAQ accordion** | Keyboard-operable, one or multi-open, smooth height animation (transform/opacity only). |
| **Stat / counter** | Big number + label (years, clients, rating). Optional count-up on scroll into view. |
| **Logo cloud** | Partner/insurance/press logos, grayscale → color on hover. |
| **Gallery / before-after slider** | For results. Draggable divider for before/after (see niche overlay disclaimers). |
| **Booking modal / embed** | Calendly/Cal.com in a modal or inline. Lazy-load the embed. |
| **Toast / confirmation** | Post-submit feedback. Pair with the thank-you page. |
| **Footer** | NAP, hours, social icons, nav, legal links. |

## Build standard for each
- Mobile-first responsive (smallest breakpoint up).
- Animate only `transform` and `opacity` — never `transition-all`.
- Tap targets ≥ 44px on mobile.
- Real content where assets exist — no lorem, no placeholder logos.
- Accessible: semantic HTML, aria labels on icon-only buttons, visible focus.
