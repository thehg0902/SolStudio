# Decisions Log
<!-- Resolved ambiguities. Once logged here, a decision outranks skills
     and contracts (precedence level 3). Format:
     YYYY-MM-DD | topic | decision | decided-by (human/claude) | why -->

2026-07-10 | business name | Name = "Sol Studio"; domain solforged.net is the domain only, not the brand name | human | resolved chat/client.md conflict, see QUESTIONS.md
2026-07-10 | stack: animation | interpreted "css only." as css-only | claude | typo/stray punctuation on a known value
2026-07-10 | stack: booking | interpreted "placeholder for calandly" as booking: placeholder now (build front-end slot only, no live integration), Calendly is the intended future provider to wire in later | claude | matches universal `placeholder` semantics in schema
2026-07-10 | stack: forms | interpreted "formspree: formspree" as forms: formspree, using the Formspree ID already supplied in Overrides (https://formspree.io/f/mnjkodoz) | claude | redundant free-text value, ID present elsewhere in Overrides confirms intent
2026-07-10 | audience-research niche match | none of the 11 operator-authored studies (all local home-service/medical) fit a web design/dev/marketing agency; skipped forced analogy, built the brief below from client.md Creative facts + general agency-buyer psychology instead | claude | rule 1's "closest study" has no reasonable candidate here; a forced analogy (e.g. concrete-contractor) would mislead more than help

--- AUDIENCE BRIEF (Phase 1) ---
Persona: owner/marketing decision-maker at a small-to-mid business, currently
  served by a templated site builder, a cheap freelancer, or a generic agency.
Top pains: (1) "every agency's site looks the same as the last one" — cookie-
  cutter templates; (2) cheap/DIY output reads as unprofessional and erodes
  trust with their own customers; (3) juggling separate vendors for build,
  design, and marketing with no one owning the whole picture.
Deep desire: to look and feel exceptional/atmospheric, not common — a brand
  presence that signals they take their business seriously.
Biggest motivator: fear of blending in / looking cheap, outweighed by the
  pull of a custom, premium result built exactly for them (client's own
  words: "every design is custom," "we refuse to be common").
Decision trigger: tangible proof before committing — the free demo/promo
  already on file lowers the barrier to first contact.
Objections to pre-answer: "is bespoke only for big-budget clients?", "is
  this just another templated agency?", "do you do the marketing too, or
  just build the site and leave me stranded?"
Primary CTA: contact -> questionnaire page (per client.md Special requests);
  frame as "start the process," not a generic contact form.
Trust stack: the three-pillar model (Development / Design / Marketing) as
  proof of full-service capability; the OODA-informed process section as
  proof of rigor/methodology, not just aesthetics.
Adaptation note: Ontario-market specifics (WSIB, seasonality) from the
  studies do not apply — this is a B2B creative-services audience, not a
  home-service one; nothing province-specific carried over.

--- SITE ARCHITECTURE (Phase 1) ---
Pages markup in client.md is authoritative (rule 1a): 5 pages, home at
site/ root, each other page its own folder.

Primary conversion action: Overrides "Primary action" and Target Audience
are both empty -> derived from the AUDIENCE BRIEF above = form (drive to
the questionnaire page). Applies site-wide unless a page overrides it.

No address on file -> no dedicated Contact page (rule 5 doesn't trigger);
the questionnaire page IS the contact/conversion endpoint per client's
own Special request.

Nav (5 items, under the 6-item max; proposed labels, claude-proposed):
  Home | Development | Design | Marketing | Start the Process
  -> site/index.html | site/dev/ | site/design/ | site/market/ | site/questionnaire/
No phone number given -> no header phone treatment.

Page: home (site/index.html) — sections per client.md markup, order fixed:
  1. hero — atmospheric intro/tagline, primary CTA visible in first viewport
  2. process — OODA-informed build process (Observe-Orient-Decide-Act),
     rewritten as elevated/stylized copy, not military jargon (client's
     explicit instruction)
  3. pillars — three cards: Development / Design / Marketing, each linking
     to its own page
  4. cta — contact CTA driving to the questionnaire page (bottom-of-page
     conversion action per rule 3)

Page: dev (site/dev/), design (site/design/), market (site/market/) —
  no sections were specified in client.md; identical structure proposed
  across all three for consistency (claude-proposed, standard names per
  component-api.md + one custom section):
  1. hero — pillar-specific framing (Development / Design / Marketing)
  2. services — what's included under this pillar (custom section; exact
     offerings are a Phase 3 copy question, not yet in client.md)
  3. gallery — proof/work-sample slots (custom section; no portfolio
     facts on file yet, becomes Phase 4 asset slots)
  4. faq — objections specific to this pillar, pulled from the brief's
     objection list
  5. cta — drives to questionnaire (consistent bottom-of-page action)

Page: questionnaire (site/questionnaire/) — the primary conversion
  endpoint, per client's Special request and the "free demo" offer:
  1. hero — short framing ("start here" / lower the barrier per brief's
     decision-trigger)
  2. form — the intake questionnaire itself (Formspree, ID on file:
     https://formspree.io/f/mnjkodoz; notify: thehg0902@gmail.com)
  Standard `footer` section applies to every page per component-api.md
  (not itemized per page above).

Languages: not specified -> default en only, no scope decision needed.
Target search terms: none given -> no service-page SEO split beyond the
  page map already fixed by client.md.
No niche playbook match (see audience-research note above) -> no
  must-have-section proposal made under rule 1b; section lists above are
  built directly from client.md's Special requests instead.
Framework: Stack flag empty -> vanilla HTML/CSS/JS default (file-structure
  contract).

### Design Direction (Phase 2)
No niche playbook fits a creative/dev/marketing agency (references are
  coffee-shop/restaurant/gym/hvac/dental) -> skipped forced adaptation;
  direction below is built from Mood + the two vibe references, which are
  unusually specific (a full concept mockup + an exact named palette) and
  outrank playbook aesthetics anyway (rule 3/7).
Direction name: "Gravity" — cosmic/orbital dark theme built around the
  Sol (sun) name: gravity, orbit, launch, nebula as metaphors for the
  craft, not literal space-agency kitsch.
Color mode: dark (Overrides Color mode empty -> derived from vibe, both
  references are near-black). Base scale: Void Black #020814 -> Dusty
  Indigo #596392. Accent scale: Muted Plum #562E48 -> Soft Peach Glow
  #FA9B82, used for gradient headline treatments, CTA outlines, and the
  orbit-ring signature device. Exact hex values from
  client/assets-intake/vibe/color Pallet.png carry forward as design-tokens
  input verbatim (client-supplied, not proposed).
Type pairing intent: clean geometric sans throughout; nav/eyebrows/labels
  in tracked-out (wide letter-spacing) small caps; hero headline large and
  heavy with a two-tone treatment (solid light color -> gradient accent
  color on the emphasis word) mirroring the mockup's "DESIGN WITH /
  GRAVITY" split.
Imagery style: photo-real cosmic/nebula photography (glow, starfield,
  planetary curvature) for hero/section backdrops; portfolio-style work
  cards use whatever real project imagery Sol Studio supplies (Phase 4
  gap - none on file yet) rather than more space photography, so the
  motif stays a frame around real work, not a substitute for it.
Layout personality: confident and spacious, generous negative space on
  near-black, content-first cards with thin hairline borders (not heavy
  shadows) - matches "atmospheric," avoids "cheap" (client's explicit
  avoid).
Signature element (ONE, per rule 5): the orbit/gravity ring — a thin
  glowing ring device reused as the logo mark, the scroll-cue, and a
  section-divider accent. Not repeated as 5 different tricks.
Motion level: subtle-to-expressive, matching Mood "Atmospheric" and the
  Stack animation:css-only decision - slow ambient glow/parallax drift on
  hero art, scroll-triggered fade/rise on section entrances, no
  GSAP-dependent motion. No conflict to log.
Negative constraints: "Never say: cheap, low quality" (Creative) carries
  into visuals too - no stock-photo-generic gradients, no default system
  fonts, no low-contrast text on the dark base (accessibility skill
  enforces contrast at Phase 5).

### Design Tokens (Phase 2)
site/shared/tokens.css written; full required token set from
  contracts/design-tokens.md emitted. Palette hexes are client-supplied
  verbatim from color Pallet.png. Fonts: Space Grotesk (heading) + Inter
  (body) - both OFL, geometric-sans pairing per typography.md's "clinical
  calm" guidance (weight contrast only, matches the mockup's clean labels
  + heavy display headline); self-hosted .woff2 (400/500/700 heading,
  400/500/600 body) downloaded to site/assets/fonts/.
Derived (not in client palette): --color-success #3EAA7E (muted teal-green,
  tinted toward the palette's cool hue family since no green exists in the
  10-swatch palette) — 6.93:1 vs bg, 6.08:1 vs surface.
Contrast verified (WCAG AA): text #F2F4F8 18.21:1 vs bg; text-muted
  #A8AFC4 9.16:1 vs bg; accent #EA6C66 6.53:1 vs bg (safe as text/border
  on dark bg); primary/border #596392 3.46:1 vs bg / 3.04:1 vs surface
  (passes 3:1 UI-component threshold, used for borders/icons/large UI,
  not body text); error #CA4E56 4.52:1 vs bg (body-text safe), 3.97:1 vs
  surface (icon/border-safe, not small body text on surface).
CTA button decision: accent-on-accent-fill fails contrast (white text on
  #EA6C66 = 2.79:1) - matches the vibe reference anyway, which uses
  OUTLINED pill buttons (accent text+border on bg, 6.53:1) rather than
  filled buttons. Component-api implements CTAs as outline style, never
  solid-accent-fill with light text.
--color-primary correction: generate-style-preview.py's mechanical gate
  checks bg-colored button labels on a --color-primary fill at 4.5:1;
  the client-exact Dusty Indigo #596392 only hit 3.46:1 there (fine for
  borders/icons at the 3:1 UI threshold, not for text-bearing fills). Kept
  #596392 as --color-border (client-exact) and derived a lightened tint,
  same hue/saturation at L 0.56 = #747DAA, for --color-primary (fills)
  — 5.02:1 vs bg, 4.41:1 vs surface. Same family, still reads as "the
  indigo," now safe for filled-button text.

2026-07-10 | font correction (operator feedback) | replaced Space Grotesk
  (heading) with Manrope; kept Inter (body) | human+claude | operator
  disliked Space Grotesk's geometric/quirky feel, asked for something
  "slimmer, more slick and elegant, similar to Apple's website." Apple's
  actual SF Pro isn't freely licensable for self-hosting, so substituted
  Manrope - a common OFL SF-Pro-adjacent alternative at light weights.
  Applied the Apple-marketing look concretely, not just the font swap:
  hero h1 now font-weight:300 + letter-spacing:-.03em (was default bold,
  no tracking); all other h1/h2/h3 font-weight:500 + letter-spacing:-.02em;
  logo wordmark eased from 700/.08em to 600/.06em. Space Grotesk woff2
  files deleted from site/assets/fonts/, replaced with manrope-300/500/700.
  Re-verified: 0 contrast failures (font change doesn't affect color
  contrast), layout-preview re-screenshotted at 1280 - reads noticeably
  slimmer/tighter, matches the ask.

2026-07-10 | font correction #2 (operator feedback) | replaced Manrope
  (heading) with Old Standard TT (400/700/400-italic) | human+claude |
  operator supplied an explicit Google Fonts <link> snippet for Old
  Standard TT. Honored the font choice but self-hosted it instead of
  live-loading from fonts.googleapis.com (file-structure contract rule +
  frontend-animation/design-tokens anti-pattern: no Google Fonts <link>
  tags, self-host .woff2 - same visual result, better privacy/performance,
  no deviation from the operator's actual intent). Downloaded all 3
  variants to site/assets/fonts/old-standard-tt-{400,700,400i}.woff2,
  removed Manrope files. This is a "quiet luxury" pairing (high-contrast
  serif display + neutral sans body) per typography.md - fits the
  "elegant" ask better than a sans-only approach anyway. Adjusted
  layout-preview.html: hero h1 dropped to weight 400 (no 300 weight
  exists for this family) + letter-spacing -.01em (serifs read cramped
  at -.03em); accent word now italic + gradient; logo restored to
  700/.08em (bold wide-tracked serif logotype, common in luxury branding);
  base h1/h2/h3 dropped to 400/normal tracking (500 doesn't exist either).

2026-07-10 | pillars section redesign (operator feedback) | home page
  section 3 (pillars): removed card chrome (background/border/icon) for
  pure text; added a dim hover-only cover | human+claude | operator asked
  to remove all cards in favor of "pure elegant texts," with "a dim card
  shaped cover effect when mouse over" only. Implemented via a
  ::before pseudo-element (opacity 0 -> .6 on hover/focus-visible,
  transition on opacity only - a non-movement hover effect, so it's fine
  to leave un-gated by prefers-reduced-motion per reduced-motion.md).
  First pass used --color-surface for the cover, which is invisible since
  the pillars section itself already alternates to --color-surface as its
  background (layout-systems rhythm rule) - caught this by forcing the
  hover state via injected CSS and screenshotting before presenting.
  Corrected to --color-primary-dark (Midnight Blue #1F2A45), which is
  reliably lighter than both --color-bg and --color-surface, so the cover
  reads as a visible dim box regardless of which section background it
  sits on. Dropped .pillar-icon entirely (text-only, no icon glyph).

2026-07-10 | no hard section dividers - persistent fixed hero video
  (operator feedback) | human+claude | operator disliked the "chunky
  square section divider" - the hero's gradient scrim faded to a fully
  OPAQUE var(--color-bg) at its bottom edge, so the video visually cut
  off in a hard rectangle exactly where the next section began. Asked
  for the video to "stay there" across sections, dimmed/blurred instead
  of cut, with its motion still visible.
  .hero-media changed from position:absolute (confined to the hero box)
  to position:fixed, inset:0, z-index:-2 - it now covers the full
  viewport and stays put as the page scrolls, instead of scrolling away
  with the hero section. html carries the solid --color-bg fallback;
  body background set to transparent so every section's own background
  can reveal the fixed video underneath rather than occluding it.
  Every section background (.section, .section--surface, .cta-band,
  .site-footer, .site-header, .nav-overlay) converted from an opaque
  color to color-mix(in srgb, var(--color-token) N%, transparent) +
  backdrop-filter: blur(...) - a frosted-glass look where content stays
  readable and the video's motion stays visible but progressively
  softened, never hard-cut. Added two new tokens to support this:
  --blur-md (18px, standard sections/header/footer) and --blur-lg (30px,
  surface-alternated sections, the CTA band, and the mobile nav overlay -
  the deeper layers get more blur). Bumped contracts/design-tokens.md to
  v1.2.0 (Effects section) since this is a genuinely new token category,
  per rule 4. The two pre-existing hardcoded rgba() values in this file
  (header background, CTA radial-gradient accent) were also converted to
  color-mix() while touching this code, since they violated the
  var(--token)-only CSS rule and I was already in the neighborhood.
  Verified via computed styles: .hero-media is fixed/z-index:-2 covering
  the full viewport; .section/.section--surface report translucent
  backgrounds (55%/62% alpha) with blur(18px)/blur(30px) respectively.
  No console errors at 1280 or 360 width. The placeholder box itself is a
  flat color fill (no real footage yet), so the blur/motion effect isn't
  visually dramatic in THIS preview - the mechanism is correct and will
  read clearly once the real hero-intro/hero-loop video lands at Phase 4.

2026-07-10 | process section = scroll-revealed vertical timeline
  (operator feedback) | human+claude | operator asked, instead of showing
  the process statically, for "a css animation to reveal each step while
  the user scrolls." Restructured the home process section from a static
  4-across horizontal row (all steps entered the viewport together, so the
  old shared data-animate entrance revealed them all at once) into a
  VERTICAL TIMELINE: numbered nodes (01-04) on a hairline track, generous
  per-step vertical spacing (gap: clamp(--space-10, 20vh, 14rem)) so each
  step occupies its own slice of scroll and enters the viewport
  separately. Reveal is now PURE CSS scroll-driven - removed data-animate
  from the steps (so the IntersectionObserver no longer touches them) and
  drive each step with animation-timeline: view() + animation-range:
  entry 10% entry 60%, scrubbing opacity 0->1 + translateY(28px)->0 tied
  to scroll position. Added an accent line that "draws" down the timeline
  as the section passes (view-timeline: --process on the container, ::after
  scaleY 0->1). Guarding: the whole reveal lives inside
  @media (prefers-reduced-motion: no-preference) AND
  @supports (animation-timeline: view()) - so reduced-motion users and
  browsers without scroll-driven-animation support (Safari as of 2026-07)
  fall through to the base state where every step is fully visible from
  the start (rule 5: no content hidden without the enhancement). No JS
  needed for this effect (matches the css-only stack flag).
  Verified in the Chromium preview (which supports view timelines): walked
  the scroll from y=465->1185 and confirmed a genuine one-at-a-time reveal
  - opacities stepped [1,0,0,0] -> [1,.28,0,0] -> [1,1,0,0] -> [1,1,.26,0]
  -> [1,1,1,0] -> [1,1,1,.25] -> [1,1,1,1]. No console errors; no
  horizontal overflow at 360 (docW==winW==360); mobile reveal also
  sequential. This changes the section's LAYOUT vs the earlier-approved
  horizontal row, so per layout-systems rule 7 the binding preview is
  updated - re-approval covers it.

2026-07-10 | process steps get animated PNGs; softer section boundaries +
  lower section opacity (operator feedback) | human+claude | two tweaks:
  (1) each process step is now paired with a PNG that animates by CSS.
  Added a .process-media slot per step (grid: media beside copy from
  768px, stacked on mobile) holding a placeholder box labelled
  SLOT: process-0N.png -> these become FOUR new Phase 4 asset slots
  (process-01.png .. process-04.png, treatment=static/alpha PNG, one per
  OODA step). Ambient motion: a gentle continuous zoom+float loop
  (@keyframes process-float, 6s, translateY 0->-8px + scale 1->1.06 +
  opacity .85->1), staggered by nth-child animation-delay so the four
  don't pulse in lockstep. Kept on .process-media so it never collides
  with the step's scroll-reveal transform on .process-step; gated by
  prefers-reduced-motion. Verified all four float transforms change over
  time and the per-step scroll reveal still fires one-at-a-time.
  (2) Section backgrounds (process #2, pillars #3, cta #4) were reading
  too opaque and had hard rectangular edges. Moved each section's frosted
  panel from the element background onto a MASKED ::before pseudo-element:
  linear-gradient mask fades the panel (tint + backdrop blur together) to
  full transparency over --space-12 at top and bottom, so sections melt
  into a band of clear background instead of cutting a hard edge - proved
  it by temporarily injecting a vivid striped background into the fixed
  layer and screenshotting the pillars->cta seam (panel blurs where text
  sits, pattern goes sharp/clear in the gap). Lowered tint: section
  --color-bg 55%->40%, --color-surface 62%->46%, cta-band --color-surface
  65%->52%, footer --color-bg 55%->45% - background vortex now reads
  through much more. Footer's hard 1px border-top (a hard "connection
  line") removed and replaced with the same masked ::before panel fading
  in from the top. Content kept above every panel at full opacity
  (.container / footer children get position:relative;z-index:1). No new
  tokens needed (reused --space-*, --blur-*); style preview still 0
  contrast failures.
  Phase 4 note: process-01..04.png are added to the slot inventory for the
  media shopping list (transparent-PNG icon/illustration per OODA step;
  square ~1:1; must read on the dark frosted panel).

2026-07-10 | process = PINNED CROSSFADE STAGE (operator clarified intent) |
  human+claude | operator clarified the earlier vertical-timeline reading
  was wrong. Actual want: all steps HIDDEN at rest; the section PINS (stays
  at the same level) while the user scrolls; the steps "flow through like
  water, in and out of appearance," exactly ONE visible at a time.
  Implementation (pure CSS, scroll-driven, no JS): a tall wrapper
  (.process-scroll, height 420vh) provides the scroll distance and is the
  timeline SUBJECT (view-timeline:--proc). An inner .process-stage is
  position:sticky;top:0;min-height:100svh, flex-centered - it pins and
  stays put while the wrapper scrolls past. The four steps are absolutely
  stacked in the same spot (position:absolute;inset:0), opacity:0 at rest.
  Each step runs a scroll-driven crossfade keyframe (proc-flow: in from
  below blurred -> hold -> out above blurred) mapped to a slice of the
  timeline's `contain` range (step1 0-28%, step2 24-52%, step3 48-76%,
  step4 72-100%, overlapping ~4% so one flows out as the next flows in - no
  blank flash). Last step uses proc-flow-last (flows in and HOLDS, so the
  section doesn't end on an empty frame). A row of 4 progress dots lights
  one at a time in sync (proc-dot, same ranges).
  KEY BUG FIXED during build: first tried scroll-timeline:--proc on the
  wrapper - produced 0 progress (all steps stuck hidden) because a named
  scroll-timeline's source must be an actual scroll CONTAINER, and the
  wrapper isn't one (the PAGE scrolls). Switched to view-timeline + the
  `contain` named range, which tracks the wrapper passing through the
  viewport and confines the crossfades to precisely the pinned window.
  Verified by walking the scroll: opacities stepped
  [.8,0,0,0]->[1,0,0,0]->[0,1,0,0]->[0,0,1,0]->[0,0,.3,.2]->[0,0,0,1] and
  held - genuinely one-at-a-time with water-like overlap at the seams;
  stage pinned (stageTop==0) throughout; dots track. Confirmed on desktop
  1280 and mobile 360 (no horizontal overflow, docW==winW==360). No console
  errors. Ambient PNG float (process-float) retained on .process-media.
  Progressive enhancement: the pin + crossfade live inside
  @media (prefers-reduced-motion: no-preference) AND
  @supports (animation-timeline: view()); the base rules render a plain,
  fully-visible vertical list (media + copy per step, dots hidden) so
  reduced-motion users and non-supporting browsers (Safari today) get all
  steps visible and readable, no pin, nothing stuck hidden.
  Removed the previous vertical-timeline track/accent-line-draw (no longer
  applicable to a pinned crossfade).

2026-07-10 | PHASE 2 APPROVED | human | operator approved the design after
  the tweak rounds. preview/layout-preview.html is BINDING for Phase 5.

### Copy Voice (Phase 3)
Register (rule 3): two candidate hero headlines were considered -
  A) bold/declarative: "We refuse to be common." (the client's own
     conviction, verbatim-in-spirit)
  B) elegant/metaphoric: "Every site, a singular gravity." (leans on the
     cosmic 'Gravity' design direction)
CHOSEN: A as the H1 ("We refuse to be common." with the accent italic on
  "common"), because it's the client's actual voice from Creative, it's
  memorable, and the declarative punch pairs well with the elegant Old
  Standard TT serif (tension = interesting). B's gravity/light metaphors are
  kept as a SECONDARY seasoning across section headings, not the lead.
Register held site-wide: elevated, spare, confident; short declarative
  sentences; evocative light/gravity motifs used sparingly; no hype
  superlatives (honors Creative "never say: cheap, low quality" and the
  audience brief's anti-"just another templated agency" objection). Grade
  ~7-8, a touch more literary than a trade site (creative-services
  audience). Benefit before feature.
Process section: OODA ideology kept intact (titles stay Observe / Orient /
  Decide / Act per client's explicit instruction) with the "copy magic" in
  each step's one-line description - no military jargon.
Facts NOT invented (rule 2): location, per-pillar service specifics,
  pricing, portfolio, testimonials, socials, founder detail - all logged
  in QUESTIONS.md and rendered as [PLACEHOLDER: ...] in the HTML so
  qa-review blocks them from shipping unconfirmed. Confirmed facts used:
  name (Sol Studio), the free-demo offer, "every design custom / no
  templates" differentiator, Formspree endpoint + notify email.
Local grounding (rule 4) SKIPPED - no city on file (question logged);
  nothing invented.

### Build (Phase 5)
2026-07-10 | site-wide cosmic backdrop | claude | the binding preview
  covered HOME only. Extended its "content over fixed cosmic media" system
  to every page for cohesion: a fixed .site-backdrop (z-index -2, base.css)
  holds the intro-loop hero VIDEO on home and the hero-poster STILL on the
  other pages (much lighter than a video per page); all .section elements
  became frosted-glass masked panels (base.css) so the whole site reads as
  content floating over the cosmic backdrop with soft transitions. Home
  hero is an open .hero-block (no panel) so the video reads full.
2026-07-10 | real logo integration | claude | operator's supplied logo is a
  stacked lockup (S-mark + SOL STUDIO wordmark). At nav size the baked
  wordmark would be illegible, so cropped the circular S-mark
  (logo-mark.webp/.png, from the hi-res source) and pair it with the
  wordmark set in the heading font in every header/footer — replaces the
  old CSS ring. Full lockup (logo.webp) kept for any large-logo use.
2026-07-10 | pinned-process build fixes | claude | porting the crossfade to
  real (longer) copy exposed two bugs the placeholder preview hid:
  (1) place-content:center collapsed the copy column to min-content →
  switched to a bounded, margin-auto-centered grid (max 52rem, copy col
  minmax(0,30rem)); (2) .container's margin-inline:auto shrank it to
  content width inside the stage's flex column → added width:100% on the
  stage container. Both verified fixed (step 832px, sequential reveal
  desktop + mobile).
2026-07-10 | phone-portrait backdrop centering | human+claude | black-hole
  centering on phone flip-flopped across 78%→71%→72.5%→76% because the
  video drifts across its loop and "centered" is perceptual — resolved by
  a temporary #calibrate slider; OPERATOR set 68% by eye. Locked into
  base.css @media (max-width:640px) and (orientation: portrait) — portrait
  only per operator instruction; landscape + desktop stay 50%. Slider code
  removed after calibration.
2026-07-10 | cinematic hero launch (operator instruction) | human+claude |
  home hero stripped to ONE bold headline + ONE CTA: removed the eyebrow,
  the lead paragraph ("Every Sol Studio site is built from nothing but
  your brief..." — Phase 3 copy, message still carried by the pillars
  section), the "Free demo" hero-note, and the scroll cue ("remove all
  the dim small texts... clean atmospheric with the background video").
  Headline enlarged to clamp(3rem, 8vw+1rem, 6.5rem) at weight 700 (Old
  Standard TT bold) with a soft text-shadow for legibility over video.
  Launch choreography (pure CSS, no JS): 0-1.4s video only; title fades
  up from blur 1.4-3.2s (ease-out-expo); CTA follows 3.0-4.2s. Gated by
  prefers-reduced-motion (reduced = instantly visible); animations always
  complete without JS so nothing can stay hidden. Verified by sampling
  opacity along the timeline (0/0 → .9/0 @2.2s → 1/1 @4.4s), desktop +
  mobile screenshots, no console errors. hero-block now 100svh.

2026-07-10 | hero rebuilt to operator's reference mockup | human+claude |
  operator supplied a concept image ("change the herosection to exactly
  like this image"): stacked all-caps ExtraBold sans headline "DESIGN /
  THAT / ATTRACTS" (white/white/gradient last line), bordered rounded-rect
  "VIEW WORK →" button, thin gradient rule + "DIGITAL EXPERIENCES" tag
  bottom-left, circular ↓ scroll button bottom-right. Implemented 1:1:
  - New display face: Poppins 800 (self-hosted woff2, 7.8KB latin) as
    --font-display — a THIRD family, exceeding typography.md's 2-family
    guideline by explicit operator direction; used ONLY for this headline.
    contracts/design-tokens.md bumped v1.3.0 (adds --font-display).
  - Headline gradient: var(--color-accent) -> color-mix(primary 55%, error)
    ≈ coral->mauve-violet, token-derived per css rules.
  - Hero copy changed from "We refuse to be common." (the Phase 3 register-A
    headline) to "DESIGN THAT ATTRACTS" — operator-directed; the register-A
    line remains available for reuse elsewhere in copy.
  - CONVERSION NOTE: hero CTA is now "View Work" -> #pillars (no work page
    exists; pillars is the nearest showcase). The questionnaire conversion
    path stays via the nav pill + bottom cta-band. If real portfolio pages
    arrive later, repoint this button.
  - Launch choreography kept (title 1.4s, CTA 3s, tag+scroll 3.6s).
  Verified statically (all files serve, rules present); in-browser visual
  check pending — the Browser pane's interaction tools switched to the
  Chrome-extension backend mid-session and the extension is not connected.

2026-07-10 | hero v3 (operator refinements) | human+claude |
  - Headline: DESIGN / BUILD / ATTRACT (was DESIGN THAT ATTRACTS) — maps
    to the three pillars; gradient stays on ATTRACT. Button: "View My Work".
  - Per-line stagger: line spans animate 0.5s apart (1s/1.5s/2s after
    load), button 2.5s, tag+scroll 3.1s.
  - Full first-viewport fit: hero min-height = 100svh minus the sticky
    header's flow height (36px logo + 2*space-4 + 1px border), so the
    "Digital Experiences" tag and scroll circle sit above the fold.
  - Web (>=1024px): container translateX(-50px) left offset.
  - Phone portrait (<=640): all elements centered; per-line vw sizes so
    each WORD spans ~60% of viewport width (equal-width stacked type
    needs unequal sizes: DESIGN 15vw / BUILD 19vw / ATTRACT 12.5vw —
    estimated from Poppins 800 glyph advances, needs an eye-check).
  - Phone tag/scroll centered WITHOUT transforms (the entrance
    animation's fill state would permanently override a static
    translateX(-50%)); used left:0;right:0;margin-inline:auto instead.
  Verified statically only (curl: markup + all rules serve); visual pass
  still blocked on the disconnected Chrome extension.

2026-07-10 | hero v3.1 (operator refinements) | human+claude | phone
  portrait: dropped the per-word equal-width sizing (operator: "do not
  resize the text") for ONE uniform 17vw headline size — word widths vary
  naturally ("more dynamic"), sized so the narrowest word (BUILD, ~3.1em
  advance) spans >=50vw (~53vw) and the widest (ATTRACT, ~4.8em) ~82vw
  within container padding. Web >=1024px: container offset increased
  -50px -> -150px ("shift ~100px more"). Verified statically via curl;
  visual pass still pending on the extension.
  + header slide-in: on HOME only (style.css), .site-header slides down
  (translateY(-100%) -> 0, .9s) at 4.3s — after the last hero elements
  (tag/scroll, 3.1s + 1.2s) complete. Reduced-motion: header visible
  immediately. During the delay the header's flow space shows the video
  backdrop (fixed layer), so no visual gap.
