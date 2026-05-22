# Design Rules — TcScales Client Sites

The non-negotiable craft rules for every site built from this template. The `website-builder` skill enforces these. Read alongside the template `README.md` (stack + workflow).

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code — every session, no exceptions.
- Check the client's brand assets in `public/brand/` before designing. If a logo or color palette exists, use those exact values — never invent brand colors.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Don't "improve" or add to the design.
- If no reference: design from scratch with high craft, following the guardrails below.

## Screenshot / Review Loop
- Run the Next.js dev server: `npm run dev` (site at http://localhost:3000, admin at /admin).
- Capture from the template tools dir: `node tools/screenshot.mjs http://localhost:3000 [label]`.
  - First time only: `cd tools && npm install` (pulls puppeteer).
  - Screenshots auto-increment into `tools/screenshots/` — never overwritten.
- Read the PNG with the Read tool and analyze it. Be specific: "heading is 32px, reference shows ~24px"; "card gap 16px, should be 24px".
- Check: spacing/padding, font size/weight/line-height, exact hex colors, alignment, border-radius, shadows, image sizing.
- **At least 2 comparison rounds.** Stop only when no visible differences remain (or Gordie says so).

## Anti-Generic Guardrails
- **Colors:** Never use the default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never flat `shadow-md`. Use layered, color-tinted shadows at low opacity.
- **Typography:** Never the same font for headings and body. Pair a display/serif with a clean sans. Tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via an SVG noise filter for depth.
- **Animations:** Animate only `transform` and `opacity`. Never `transition-all`. Spring-style easing (the template ships `motion/react`).
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** A layering system (base → elevated → floating), not everything on the same z-plane.
- **Mobile-first:** Design responsive from the smallest breakpoint up.

## Hard Rules
- Do not add sections, features, or content not in the reference.
- Do not "improve" a reference design — match it.
- Do not stop after one screenshot pass.
- Do not use `transition-all`.
- Do not use default Tailwind blue/indigo as the primary color.
