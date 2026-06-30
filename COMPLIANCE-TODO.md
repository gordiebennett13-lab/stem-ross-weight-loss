# ⚠️ COMPLIANCE RETROFIT — do before shipping any further changes to this site

This site predates the company-wide cookie/privacy standard (2026-06-16,
`.claude/rules/website-compliance.md`). Before/while working here, add:

1. **Consent-gated cookie banner** — GA4 + the Meta Pixel must NOT load until the
   visitor clicks **Accept**.
2. **`/privacy` page**, linked in the footer.

Copy the pattern from `build/website-template/`:
`src/lib/consent.ts`, `src/components/CookieConsent.tsx`, the consent-gated
`src/components/Analytics.tsx`, and `src/app/(frontend)/privacy/page.tsx`.

Delete this file once the retrofit is done.
