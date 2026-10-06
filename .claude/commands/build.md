Run or resume the website build pipeline.

You are the MASTER for this session (system/contracts/agent-protocol.md). Every
write to system/state/, input/client.md and output/shared/ is yours; workers get
leases. Log every delegation, review round and gate in system/state/AGENT_LOG.md.

1. Read system/state/BUILD_STATE.md. If "Client:" is unset, this is a fresh build:
   set client name from input/client.md, set Started date, and BOOTSTRAP
   BRANCHES: run `bash system/scripts/bootstrap-branches.sh` - creates any
   missing `staging` and `deploy` branch as a SAFE site-only placeholder
   (orphan commit: index.html "coming soon" + noindex robots.txt) and
   pushes when a remote is configured, so hosting can be connected to
   either branch at any time with zero OS files leaked. Real content
   comes from the only writers: system/scripts/stage-split.sh (staging = pre-QA
   demo, via /stage or /demo) and system/scripts/deploy-split.sh (deploy =
   production, via /deploy).
2. Find the first phase not marked done - match the phase NUMBER, not its
   name - and execute phases in order:
   - Phase 0 intake (resolve -> enrich -> defer -> proceed. No stop.):
     a. FIRST inventory input/assets-intake/ (excluding slots/, vibe/):
        classify filenames (logo*, hero1/2*, gallery1/2*, team*, menu*,
        before*/after*...) and note the inventory - Phase 4 assigns
        these files to slots so only gaps get generated.
     b. RESOLVE THE NICHE. client.md `## Niche` wins whenever non-empty;
        blank = detect from the paste's category line. Then use the
        market-research skill's references/niche-map.md to pick the
        audience study and the design playbook (exact -> alias -> family
        -> closest-by-conversion-mode). Write ONE niche-resolution line to
        system/state/DECISIONS.md. A typed niche that disagrees with the GBP
        category is NOT a question: the typed one wins, the disagreement
        is one logged line. No study matches: `prior: none` - never
        substitute a wrong study.
     c. If `## Business Profile Paste` is non-empty, run the
        client-enrichment skill (writes the Auto section). Enrichment
        never overwrites the typed niche.
     d. Run `python3 system/scripts/validate-client-md.py`. Blockers (only "no
        business name found anywhere" in v2/v3) -> questions in
        system/state/QUESTIONS.md, mark phase 0 blocked, STOP. Everything else
        is SOFT: note it and continue.
     e. FACT CONFIRMATIONS ARE DEFERRED, NOT GATED (v1.11.0). Write every
        [unconfirmed] Auto fact as one `- [ ]` row under the fixed
        heading `## Fact confirmations (deferred from Phase 0)` in
        system/state/QUESTIONS.md (field | value | source). Do NOT stop for a
        reply. The operator answers any time before /qa; corrections go
        to Overrides, confirmations flip tags to [confirmed] and tick
        the box. EXCEPTION: client.md `Autonomy: low` restores the old
        blocking in-chat table.
     f. The safety net is unchanged and is where the risk now sits:
        phone/address/hours/prices still render as `[PLACEHOLDER: value?]`
        while [unconfirmed], the qa-review script fails on placeholders,
        and it also FAILS on any row still open under that heading - so
        nothing unverified can ship, it is just collected later.
     g. Report in <=5 lines: name, niche + study/playbook resolution,
        facts parsed vs deferred, asset inventory, empty-Creative note.
        END THE TURN WITH BOTH: `NEXT (you): drop 3-8 design references
        into input/assets-intake/vibe/ with one line each on what to
        take from them - needed at Phase 2, not before.` and
        `NEXT (me): Phase 1 discovery.` Then, IN THE SAME TURN, launch
        Fan-out A below: the operator reads and goes hunting refs while
        the workers run. Mark phase 0 done.
   - Phase 1 discovery (research + architecture + body copy; NO human
     gate - this phase IS the operator's ref-hunting window):
     a. AUDIENCE BRIEF first: audience-research skill, the matching niche
        study read ONCE into system/state/DECISIONS.md (skipped when client.md's
        `## Target Audience` is already rich, and skipped entirely when
        the niche matched no study). Compress it to a 6-line PRIOR DIGEST.
     b. RESEARCH FAN-OUT (Fan-out A, launched at the Phase 0 report; all
        read-only, no leases): use the market-research skill. Dispatch its
        four agents in ONE message so they run in parallel, each carrying
        the PRIOR DIGEST to challenge: (1) top players, (2) verbatim
        review language, (3) search intent, (4) client-side offer and
        proof. Agent 4 needs no web access and always runs. Synthesize
        the returns into ONE fixed-shape RESEARCH BRIEF in
        system/state/DECISIONS.md, every line evidence-tagged. Web tools
        unavailable, thin paste, or no study: follow the skill's
        degradation rules - omit sections, never invent them.
     c. ARCHITECTURE: use the site-architecture skill. The RESEARCH
        BRIEF's `### Build directives` (primary action, section-order
        consequence, objection order, trust stack) outrank the audience
        brief; explicit client.md Pages markup still outranks both.
     d. COPY DRAFTS (Fan-out B, after the brief and page map exist):
        use the copywriting skill in DRAFT MODE. Workers lease
        `system/preview/drafts/copy-<topic>.md` (one file each, never the same
        file); the master then consolidates into system/state/COPY_DRAFTS.md so
        the drafts survive a machine switch. Draft only what does NOT
        depend on visuals: BOTH hero registers (A and B, unpicked),
        subhead, CTA labels, every section H2, objection block, trust
        lines, service blurbs, FAQ, about narrative, draft meta.
        Word-budget-bound copy, media captions, and the register PICK
        wait for Phase 2/3.
     e. CRITIC PASS: dispatch the market-research skill's critic agent
        (agent 5) over the drafts - claim / placeholder / tone / audience
        audits, findings only. Apply every `block` and `fix`; log `nit`
        findings to DECISIONS.md as accepted.
     f. Report <=5 lines. If input/assets-intake/vibe/ is still empty,
        end with `NEXT (you): drop refs, or reply "no refs, use niche
        defaults"` and log a `sync` line; otherwise continue to Phase 2.
   - Phase 2 design (ONE taste gate: the operator picks a letter):
     a. VARIANTS: fan out 2-3 variant workers (max 3), each leasing its
        own `system/preview/variants/<label>/`. Each gets the audience brief,
        the research brief's words-to-use/avoid, and the vibe refs, and
        returns ONE swatch fragment - palette strip, type specimen, hero
        mock, one section mock - with its tokens INLINE (tokens.css is a
        shared surface; nobody leases it) plus a self-computed WCAG
        contrast check in findings.
     b. Master: assemble system/preview/direction-variants.html from the
        fragments and pick the RECOMMENDATION. Then, for that label only:
        design-direction (named direction + NAMED HERO CONCEPT + the
        section colour progression + the anti-generic test) and
        design-tokens -> output/shared/tokens.css + the 10-line rationale
        in DECISIONS.md. Run `python3 system/scripts/generate-style-preview.py`
        and fix every CONTRAST FAIL before going further.
     c. AUTHOR system/preview/layout-preview.html for the recommended label -
        the HOME page as it will actually be built: real section order
        (Phase 1), real grid/spacing (layout-systems patterns), labeled
        grey placeholder boxes with the slot filename printed in each,
        placeholder headings at real type sizes, the section colour
        progression live, the hero concept as it will ship (polygon
        graphic hero when `## Hero story` is written, else the
        colour-progression hero), and the EXACT animation/transition and
        mobile-nav code Phase 5 will ship. Links ../../output/shared/tokens.css.
     d. PRE-GATE REVIEW (agent-orchestration rule 5): one refuting worker
        against the claim "the layout preview is buildable, on-direction,
        defect-free at 360/768/1280, and could NOT be pasted unchanged
        onto a competitor's site", with images at all three widths per
        system/contracts/agent-protocol.md section 4. Fix, re-run once, stop.
     e. GATE: one gate card - layout-preview.html (full fidelity,
        recommended) + direction-variants.html (A/B/C swatches). The
        operator replies with a letter or "approve". The approved layout
        preview is BINDING for Phase 5. Autonomy: high skips the stop
        (log claude-approved in DECISIONS).
     f. SAME TURN, after the card - draft-ahead (gate-INDEPENDENT only,
        into system/preview/drafts/, promoted after the gate): page HTML
        skeletons per system/contracts/file-structure.md in the Phase 1 section
        order with no styling; titles/descriptions/JSON-LD draft; the
        slot NAME list per section (names only - prompt text is
        direction-dependent).
     g. If the operator switches label: rewrite tokens.css from that
        label, rebuild the layout preview, re-run the pre-gate review
        once, present again. Discard the swatches after the pick.
   - Phase 3 content: place the Phase 1 drafts into the skeletons and
     write what the direction governs (hero, headlines, CTA voice) in the
     approved voice, using the copywriting skill; PICK the hero register
     against the design rationale and log it. Fan out one worker per page,
     lease = that page's HTML file only (output/shared/** stays with the
     master). Master then runs the consistency pass: one conversion action
     per page, NAP identical everywhere, no invented facts, placeholders
     marked, and no line the critic marked `block`.
   - Phase 4 media: use the media-generation skill. Create THIS project's
     placement folders (named from the page/section map), sweep the Phase 0
     asset inventory into them (client files pre-fill + pre-tick their
     slots, model=client), then write the shopping list for the GAPS:
     input/assets-intake/slots/SHOPPING_LIST.md (one block per slot:
     exact filename, folder, treatment, spec, full prompt - per
     system/contracts/asset-slots.md) + mirrored MEDIA_LOG rows (status=planned).
     Slot NAMES come from the Phase 2 draft-ahead list; prompts are
     written now the direction is approved. Hero-story footage slots are
     added ONLY if the operator approved the graphic hero at Phase 2, are
     named for the same beats, and are marked "upgrade - the graphic hero
     ships if you skip this". No `## Hero story` = no hero media slots.
     STOP. Then either:
     (a) DEFAULT - the operator generates manually (Higgsfield), drops
         each file into its placement folder (slots/<Page> - <Section>/,
         exact slot filename), ticks [x] on the list, runs /ingest.
         Unfilled slots come back as Higgsfield candidates -> in-chat
         approval per (b).
     (b) Paid auto-generation ONLY with per-row approval: the operator
         types YES in MEDIA_LOG, or approves the named slots in-chat
         (present slot names + estimated credits, wait for the reply,
         transcribe `YES [in-chat <date>]`). Never generate before
         approval; blanket permission never counts. NEVER DELEGABLE: the
         approval is the operator's and the transcription is the master's.
     Optional: with operator consent, proceed to Phase 5 with poster
     placeholders while slots are filled; /ingest swaps real media in
     later with no code changes. Same turn as the STOP, draft-ahead the
     media-INDEPENDENT part of Phase 5 - players are coded against the
     slot manifest with placeholders, so /ingest needs no code change.
   - Phase 5 build: use layout-systems, components, hero-media or
     herostory (treatment wired per the shopping list / scrub manifests /
     the approved hero concept), frontend-animation (per Stack flags,
     including the section colour progression), accessibility,
     performance, honoring the Stack framework flag per the
     file-structure contract's Framework exception (vanilla default;
     requested frameworks accepted), then mobile-polish (phone experience
     as the showpiece - default on), plus integration skills matching
     Stack flags (forms, booking, email-marketing, analytics, maps-gbp;
     three-js ONLY when `3d: yes`; automation-glue only when the package
     or Special requests ask for lead automation).
     THEN THE FINISHING PASS, always, in this order - it is part of the
     phase, not optional polish: seo-technical (titles + meta per its
     overflow ladder, OG, LocalBusiness JSON-LD, canonicals, sitemap.xml,
     robots.txt), image-optimization (anything that reached output/assets/
     without going through /ingest), security-basics (.htaccess headers +
     any CDN script pinned with SRI), and legal-pages when ANY
     data-collecting feature exists (form, booking, newsletter,
     analytics, the hero localStorage flag). Phase 6 assumes all four ran.
     DELEGATION ORDER IS FIXED BY THE SHARED SURFACE: one `5.shared`
     worker runs ALONE first (output/shared/** - base CSS/JS, header,
     footer, token consumers), then up to four `5.page-<name>` workers in
     parallel, each leased its own page folder. Gate-DEPENDENT, never
     drafted ahead: hero/section media wiring that needs real files,
     srcset generation, poster extraction. Output: complete standalone
     site in output/ per system/contracts/file-structure.md.
   - Phase 6 qa: run the /qa command logic. The master runs
     `python3 .claude/skills/qa-review/scripts/check.py` (authoritative -
     it also fails on any deferred fact confirmation still open). Then fan
     out REFUTING reviewers, read-only: `6.visual-<page>` (images at
     360/768/1280 against the approved layout preview - ONE AT A TIME, the
     browser and preview server are shared surfaces), `6.a11y`, `6.facts`
     (every client fact against client.md, character by character). Master
     fixes and re-runs only the failing reviewer, once. Only mark done if
     the script passes and no reviewer holds an open critical.
   - Phase 7 deploy: after phase 6 = done, STOP and ask exactly:
     "Deploy how? (a) manual — I'll hand off files myself, (b) GitHub
     Pages from this repo, (c) Hostinger Git." Then:
     (a) run /package, write `deploy: manual — packaged <zip path>` to
         BUILD_STATE.md, mark phase 7 done. Phase 8 becomes optional:
         offer /handoff, skip on decline, mark workflow COMPLETE either way.
     (b) follow the deploy-hostinger skill's GitHub Pages section
         (references/github-pages.md). The QA-gate hook still applies to
         the push.
     (c) Hostinger flow per the deploy-hostinger skill
         (system/scripts/deploy-split.sh generates the site-only deploy
         branch; never commit to deploy manually).
     Same turn as the deploy question, draft-ahead the handoff doc and the
     DNS record list into system/preview/drafts/. NO WORKER EVER pushes, splits,
     or packages - those are master acts under the QA-gate invariant.
   - Phase 8 handoff: use maintenance-retainer + write client handoff doc
     (optional after a manual deploy — see Phase 7a).
3. After each phase: update BUILD_STATE.md (status, completed date, notes)
   and append that phase's gate line to system/state/AGENT_LOG.md.
4. Respect all hard invariants in CLAUDE.md at every phase. A worker report
   never satisfies one.
