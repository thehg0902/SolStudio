# Agency OS(V1.13.0) — Website Build Template

Per-client workflow (2-minute setup):
1. Clone this repo → rename to the client → point origin at the client's
   own repo. First `/build` (or `/demo`) creates the branch set as safe
   site-only placeholders. Four control verbs move your local site files:
   `/stage` → staging branch (demo subdomain), `/save` → main (GitHub
   backup), `/deploy` → deploy branch (live, after a QA advisory + your
   go), `/demo` → one-shot branch setup + first stage push.
2. In `input/client.md`, fill the FOUR inputs at the top — everything
   below the `END OF REQUIRED INPUT` banner is optional:
   - **Business Profile Paste** — the GBP/Maps dump, unstructured
   - **Niche** — one line ("roofing contractor")
   - **Special requests** — optional free text
   - **Hero story** — optional one sentence ("a car driving and stops at
     a house") → a polygon graphic hero at zero media cost; empty → a
     solid-colour hero with scroll-blended section colours

   Optional but high-leverage: **Creative** (voice) and **Vibe** (feel +
   reference images). See `input/client.schema.md`. Drop client assets in
   `input/assets-intake/`.
3. Open Claude Code in the repo root. Say `/build`.
4. Phase 0 does not stop you — it hands you one job (drop design
   references into `input/assets-intake/vibe/`) and immediately runs
   Phase 1 research and copy in parallel while you hunt. Then answer the
   gates: pick a direction at Phase 2 (one letter), media (fill slots or
   approve paid generation), deploy choice (manual /package, GitHub
   Pages, or Hostinger Git). Parsed facts you still need to confirm wait
   as a checklist in `system/state/QUESTIONS.md` until `/qa`. Typically 4-5
   replies for a whole build.
5. Media: Phase 4 writes a shopping list at
   `input/assets-intake/slots/SHOPPING_LIST.md` (slot filenames +
   ready-to-paste prompts). Generate, save files under those exact names
   in the same folder, run `/ingest`.

Repo shape — three folders, in the order work flows through them:

```
input/    what you fill in (client.md + assets-intake/)
system/   the brain (contracts, state, scripts, docs, preview)
output/   the website — the only thing that ships
```

(`CLAUDE.md` and `.claude/` stay at the root: Claude Code loads project
skills, commands, and hooks only from there.)

The deliverable is the standalone `output/` folder (openable by
double-clicking output/index.html; zip it with `/package`):

```
output/
  index.html  style.css  script.js   <- home page
  shared/     tokens.css  base.css  main.js
  assets/     images/  video/  fonts/
  <page>/     index.html  style.css  script.js   (one folder per page)
```

Operator guide: `system/docs/OPERATION_MANUAL.md`.

Architecture: `system/docs/ARCHITECTURE.md`. Skill index: `system/docs/REGISTRY.md`
(regenerate with `python3 system/scripts/generate-skill-registry.py`).

Maintenance: run `python3 system/scripts/lint-skills.py` before committing skill
changes.

VERIFY BEFORE RELYING ON (see system/docs/ARCHITECTURE.md Appendix B):
- Path-scoped rule frontmatter format in `.claude/rules/` against current
  Claude Code docs (https://code.claude.com/docs/en/memory).
Hook wiring: verified against hooks docs + unit-tested 2026-07-06
(v1.4.0) — pure-bash extraction, CLAUDE_PROJECT_DIR paths, fail-closed
deploy gate. Hooks load at session start; after editing them, restart
the session before relying on enforcement.
