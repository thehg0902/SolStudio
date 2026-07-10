# Media Shopping List — Sol Studio

How this works (asset-slots contract):
- Generate each asset (Higgsfield or your tool of choice), name it EXACTLY
  as the block header, drop it in its `folder:`, tick `[x]`, then run `/ingest`.
- `/ingest` optimizes + moves files into `site/assets/` and updates MEDIA_LOG.
- Leaving a block unticked with no file makes it a paid-generation candidate:
  I'll ask for per-slot approval in chat before spending any credits
  (CLAUDE.md hard invariant — nothing paid generates without your YES).

Style block (reused verbatim in every generated prompt for consistency):
> deep-space cosmic aesthetic, near-black void background (#020814 / #0D192C),
> a warm accretion-disk glow in coral-to-peach (#EA6C66 → #FA9B82), volumetric
> nebula light, faint starfield, cinematic depth, elegant and premium,
> no text, no watermarks, no logos, no people

Media policy (derived — client.md left these blank): People in imagery = NO.
Hero + process art = AI-allowed abstract cosmic renders. Portfolio galleries
= REAL work only (never AI-faked). Budget profile = no-CDN (Hosting plan
blank) → hero video target ≤2.5MB, hard cap 3MB, ≤8s.

---

## logo.png        [x] filled
folder: Brand/
treatment: alpha (transparent PNG, never flattened) — the real Sol Studio logo
Operator-supplied. Transparent "S" mark + SOL STUDIO wordmark, gold/violet on the
cosmic palette. Adopted site-wide (header/footer) in Phase 5, replacing the CSS
ring + text wordmark. Not for AI generation.

## hero-poster.png        [x] filled
folder: Home - Hero/
treatment: static (poster / LCP still + reduced-motion & autoplay-blocked fallback) — 16:9
Operator-supplied accretion-disk still. Used as the hero poster (the frame shown
before/instead of the video), left ~55% darker for headline copy. Not for AI generation.

## hero-intro.mp4        [x] filled
folder: Home - Hero/
treatment: intro-loop (plays once on load, then hands off to hero-loop.mp4) — 16:9, ≥1080p, 5–8s, muted
The first-load hero moment: a slow push toward a glowing accretion disk / black-sun.
Must END on a settled, near-still frame that matches hero-loop.mp4's first frame
(the handoff crossfades between them). Leave the LEFT ~55% darker/open for headline copy.
PROMPT ->
Slow cinematic push-in toward a glowing orange accretion disk around a black sun,
warm coral-to-peach light bending around a dark core, drifting nebula clouds and
faint stars, the motion settling to near-stillness on the final frame with the
disk resolved and centered-right in frame; deep-space cosmic aesthetic, near-black
void background (#020814 / #0D192C), a warm accretion-disk glow in coral-to-peach
(#EA6C66 → #FA9B82), volumetric nebula light, faint starfield, cinematic depth,
elegant and premium, no text, no watermarks, no logos, no people. Left ~55% of
the frame kept darker and open for text.

## hero-loop.mp4        [x] filled
folder: Home - Hero/
treatment: intro-loop (the seamless loop hero-intro hands off to) — 16:9, ≥1080p, 5–8s, seamless loop, muted
Its FIRST frame must match hero-intro.mp4's final frame. Very gentle ambient motion
only (slow disk shimmer + nebula drift) so it loops invisibly and never distracts.
PROMPT ->
Seamless looping ambient motion of a glowing orange accretion disk around a black
sun, gentle shimmer along the disk and slow drifting nebula, camera nearly static,
composition matching a settled centered-right disk (continues from the intro's final
frame); deep-space cosmic aesthetic, near-black void background (#020814 / #0D192C),
a warm accretion-disk glow in coral-to-peach (#EA6C66 → #FA9B82), volumetric nebula
light, faint starfield, cinematic depth, elegant and premium, no text, no watermarks,
no logos, no people. Left ~55% of the frame kept darker and open for text.

## process-01.png        [x] filled
folder: Home - Process icons/
treatment: alpha (transparent PNG, never flattened) — 1:1 square, ~800×800, transparent background
OODA step 01 "Observe" — gathering signal/light before acting.
PROMPT ->
A luminous ringed lens or telescopic aperture gathering starlight, thin glowing
coral-to-peach line-and-glow illustration on a fully transparent background,
minimal and elegant, centered, consistent stroke weight; deep-space cosmic aesthetic,
warm accretion glow in coral-to-peach (#EA6C66 → #FA9B82), premium, no text, no
watermarks, no people. Transparent background (PNG alpha).

## process-02.png        [x] filled
folder: Home - Process icons/
treatment: alpha (transparent PNG, never flattened) — 1:1 square, ~800×800, transparent background
OODA step 02 "Orient" — turning what we see into a plan / alignment.
PROMPT ->
An orbital compass: planets and a glowing path aligning along a single orbit ring,
thin glowing coral-to-peach line-and-glow illustration on a fully transparent
background, minimal and elegant, centered, consistent stroke weight matching the
other process icons; warm accretion glow in coral-to-peach (#EA6C66 → #FA9B82),
premium, no text, no watermarks, no people. Transparent background (PNG alpha).

## process-03.png        [x] filled
folder: Home - Process icons/
treatment: alpha (transparent PNG, never flattened) — 1:1 square, ~800×800, transparent background
OODA step 03 "Decide" — converging on one clear direction.
PROMPT ->
Converging light rays resolving into one bright focal star/point, thin glowing
coral-to-peach line-and-glow illustration on a fully transparent background,
minimal and elegant, centered, consistent stroke weight matching the other process
icons; warm accretion glow in coral-to-peach (#EA6C66 → #FA9B82), premium, no text,
no watermarks, no people. Transparent background (PNG alpha).

## process-04.png        [x] filled
folder: Home - Process icons/
treatment: alpha (transparent PNG, never flattened) — 1:1 square, ~800×800, transparent background
OODA step 04 "Act" — build, launch, refine.
PROMPT ->
A rising spark / launch trail igniting upward from an orbit, thin glowing
coral-to-peach line-and-glow illustration on a fully transparent background,
minimal and elegant, centered, consistent stroke weight matching the other process
icons; warm accretion glow in coral-to-peach (#EA6C66 → #FA9B82), premium, no text,
no watermarks, no people. Transparent background (PNG alpha).

---

## Portfolio galleries — REAL WORK ONLY (do NOT AI-generate)

The Development / Design / Marketing pages each have a work gallery. These must be
REAL Sol Studio projects (screenshots, mockups, case-study images) — generating fake
"work" and presenting it as real is off-limits (media-generation rule 3). Drop real
files into the folders below under these exact names, tick, and /ingest. If Sol Studio
has no showable work yet, tell me and I'll remove the gallery sections at Phase 5.
Aspect ratio 4:3.

## dev-work-01.jpg / dev-work-02.jpg / dev-work-03.jpg        [ ] filled
folder: Development - Work/
treatment: static (real project image) — 4:3
Real development work (site screenshots / mockups). Not for AI generation.

## design-work-01.jpg / design-work-02.jpg / design-work-03.jpg        [ ] filled
folder: Design - Work/
treatment: static (real project image) — 4:3
Real design work (brand/UI samples). Not for AI generation.

## market-work-01.jpg / market-work-02.jpg / market-work-03.jpg        [ ] filled
folder: Marketing - Work/
treatment: static (real project image) — 4:3
Real marketing work/results. Not for AI generation (and never invent metrics).
