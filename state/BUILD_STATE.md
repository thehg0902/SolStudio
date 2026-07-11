# Build State

Client: Sol Studio
Template version: v1.8.0
Started: 2026-07-10

| phase | name         | status  | gate                      | completed |
|-------|--------------|---------|---------------------------|-----------|
| 0     | intake       | done    | HUMAN: confirm table      | 2026-07-10 |
| 1     | architecture | done    | -                         | 2026-07-10 |
| 2     | design       | done    | HUMAN: approve style prev | 2026-07-10 |
| 3     | content      | done    | -                         | 2026-07-10 |
| 4     | media        | done    | HUMAN: fill slots/approve | 2026-07-10 |
| 5     | build        | done    | -                         | 2026-07-10 |
| 6     | qa           | done    | scripts must pass         | 2026-07-11 |
| 7     | deploy       | in-progress | HUMAN: confirm deploy | -         |
| 8     | handoff      | pending | -                         | -         |

status: pending | in-progress | blocked | done
Notes:
- Branches bootstrapped: staging, deploy (from HEAD, pushed to origin).
- Phase 0 blocked: business name unresolved, see state/QUESTIONS.md.
- Asset inventory (client/assets-intake/, excl. slots/): only client/assets-intake/vibe/
  has files — two vibe reference images, neither listed under client.md's ## Vibe section
  and both oversized (1.9MB, 1.2MB vs ~500KB target). No logo/hero/gallery/team photos
  supplied yet — Phase 4 will need a shopping list for essentially everything.
- Phase 0 complete: name resolved (Sol Studio), stack flag interpretations logged in
  DECISIONS.md, 0 unconfirmed Auto facts (Business Profile Paste was empty, manual
  Overrides-only mode) — Gate 1 trivially passed, nothing to present for confirmation.
- Phase 1 complete: audience brief + site architecture (5 pages, home + dev/design/market/
  questionnaire) logged in DECISIONS.md. No matching niche study/playbook for a creative
  agency — built from client.md facts + general knowledge instead of forcing an analogy.
- Phase 2 artifacts built and self-checked (desktop 1280, mobile 360, contrast, mobile nav,
  scroll entrances) — awaiting operator approval of BOTH:
  preview/style-preview.html (tokens: palette/contrast/type, 0 failures)
  preview/layout-preview.html (real home page structure/rhythm/motion, BINDING for Phase 5)
  Direction: "Gravity" — cosmic/orbital dark theme from the client's own vibe references
  (concept mockup + exact 10-swatch palette).
- Phase 2 APPROVED by operator 2026-07-10 after several rounds of tweaks (font -> Old
  Standard TT self-hosted; pillars = pure text w/ dim hover cover; fixed hero video behind
  all sections w/ frosted-glass section boundaries, low opacity, masked faded edges;
  process = pinned crossfade stage, steps flow in/out one at a time, each w/ animated PNG).
  preview/layout-preview.html is BINDING for Phase 5. Full rationale in DECISIONS.md.
- Phase 3 complete: all 5 pages created in site/ with final copy (index + dev/design/market/
  questionnaire), shared shell in shared/base.css + shared/main.js, home in style.css.
  Verified in browser (1280 + 360): pages render, nav/mobile-overlay work, questionnaire
  Formspree form wired (mnjkodoz + honeypot + required name/email), no console errors, no
  360 overflow. Copy register = declarative-elevated (hero "We refuse to be common.").
  OPEN CONTENT QUESTIONS in QUESTIONS.md (rendered as [PLACEHOLDER] in HTML, will FAIL
  qa-review until answered): location, per-pillar service specifics, pricing/budget bands,
  portfolio/gallery imagery, testimonials, social URLs, public contact email, founder story.
- Phase 4 (media) IN PROGRESS. Operator supplied + /ingest processed 4 REAL assets (model=client,
  0 credits, in-use): hero-intro.mp4 (1.66MB), hero-loop.mp4 (2.5MB, both under 3MB no-cdn cap)
  + auto posters; hero-poster.webp (55KB accretion-disk still); logo.png/.webp (real Sol Studio
  logo, transparent — resized from 2.3MB to 137KB/44KB @640w). Files were dropped under
  non-slot names (heroIntro/hero looping/hero static/logo) → renamed to slots; added logo.png +
  hero-poster.png as tracked slots. Logo will REPLACE the CSS ring + text wordmark in Phase 5.
- Phase 4 DONE. Process icons process-01..04 GENERATED (operator approved "approve everything"
  in-chat 2026-07-10, transcribed YES per row; Higgsfield nano_banana_pro, ~8 credits total,
  717→~709 balance) → cosmic OODA tiles, ingested to webp 32–73KB, in-use. All hero + brand +
  process media now real and optimized.
- ONE media item deferred: portfolio galleries (9 slots, dev/design/market-work) = REAL work
  only, still `planned`. Operator to supply real work or I drop the gallery sections at Phase 5.
- Phase 5 build DONE + verified in-browser (desktop 1280 + mobile 360, 0 console errors):
  * Fixed cosmic backdrop site-wide (.site-backdrop, base.css): home = intro-loop hero video
    (intro→loop crossfade confirmed working via script.js); other pages = hero-poster still.
  * Frosted-glass section panels shared across all pages (base.css .section::before, masked
    edges) — content floats over the backdrop, soft transitions, no hard dividers.
  * Home process = pinned crossfade stage w/ the 4 real OODA icons; verified sequential
    one-at-a-time reveal desktop + mobile (fixed a place-content:center column-collapse +
    a flex margin-auto container-shrink bug during build).
  * Real logo adopted: cropped circular mark (logo-mark.webp 31KB) + SOL STUDIO wordmark in
    every header/footer, replacing the old CSS ring. Full lockup logo.webp also available.
  * Formspree form intact over the backdrop. Vanilla HTML/CSS/JS (no framework), file-structure
    contract honored (shared/ base.css+main.js, per-page style.css+script.js).
- QA-BLOCKERS remain (operator input, will fail qa-review): [PLACEHOLDER] text (per-pillar
  services, pricing, social URLs, contact email, location) + the 9 portfolio gallery slots
  (real work or drop the sections). Phase 6 QA not run yet — it will fail until these resolve.
- 2026-07-10 build committed on main (54b929f) and pushed. staging is now SITE-ONLY
  (git subtree split of site/ -> f49dfcd, force-pushed; operator request) — hosting can
  serve staging's root directly for previews. deploy branch NOT written: the
  pre-deploy-qa-gate hook blocked scripts/deploy-split.sh (QA not done) — correct per the
  hard invariant; deploy gets generated after /qa passes.
- 2026-07-10 /qa RUN:
  * check.py: PASS (0 fail, 8 benign warns: 3 comment-only per-page css stubs; header/
    footer "drift" = relative-path + aria-current differences between root and subpages).
    Fixes applied to get there: home self-links / -> index.html (file:// portability);
    mask-gradient #000 -> var(--color-bg) (identical alpha masks, token-clean); subpage
    backdrop imgs given width/height (CLS); ALL [PLACEHOLDER] content OMITTED, not
    invented (footer socials removed; unconfirmed service cards/FAQ items removed;
    galleries removed; questionnaire budget field removed — QUESTIONS.md items stay open,
    everything restorable when answered); hero videos re-encoded from originals at CRF 26
    (intro 698KB + loop 1.62MB = 2.32MB combined, under the 3MB no-cdn cap).
  * Manual review: PASS, no criticals. No client facts on-site beyond confirmed ones
    (name, free demo, custom/no-templates); links all valid; Formspree endpoint matches
    client.md; MEDIA_LOG in-use files all exist. Fixed in-review: mobile no-JS nav gap —
    added <noscript> inline-nav fallback to all 5 pages (component-api rule 5).
  * VISUAL QA: NOT RUN — blocked. The Browser-pane tooling switched to the Chrome-
    extension backend mid-session and the extension is disconnected, so the rendered
    360/768/1280 audit (incl. the post-placeholder-removal layouts and re-encoded video
    quality) could not be performed. PHASE 6 BLOCKED on this single item.
- Phase 6 status: script PASS + manual PASS + visual = OPERATOR SIGN-OFF (2026-07-11,
  in-chat: operator previewed on their own devices and chose "Sign off visual QA" —
  recorded in lieu of the tool-driven 360/768/1280 audit, which stays unavailable while
  the browser extension is disconnected). PHASE 6 DONE.
- 2026-07-11 site-only branches (re)built via scripts/deploy-split.sh (QA gate passed):
  `deploy` AND `staging` both = subtree split 4152c51 of site/ from main HEAD (1a26a40),
  pushed to origin. index.html at branch root, zero OS files (script verified). The old
  f49dfcd staging ref no longer existed on origin — recreated fresh, no force-push.
  Hosting can point at either branch root directly. Awaiting HUMAN: connect hosting +
  confirm deploy to close Phase 7.
