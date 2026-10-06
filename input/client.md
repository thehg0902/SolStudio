# Client Brief

<!-- v3 (minimal intake). FOUR inputs, all at the top. Paste the GBP text,
     type the niche, add any special requests, describe the hero story if
     you want one, run /build. Everything below the END OF REQUIRED INPUT
     banner is optional CONTROL - skip all of it and the build still runs
     end to end. {curly braces} anywhere = your private note, stripped
     before any parsing. See client.schema.md for the full rules. -->

<!-- ==================== START HERE - 4 inputs ==================== -->

## Business Profile Paste
<!-- 1 of 4. Paste raw and unstructured, right below this line: the Google
     Business Profile / Maps listing, the hours block, services, reviews,
     the old website's text, socials. No formatting needed. Phase 0 parses
     it into the Auto section at the bottom; more paste = fewer questions
     later. The ONLY hard blocker in the whole system is that a business
     NAME appears somewhere - the first line of a GBP dump normally is it.
     One caution: if your pasted text contains a line starting with "## ",
     wrap that line in {curly braces} - a bare "## " starts a new section
     and would cut your paste in half. -->


## Niche
<!-- 2 of 4. One line, plain words: "roofing contractor" / "dental clinic" /
     "garage door repair" / "coffee shop" / "med spa".
     This one line picks the audience study, the design playbook, and the
     market-research angle - the highest-leverage characters in this file.
     Leave it blank and the system detects it from the paste's category line
     (weaker, and it logs the guess). What you type here always wins. -->
creative agency - web development, design and marketing studio {migrated v1.8 -> v1.13: restates the Phase 1 niche call already in DECISIONS.md}


## Special requests
<!-- 3 of 4. Optional. Free text, plain sentences. Anything unusual:
     "needs a French page", "client hates blue", "no stock-looking people",
     "booking button goes to their Calendly", "must keep their exact logo".
     The system interprets and logs its reading in system/state/DECISIONS.md - it
     never rejects you. -->
Home "process" section = the building process: an initial understanding phase, then planning, framed on the Observe-Orient-Decide-Act (OODA) system — keep the ideology intact but rewrite it with elevated, stylized copywriting (copy magic, not military jargon). Home "pillars" section = three pillars of work: Development, Design, Marketing — each pillar links to its own page (dev / design / market). Home "cta" section = contact CTA driving to the questionnaire page.


## Hero story
<!-- 4 of 4. Optional. ONE sentence describing a small scene, in plain
     words: "a car driving and stops at a house" / "coffee poured into a
     cup, steam rising" / "a roof going from worn to new".
     FILLED  -> Phase 2 breaks the sentence into beats and builds them as a
       polygon/geometric GRAPHIC hero (custom-coded SVG shapes, scroll-
       choreographed). Costs nothing, ships immediately. If you approve it
       at the Phase 2 gate, Phase 4's shopping list gains matching footage
       slots so you can upgrade that same story to real media later - your
       per-slot approval still governs any generation.
     EMPTY   -> solid-colour hero, no media slots, no empty video box. The
       page background then blends between section colours as you scroll,
       which is what signals section change site-wide. -->
{left empty on purpose: Overrides hero-media = intro-loop keeps the existing accretion-disk video hero - see DECISIONS.md 2026-10-06 migration entry}


<!-- ============ END OF REQUIRED INPUT ============================
     Everything below is OPTIONAL CONTROL. /build works with all of it
     empty. Fill a line ONLY to force a specific outcome; every empty line
     is ignored everywhere (validator, enrichment, every skill).

     OPTIONAL - HIGH LEVERAGE (~2 min, biggest quality delta):
       ## Creative   - voice and differentiation
       ## Vibe       - the FEEL, plus reference images
     OPTIONAL - CONTROL (only to force specifics):
       ## Target Audience - paste research you already have
       ## Overrides       - hard facts that beat everything
     MACHINE-OWNED:
       ## Auto - written by Phase 0, never hand-edited
     ============================================================== -->

## Creative
<!-- Optional but high-leverage. Answer what you know in a few words; skip
     the rest. These are the PRIMARY voice source - the research fan-out can
     find what the market says, but only you can say what makes THIS
     business different. -->
- What makes this business better than competitors: Every design is custom and built exactly for the client
- The story / why they started:
We refuse to be common, we thrive for exceptionalism
- Ideal customer:
- Offer / guarantee / promo:Free demo
- Mood (3-6 adjectives):Atmospheric
- Never say / avoid:Cheap, low quality

## Vibe
<!-- Optional. Describe the FEEL the website should have, in your own
     words: sites you admire, energy, era, textures, "liquid glass over
     dark video", anything. Drop reference images/screenshots into
     input/assets-intake/vibe/ (committed with the repo so remote
     machines see them too; compress to ~500KB each; they are context
     only - never shipped, never copied into output/) and list them with
     what to take from each:
     - vibe/ref-header.png: this kind of glassy nav
     - vibe/moodboard.jpg: the color feel, not the layout
     Phase 1 runs while you gather these - you are not holding up the
     build. They are read once, at Phase 2. -->
- vibe/ChatGPT Image Jul 9, 2026, 12_00_50 PM.png: full concept mockup —
  deep-space/cosmic dark theme (near-black navy bg, glowing orange
  accretion-disk hero art), tracked-out all-caps nav + pill CTA buttons,
  two-tone gradient hero headline (white -> coral/orange), numbered
  01-04 process row (maps to our OODA process section), orbit/ring motif
  repeated in the logo mark and scroll indicator. Take the mood, type
  treatment, and section rhythm — not the literal image content (it's a
  mockup, not a shippable asset).
- vibe/color Pallet.png: the actual brand palette to use — Void Black
  #020814, Deep Space Navy #0D192C, Midnight Blue #1F2A45, Storm Blue
  #354066, Dusty Indigo #596392 (dark/base scale); Muted Plum #562E48,
  Nebula Rose #A13A48, Solar Coral #CA4E56, Accretion Orange #EA6C66,
  Soft Peach Glow #FA9B82 (warm/accent scale).

## Target Audience
<!-- Optional. Phase 1 GENERATES this automatically (niche study + a live
     research fan-out). Paste here only if you already have real research -
     what you paste is client data and outranks everything the agents
     find. -->
{Paste audience research here: who they are, what they're looking for,
 pain points, what makes them choose. Curly-brace text like this note is
 an operator comment - ignored by the system, write freely.}

## Overrides
<!-- Optional. Anything typed here BEATS the paste and the Auto section.
     Fill ONLY what you want to force - EMPTY VALUES ARE IGNORED.
     Pages accepts the markup syntax: home | hero | about / menu | menu-list
     Stack flag values are free text; known values with defined behavior:
       animation: gsap | css-only | none | placeholder
       3d: yes | no | placeholder
       booking: calendly | none | placeholder
       forms: formspree | none | placeholder
       email-marketing: brevo | none | placeholder
       analytics: ga4 | plausible | none | placeholder
       hero-media: video | loop | intro-loop | scroll-scrub | static
                   | graphic | propose | placeholder
                   (graphic = the polygon hero from ## Hero story;
                    leave empty and the Hero story section decides)
       framework: vanilla | react-cdn | tailwind-cdn | free text
                  (vanilla preferred; requests always honored)
     placeholder = build the front-end slot, wire any provider later.
     Autonomy: low | normal | high (high relaxes non-safety gates;
     media approval gate ALWAYS holds; low restores the old blocking
     Phase 0 fact-confirmation table).
     Hosting plan: hostinger-business | hostinger-premium | free text
       (business/cloud = CDN budget profile; anything else or empty =
        tighter no-CDN budgets - see performance skill)
     Accuracy fields (v1.3.4) known values:
       Primary action: call | book | form | visit | order
       Languages: en | en+fr | ... (site copy languages)
       Photos policy: real-only | ai-allowed | mix
       People in imagery: yes | no
       Color mode: light | dark | either
     Target search terms (v1.4.3): the keyword input for the whole SEO
       process. Fill it and the site uses exactly those words for
       titles/H1s/schema, `/`-separated, one phrase per page:
         Target search terms: AC repair Markham / furnace repair Richmond Hill
       Leave it empty and the build falls back to a generic [service]
       [location] template built from Services x Service area - never
       a guess, never invented. Phase 1 may propose a candidate keyword
       for you to review; it never gets used unless you copy it here. -->
### Identity & contact
- Name:Sol Studio
- Phone:
- Email:
- Address:
- Hours:
### Content facts
- Services:
- Audience:
- Years in business / founded:
- Service area:
- Certifications / licenses:
- Price range / starting price:
- Payment methods:
- Emergency / after-hours:
- Testimonials:
- Photos (what exists / what's needed):
### Conversion & SEO
- Primary action:
- Target search terms:
- Languages:
- Pages:home | hero | process | pillars | cta / dev / design / market / questionnaire
- Domain:solforged.net
### Integrations
- Google Maps:
- Google Business Profile:
- Socials:
- Existing website:www.solforged.net{its connected to another repo i intent to use this one to override the previous verision}
- Booking link:
- Formspree ID:https://formspree.io/f/mnjkodoz
- Form notify email:thehg0902@gmail.com
- GA4 ID / Plausible domain:
- Hosting plan:
### Media policy
- Photos policy:
- People in imagery:
### Visual constraints
- Brand colors:
- Logo:
- Brand fonts:
- Color mode:
- Avoid (visual):
- Competitors:
- Style references:
### Stack flags
- animation: css only.
- 3d:
- booking:placeholder for calandly
- forms:formspree: formspree
- email-marketing:none
- analytics:
- hero-media:intro-loop
- framework:
### Meta
- Autonomy:

## Auto (generated — do not hand-edit)
<!-- Written by the system at Phase 0 (client-enrichment). Empty in the
     template. Corrections go in Overrides, never here. -->
