# 05 — Healthcare / Weight-Loss Overlay

Layer this on top of `01`–`04` for healthcare and weight-loss clients (clinics,
med spas, weight-loss programs, dental, etc.). These clients buy on **trust** and
carry **compliance risk** that a boat broker or gym doesn't.

## Trust signals (turn these up)
- **Credentials & certifications** — licenses, board certs, affiliations,
  years in practice. Show them prominently, not buried.
- **Real photos** — actual team, actual facility. Stock photos kill trust in
  healthcare faster than anywhere else.
- **Verified reviews** — Google / Healthgrades / Realself ratings with counts.
  Link out so they're checkable.
- **Insurance / financing** — list accepted insurance or financing options; a
  top objection for medical purchases.

## Compliance (don't skip — this is liability)
- **No PHI in plain forms.** Don't collect health details, diagnoses, or
  conditions in a standard web form (it's not HIPAA-compliant and the data sits
  in Payload/email). Keep web forms to name + contact + general interest, then
  **route to a HIPAA-compliant booking/intake tool** for anything clinical.
- **Medical disclaimers** — "results vary," "not medical advice," "consult a
  provider" where the content implies outcomes or advice.
- **Before/after disclaimers** — for weight-loss especially: "results not
  typical / individual results vary" near any transformation imagery. Don't
  promise specific outcomes (e.g. "lose 30 lbs").
- **Tracking + PHI** — be careful not to send health-related data into Meta
  Pixel/GA. Fire generic `Lead` events, not condition-specific ones.

## Conversion plays that work in this niche
- **Free consultation** as the primary offer — lowers the commitment bar for a
  medical decision.
- **Clear "what to expect"** on the first visit — reduces anxiety.
- **Easy booking** — the path from interest to booked appointment should be one
  obvious action.

## Local SEO (most healthcare is local)
- **Google Business Profile** — claimed, complete, matching the site exactly.
- **NAP consistency** — name/address/phone identical on the site, GBP, and any
  directories. Mismatches hurt local ranking.
- **`LocalBusiness` (or `MedicalBusiness`) JSON-LD** — with NAP, hours, geo
  (`04` SEO). Use the more specific `MedicalBusiness` type where it fits.
- **Location/service-area pages** if the client serves multiple areas.
