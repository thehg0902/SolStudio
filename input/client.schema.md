# client.md Schema  (v3 — minimal intake; template v1.11.0)

Validated by system/scripts/validate-client-md.py. Two formats are accepted:

THE FOUR-INPUT FAST PATH (v1.11.0): the operator fills only the four
sections above the `END OF REQUIRED INPUT` banner — `## Business Profile
Paste`, `## Niche`, `## Special requests`, `## Hero story` — and runs
/build. Everything below the banner is optional CONTROL. v3 is v2 with two
new top-level sections and a re-ordering; no parsing model changed (the
validator keys sections by name, never by position), so v2-era client files
remain valid exactly as written.

OPERATOR COMMENTS (v1.6.0): anything inside curly braces `{like this}`
anywhere in client.md is an operator comment — stripped before ANY
parsing (validator, enrichment, skills) and never treated as content.
Use freely for notes-to-self next to any field; multi-line allowed.

- **v3 (this schema):** Business Profile Paste / Niche / Special requests /
  Hero story / Creative / Vibe / Target Audience / Overrides / Auto. ALL
  sections optional; nothing is required except a findable business name.
- **v1.1 (legacy):** if the old `## Business` / `## Contact` headers are
  found, the validator applies the v1.1 rules unchanged (old client repos
  keep working). The v1.1 field reference is preserved at the bottom of
  this file because Overrides reuses it.

## v3 sections (in this order)

### `## Business Profile Paste` (input 1 of 4 — raw dump zone, FIRST)
See the full description below (unchanged behavior, new position).
CAUTION: a line beginning `## ` inside pasted text starts a new section and
would split the paste. Wrap such a line in `{curly braces}`. The validator
emits a SOFT note for any `## ` section name it does not recognize, which
is how this mistake surfaces.

### `## Niche` (input 2 of 4 — one line, plain words)
"roofing contractor", "dental clinic", "coffee shop". Precedence: this is
owner-typed, so it carries client.md level-2 weight and ALWAYS beats the
GBP category line. Behavior:
- **Filled** — wins outright. Enrichment still reads the GBP category, only
  to compare; a disagreement is ONE line in system/state/DECISIONS.md
  (`niche-conflict | typed "<x>" vs GBP category "<y>" | using typed`),
  never a question.
- **Blank** — enrichment detects it from the paste's category line, logs it
  `claude-proposed`, and the Phase 0 report prints the guess so it is
  correctable in one word.
- **Blank and undetectable** — SOFT, never a blocker; the resolution ladder
  falls through to conversion-mode matching.
Resolution ladder (Phase 0 writes one `niche-resolution` line to
DECISIONS.md): exact slug match against the audience-study and
design-playbook filenames → alias/family table in the market-research
skill's references → conversion-mode fallback when nothing matches. A niche
that matches NO study gets no audience brief rather than a wrong one.

### `## Special requests` (input 3 of 4 — free text)
Anything unusual: an extra language, a colour the client hates, a booking
link, "keep their exact logo". Interpreted, never rejected; the reading is
logged in system/state/DECISIONS.md. This replaces the old
`Overrides > Meta > Special requests` bullet, which has been removed so the
field has exactly one home.

### `## Hero story` (input 4 of 4 — one sentence, optional)
One small scene in plain words ("a car driving and stops at a house").
- **Filled** — Phase 2 breaks the sentence into beats and builds them as a
  polygon/geometric GRAPHIC hero: custom-coded SVG shapes on the herostory
  stage, scroll-choreographed, zero media spend, shipped immediately. If the
  operator approves it at the Phase 2 gate, Phase 4's shopping list gains
  matching footage slots so the same story can be upgraded to real media —
  governed by the unchanged per-slot media approval invariant.
- **Empty** — solid-colour hero, no media slots, no empty video box; the
  page background blends between per-section colours on scroll, and that is
  what signals section change site-wide.
An explicit `Overrides > Stack flags > hero-media` value outranks this
section; `hero-media: graphic` forces the polygon hero with no sentence.

### `## Creative` (optional — high leverage, hand-written)
Free answers to: what makes the business better than competitors; the
story / why they started; ideal customer; offer / guarantee / promo;
Mood (3-6 adjectives); never say / avoid. Empty lines are skipped.
Fully empty Creative = SOFT note (validator lists which questions would
most improve the result for the detected niche), then proceed on
niche-playbook defaults.

### `## Vibe` (optional — the website's intended feel)
Free text describing the feel (sites admired, energy, era, textures) +
reference images dropped into `input/assets-intake/vibe/`. The folder
is COMMITTED (v1.3.2) so vibe context travels with the repo to remote
machines and cloud sessions — compress each image to ~500KB (validator
nudges above that). Context only: never shipped, never copied into
output/ (deploy-split and /package prove the deliverable is output/-only).
List each as `- vibe/<file>: what to take from it`. design-direction
reads the images ONCE at Phase 2 and distills them into the
DECISIONS.md rationale. Missing referenced files and unlisted images in
the folder are SOFT notes. Also accepted as an optional section in
v1.1-format files.

### `## Target Audience` (optional — paste zone for audience research)
Paste anything about WHO the site must convince and WHAT they are
looking for: demographics, pain points, search intent, objections,
what makes them pick one business over another. Free text, any length.
Consumers: site-architecture derives the primary conversion action and
section order from it (book / order / call — whatever this audience
actually does), and copywriting tailors every CTA and objection-
handling line to it. The one-line Overrides `Audience:` field remains
for quick use; this section is the deep version and wins when both
exist (more specific beats more general).

### `## Overrides` (optional — owner-typed facts, beats everything)
Anything from the v1.1 field reference below, any subset, same syntaxes:
Name, Phone, Email, Address, Hours, Services, Pages (incl. the
`page | section / page2 | ...` markup), Brand colors, Logo path, Stack
flags (free text; universal `placeholder` value), Links, Testimonials,
Photos, Audience, Competitors, Style references, Autonomy, Special
requests. Links may equivalently be split into sub-lines (Google Maps /
Google Business Profile / Socials / Existing website / Booking link),
which is how the template scaffolds them.
The template scaffolds all of these as ready-to-fill bullet lines,
grouped under ### sub-headers (Identity & contact / Content facts /
Conversion & SEO / Integrations / Media policy / Visual constraints /
Stack flags / Meta — v1.4.0). ### headers are cosmetic only: the
validator splits sections on ## and ignores colon-less lines. A line
with an EMPTY value is ignored everywhere (validator, enrichment,
skills); no need to delete unused lines. "Photos (what exists /
what's needed)" is the asset inventory; "Photos policy" under Media
policy is the AI-generation constraint — different fields.

Accuracy fields (v1.3.4) — each has a named consumer; all optional,
free text, empty = ignored:
- Years in business / founded, Service area, Certifications / licenses,
  Price range / starting price, Payment methods, Emergency / after-hours
  → copywriting (trust facts, never inventable) + seo-technical
  (areaServed, priceRange in JSON-LD) + niche must-haves (24/7 badge
  only if Emergency says so).
  Service area (v1.4.2) accepts a `/`-separated list, same convention as
  Pages: `Service area: Markham / Richmond Hill / Vaughan / Scarborough`.
  A single value still works unchanged. Feeds seo-technical's areaServed
  array and site-architecture's location-page set. client-enrichment
  extracts this list from the paste when the GBP text states one, tagged
  `[paste][unconfirmed]` like any other Auto fact — usually filled by
  paste, not typed.
- Primary action (call | book | form | visit | order), Languages
  (en | en+fr | ...) → site-architecture (per-page conversion action,
  language scope).
  Target search terms (v1.4.3) is THE explicit keyword input for the
  whole SEO process — filling it means "use these words," full stop.
  Accepts a `/`-separated list, one phrase per page, in the order
  listed: `Target search terms: AC repair Markham / furnace repair
  Richmond Hill`. Precedence (site-architecture
  references/service-location-matrix.md, seo-technical rule 1): filled
  → that exact phrase drives the title/H1/JSON-LD for its page, and for
  the service+location matrix, ahead of everything else. Empty → the
  generic `[service] [location]` template built from Services x Service
  area, never invented. Either way, market-research's Phase 1 KEYWORD
  CANDIDATE (a proposal, not a fact) is superseded the moment this field
  is filled — it exists to help the operator decide what to type here,
  not to act as a silent fallback.
- Domain, Formspree ID, Form notify email, GA4 ID / Plausible domain
  → seo-technical (sitemap/canonicals), forms, analytics; each filled
  field preempts a QUESTIONS.md stop.
- Hosting plan (hostinger-business | hostinger-premium | free text)
  → selects the performance BUDGET PROFILE (v1.4.1): business/cloud =
  cdn profile (page 1.5MB, hero video 4MB cap); premium/other/EMPTY =
  no-cdn profile, fail-safe tighter (page 1.0MB, 3MB cap, required
  cache headers). Consumed by /ingest's quality ladder, check.py's
  page-weight audit, performance + deploy-hostinger skills.
- Photos policy (real-only | ai-allowed | mix), People in imagery
  (yes | no) → media-generation (what may be generated at all).
- Brand fonts, Color mode (light | dark | either), Avoid (visual)
  → design-direction + design-tokens (hard constraints; Vibe stays
  the soft feel channel).

### `## Business Profile Paste` (input 1 of 4 — full description)
Paste anything: GBP about panel, Google Maps listing text, hours block,
services list, reviews, the business's old website text, socials.
Unstructured is fine. No API keys, no scraping — paste only. The
client-enrichment skill extracts facts from here into Auto at Phase 0.
Client facts always arrive by paste; the Phase 1 research fan-out may
search the web for MARKET evidence, but web-sourced material is
provenance-tagged and can never become a claim about this business.

### `## Auto (generated — do not hand-edit)` (machine-owned)
Written by client-enrichment. One fact per line with provenance + status
tags: `- phone: 905-xxx-xxxx  [paste][unconfirmed]`. Statuses:
`[unconfirmed]` → `[confirmed]` after the operator confirms (see the
deferred ledger below).
Review quotes live in a `Testimonial candidates` subsection, marked
`[needs-approval]`. Hand edits belong in Overrides, never here;
enrichment regenerates the whole section on each run.

## Blocking rule (the ONLY Phase 0 BLOCKER)
No business name found anywhere — no Name in Overrides, no plausible name
in Paste, and Auto empty. Everything else missing = SOFT.

## Fact confirmations are deferred, not gated (v1.11.0)
Phase 0 no longer stops for a confirmation table. Every `[unconfirmed]` Auto
fact becomes one `- [ ]` row under the exact heading
`## Fact confirmations (deferred from Phase 0)` in system/state/QUESTIONS.md, and
the pipeline continues straight into Phase 1. The operator answers any time
before /qa: corrections go to Overrides, confirmations flip the tag to
`[confirmed]` and tick the box.

This is safe because the gate was never the safety mechanism — the QA script
is. Unconfirmed phone/address/hours/prices still render
`[PLACEHOLDER: value?]`, `check.py` fails on placeholders, and it now ALSO
fails while any row under that heading is still open. The risk moved from
attention-enforced to script-enforced. Nothing in phases 1-3 needs an exact
phone number, so the old stop was scheduling, not protection.
`Autonomy: low` restores the original blocking in-chat table.

## Precedence within client.md
Overrides (owner-typed)
  > the four START HERE inputs (owner-typed: Niche, Special requests,
    Hero story, and the Paste as raw source)
  > Auto [confirmed] (parsed from paste, operator-confirmed)
  > Auto [unconfirmed] (parsed, not yet confirmed).
Everything the Phase 1 research fan-out finds sits BELOW all of the above:
it is skill-reference-level evidence about the market, not client fact.
Unconfirmed facts may drive design and copy DRAFTS, but ship as
`[PLACEHOLDER: value?]` in HTML until confirmed — the qa-review script
fails on placeholders, so nothing unverified can ship. This ladder is
also noted in CLAUDE.md (precedence level 2 sub-note).

---

## v1.1 field reference (used by Overrides; full rules for legacy files)

- `## Business`        - name, niche, one-line description
- `## Contact`         - phone, email, address (or "no physical address")
- `## Services`        - bullet list, at least one
- `## Pages`           - two accepted formats:
    (a) Markup (preferred): one line; pages separated by `/`; within a
        group the FIRST token is the page, following `|` tokens are its
        sections. Example:
          Pages: home | hero | about | services | contact / menu | menu-list | gallery
        = 2 pages: home (sections hero, about, services, contact) and
        menu (sections menu-list, gallery).
    (b) Plain list (legacy): comma or bullet list of page names, each
        treated as a separate page; sections decided in Phase 1.
    Malformed markup is interpreted, never rejected (interpretation
    principle) - the validator prints its corrected reading as a SOFT note.
- `## Brand`           - colors (hex or "none - propose"), logo path in
                          input/assets-intake/ or "none - text logo"
- `## Audience`        - who the site must convince
- `## Mood`            - 3-6 adjectives
- `## Stack`           - flags, one per line, exact keys. Values are FREE
                          TEXT. The lists below are KNOWN values with
                          defined behavior — recommended, not an enum.
                          ANY other text is intent to interpret: Claude
                          recommends an approach and logs it in
                          system/state/DECISIONS.md (claude-proposed). Every flag
                          also accepts the universal value `placeholder`
                          = build the front-end section/slot with no
                          third-party integration, wire-ready for any
                          provider later.
    animation: gsap | css-only | none | placeholder
    3d: yes | no | placeholder
    booking: calendly | none | placeholder
    forms: formspree | none | placeholder
    email-marketing: brevo | none | placeholder
    analytics: ga4 | plausible | none | placeholder
    hero-media: video | loop | intro-loop | scroll-scrub | image-sequence
                | static | propose | placeholder
                (loop/intro-loop/scroll-scrub are asset-slot treatments -
                 see system/contracts/asset-slots.md; media arrives via the
                 Phase 4 shopping list + /ingest)
    framework: vanilla | react-cdn | tailwind-cdn | any other = interpret
               (vanilla is the default and preference; a requested
                framework is ACCEPTED per the file-structure contract's
                Framework exception - never rejected)
  A missing flag key is a soft gap defaulting to `propose`.
- `## Links`           - Google Maps URL, Google Business Profile, socials,
                          existing website, booking link
- `## Testimonials`    - verbatim quotes with attribution
- `## Photos`          - what exists in assets-intake, what must be generated
- `## Competitors`     - names/URLs
- `## Style references`- sites the client likes/dislikes
- `## Special requests`- anything unique
- `## Autonomy`        - low | normal | high (default normal). high relaxes
                          non-safety gates; media approval gate ALWAYS holds.

Legacy blocking (v1.1 files only): the eight sections Business through
Stack are REQUIRED; missing or TODO blocks Phase 0. In v2 nothing is
required except a findable business name.
