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

- [x] Add implementation guide for Spectre token usage. —
  `src/content/docs/guides/token-usage.md`, linked from the sidebar under
  "Guides".
- [x] Add implementation guide for Spectre UI component usage. —
  `src/content/docs/guides/component-usage.md`, linked from the sidebar
  under "Guides".
- [x] Add implementation guide for docs-site contribution workflow. —
  `src/content/docs/guides/contributing-content.md`, linked from the
  sidebar under "Guides".
- [x] Add reference pages for the `@phcdevworks/spectre-tokens` public
  contract. — already existed (`design/tokens-reference.md`); version bumped
  from stale 2.9.0 to the actually-installed 3.1.0.
- [x] Add reference pages for the `@phcdevworks/spectre-ui` component
  surface. — already existed (`design/ui-reference.md`); version bumped from
  stale 1.9.0 to 2.4.0, and the missing layout recipe family (Container,
  Stack, Section, Grid, Sidebar, Footer) added to the recipe table and export
  lists.
- [x] Keep all published content synchronized with the upstream packages it
  documents. — corrected stale version callouts in `design/tokens.md`,
  `design/tokens-reference.md`, `design/ui.md`, `design/ui-reference.md`,
  `design/ui-astro.md`, `design/ui-astro-reference.md`; added the 6 missing
  `SpContainer`/`SpStack`/`SpSection`/`SpGrid`/`SpSidebar`/`SpFooter`
  component sections to `design/ui-astro-reference.md` (component count
  corrected from a stale 17 to the actual 23); corrected the "no client-side
  JavaScript" claim in `design/ui-astro.md` now that `SpSidebar` ships an
  inline toggle script. `design/components*.md` and `design/base*.md` were
  already accurate and needed no change. `spectre-components` and
  `spectre-base` have no new releases to document yet — recheck when they
  ship.

### P1: Navigation and Discoverability

- [x] Fix sidebar/hamburger toggle layout in `DocsLayout.astro`. —
  `align="stretch"` on the outer `SpStack` row was already present (landed in
  an earlier "Refactor docs sidebar and container width" commit). The
  remaining real defect: `SpSidebar` always renders its hamburger toggle
  button, but this layout has no responsive collapse behavior and the
  sidebar is always visible — so the hamburger was dead, clickable-looking UI
  with no effect. Suppressed it via `<Fragment slot="toggle-icon" />` passed
  to `SpSidebar`, which the component already supports for exactly this case
  (confirmed empty `<button>` in build output). The toggle/backdrop
  infrastructure stays in the DOM (harmless) for if/when responsive collapse
  is implemented.
- [x] Add a sidebar or top-level navigation structure that scales with
  content growth. — added a "Guides" section to the sidebar in
  `DocsLayout.astro` for the new P0 implementation guides; existing
  per-package Overview/Reference pattern reused, no new structure needed yet.
- [ ] Evaluate search or filter options supported cleanly by Astro or
  Cloudflare.
  - **Recommendation:** [Pagefind](https://pagefind.app/) is the best fit —
    it's a static-search-index generator built for static-site generators,
    requires no server/API (works on Cloudflare's static asset hosting as
    deployed here), indexes the built `dist/` output directly via a
    post-build step, and has an official Astro integration
    (`astro-pagefind`). Algolia DocSearch is the other common choice for docs
    sites but requires an external hosted index and an application process —
    overkill for current content volume and adds an external dependency this
    site doesn't otherwise have.
  - **Recommended trigger to implement, not now:** current page count (15)
    doesn't yet justify a search UI; revisit once Phase 2 P0 content volume
    grows enough that browsing the sidebar alone becomes slow (rule of thumb:
    once any one "Design System" or "Guides" section sidebar list exceeds
    ~15-20 links, or once search becomes a real user request).
  - This is an evaluation deliverable, not an implementation task — no code
    added this pass.
- [x] Keep navigation aligned with the route structure documented in
  `CLAUDE.md`. — `CLAUDE.md` documents `src/pages/` generically (route-level
  Astro pages) rather than enumerating specific routes; the new
  collection-driven `/guides/*` routes fit that existing description without
  requiring a `CLAUDE.md` change.
- [ ] Sidebar needs full-height (no gap below a short nav list), visually
  distinguished section headers (Tokens, UI, Guides, etc. read as plain text
  today, no different from a link), and proper indentation for parent/child
  links (e.g. "Overview"/"Reference" under a package name currently sit at
  the same indent as the package label).
  - **Unblocked on `project-design/spectre-ui`** (as of `spectre-ui` 2.10.0,
    installed here) — `getSidebarHeaderClasses()` now exists and
    `getSidebarLinkClasses` has a `level` option (`SidebarLinkLevel` type
    exported), confirmed in the installed package's `dist/index.d.ts`. Still
    unclear whether the `.sp-sidebar` docked-height fix landed alongside it —
    verify against `spectre-ui/CHANGELOG.md` before relying on it.
  - **Still blocked on upstream `project-design/spectre-ui-astro`** — even at
    3.7.0 (installed here), `SpSidebar.astro` does not call
    `getSidebarHeaderClasses()` or accept/thread a `level` prop (confirmed by
    reading the installed component source). `spectre-ui-astro/ROADMAP.md`
    currently claims "no next implementation phase scoped," so this gap needs
    to be flagged upstream (reopen or add a new phase) before it can close.
  - **This repo's work, once unblocked:** bump
    `@phcdevworks/spectre-ui`/`@phcdevworks/spectre-ui-astro` dependency
    ranges, then update the sidebar nav groups in `DocsLayout.astro` (Getting
    Started, Design System, Guides, and the per-package Tokens/UI/UI
    Astro/Components/Base sections) to use the new header classes for group
    labels and `level: 'child'` for the Overview/Reference links nested under
    each package.
  - Do not attempt a local-CSS workaround in this repo for any part of this —
    header/indent styling and full-height sidebar sizing belong in the
    upstream recipe contract, not here.

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

## Requested by Downstream

None yet.
