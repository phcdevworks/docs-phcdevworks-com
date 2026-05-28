# TODO.md

# Spectre Docs Execution Todo

This todo list is aligned to the current repository and the roadmap in
`ROADMAP.md`. It is intentionally scoped to docs-site content, navigation,
ecosystem alignment, and production readiness.

## Phase 1 - Foundation: Completed

All Phase 1 items have been delivered.

### P0: Infrastructure and Deployment

- [x] Set up Astro + Cloudflare adapter with working local dev and production
  build path.
- [x] Wire `npm run check` as the standard validation gate.
- [x] Configure `wrangler.jsonc` for Cloudflare Workers deployment.
- [x] Add `release:propose` script for version proposal at handoff.

### P1: Agent and Contributor Documentation

- [x] Write `AGENTS.md` as the shared authority and coordination guide.
- [x] Write `CLAUDE.md` as the primary Claude Code implementation guide.
- [x] Write `CODEX.md` with release, documentation, and stabilization
  procedures.
- [x] Write `JULES.md` with bounded maintenance task scope and commit rules.
- [x] Write `COPILOT.md` with support-assistant guardrails.
- [x] Write `.github/copilot-instructions.md` for IDE-facing scope.
- [x] Add `.codex/change-watch.md` and `.codex/release-readiness.md`
  playbooks.
- [x] Write `CONTRIBUTING.md`, `CHANGELOG.md`, and `SECURITY.md`.

### P2: GitHub Repository Configuration

- [x] Add PR template covering summary, type of change, package boundary
  check, validation, and review routing.
- [x] Add GitHub issue templates.
- [x] Add `ROADMAP.md` and `TODO.md` in the phased Spectre format.

---

## Phase 2 - Mature Operations

All items below are forward-looking. This phase starts from the stable
foundation and focuses on real content coverage, navigation, and ecosystem
alignment.

### P0: Content Expansion

- [ ] Add implementation guide for Spectre token usage.
- [ ] Add implementation guide for Spectre UI component usage.
- [ ] Add implementation guide for docs-site contribution workflow.
- [ ] Add reference pages for the `@phcdevworks/spectre-tokens` public
  contract.
- [ ] Add reference pages for the `@phcdevworks/spectre-ui` component
  surface.
- [ ] Keep all published content synchronized with the upstream packages it
  documents.

### P1: Navigation and Discoverability

- [ ] Add a sidebar or top-level navigation structure that scales with
  content growth.
  - Do not build this before P0 content is in place.
- [ ] Evaluate search or filter options supported cleanly by Astro or
  Cloudflare.
- [ ] Keep navigation aligned with the route structure documented in
  `CLAUDE.md`.

### P2: Ecosystem Alignment Automation

- [ ] Define a lightweight docs-update checklist triggered by upstream
  package releases.
- [ ] Evaluate a GitHub Actions workflow that flags docs content for review
  when `spectre-tokens` or `spectre-ui` publish.
- [ ] Document the update procedure in `CONTRIBUTING.md`.

## Recommended Execution Order

1. Content expansion (P0) — the site's primary purpose depends on it.
2. Navigation (P1) — implement once content is in place.
3. Ecosystem alignment automation (P2) — implement once content exists and
   upstream packages are releasing regularly.

## Explicitly Out of Scope

- Do not define token contracts here.
- Do not implement upstream UI components here.
- Do not add company-wide website positioning here.
- Do not expand content speculatively without proven consumer demand.
