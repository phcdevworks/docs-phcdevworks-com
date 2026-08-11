# TODO.md

# Spectre Docs Execution Todo

Phase 1 (Foundation) and Phase 2 P0 (Content Expansion) are complete — see
[ROADMAP.md](ROADMAP.md) for the delivered-phase summary and
[CHANGELOG.md](CHANGELOG.md) for release-by-release detail. This file only
tracks what's still open.

## Phase 2 P1: Navigation and Discoverability

- [ ] Sidebar still needs full-height sizing (no gap below a short nav list)
  in the docked (desktop) layout. `.sp-sidebar` in `spectre-ui` is
  `height: 100%` with fixed positioning for the off-canvas/mobile case; the
  docked case inside `SpStack basis="sidebar"` is a separate layout question.
  Do not attempt a local-CSS workaround in this repo — raise with
  `project-design/spectre-ui` if this is still visually wrong.
- [ ] Evaluate search or filter options supported cleanly by Astro or
  Cloudflare.
  - **Recommendation:** [Pagefind](https://pagefind.app/) is the best fit —
    static-search-index generator built for static-site generators, no
    server/API required (works on Cloudflare's static asset hosting as
    deployed here), indexes the built `dist/` output via a post-build step,
    and has an official Astro integration (`astro-pagefind`).
  - **Trigger to implement, not now:** revisit once any one "Design System"
    or "Guides" sidebar section exceeds ~15-20 links, or once search becomes
    a real user request. Current page count doesn't yet justify it.

## Phase 2 P2: Ecosystem Alignment Automation

Not started. Requires P0 content to exist first (it does) before this phase
is meaningful to open.

- [ ] Define a lightweight docs-update checklist triggered by upstream
  package releases.
- [ ] Evaluate a GitHub Actions workflow that flags docs content for review
  when `spectre-tokens` or `spectre-ui` publish.
- [ ] Document the update procedure in `CONTRIBUTING.md`.

## Explicitly Out of Scope

- Do not define token contracts here.
- Do not implement upstream UI components here.
- Do not add company-wide website positioning here.
- Do not expand content speculatively without proven consumer demand.

## Requested by Downstream

None yet.
