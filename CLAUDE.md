# CLAUDE.md - Spectre Docs

## Verified TODO Completion Workflow

For every TODO item Claude Code completes, use this sequence in the same change:

1. Keep the item in `TODO.md` while implementation or verification is in progress.
2. Confirm every acceptance criterion is met and the repository's required tests and validation gate pass.
3. Only after verification passes, remove the completed item from `TODO.md` immediately; do not leave it active or checked off.
4. Update `CHANGELOG.md` under `[Unreleased]` as usual, update the applicable `ROADMAP.md` shipped/status table and phase text, and update every other affected status or dependency reference.

If implementation is incomplete or any required check fails, keep the TODO item open and do not describe the work as shipped.

## Project Identity

**Repository:** `docs-phcdevworks-com`
**Product:** Spectre
**Maintainer:** PHCDevworks
**Primary AI developer:** Claude Code

`docs-phcdevworks-com` is the Astro documentation site for the Spectre
ecosystem. It owns the public documentation experience, repository docs, and
project-level configuration for the docs site.

This file is the primary working guide for Claude Code in this repository. Read
`AGENTS.md` first for the shared agent roster, authority map, and coordination
policy, then use this file for implementation direction.

The site was scaffolded from the `@phcdevworks/spectre-init` `astro` template
and carries an app-level [spectre.manifest.json](spectre.manifest.json)
validated by `@phcdevworks/spectre-manifest`.

## Project Structure

| Path                    | Responsibility                                             |
| ----------------------- | ---------------------------------------------------------- |
| `src/pages/`            | Route-level Astro pages for the docs experience            |
| `src/layouts/`          | Page layouts; `BaseLayout.astro` imports `spectre-ui` CSS  |
| `astro.config.ts`       | Astro configuration (starter default, no adapter yet)      |
| `spectre.manifest.json` | App manifest describing this site's Spectre dependencies   |
| `eslint.config.ts`      | TypeScript-ESLint rules — ESLint is not installed yet      |
| `tsconfig.json`         | Extends `astro/tsconfigs/strict`                           |
| `.codex/`               | Codex release and change-watch playbooks                   |

## Development Workflow

```bash
npm install
npm run dev
npm run build
```

Use `npm run check` as the standard validation gate before handoff — it runs
the production build and then `spectre-manifest-validate` against
`spectre.manifest.json`. `npm run preview` serves the built site locally.

## Standard Procedure

1. Confirm the task does not cross a human approval boundary in
   [AGENTS.md](AGENTS.md).
2. Read the installed Spectre manifest
   (`node_modules/@phcdevworks/spectre-manifest/spectre.manifest.json`) and the
   relevant `spectre-ui-astro` component contract before writing markup.
3. Inspect the relevant page or layout fully before editing.
4. Follow the Spectre-First Building order in [AGENTS.md](AGENTS.md); prefer
   component APIs and shipped classes, and remove any local code they
   supersede.
5. Implement the smallest correct change.
6. Run `npm run check`.
7. State whether a rendered-page review is still needed for the touched pages.
8. Hand off files changed, validation results, and remaining risk.

## The One Rule That Overrides Everything

The site owns the docs content; Spectre owns the system. If a change needs a
token, recipe, or component that the published packages do not provide, stop
and request it upstream instead of solving it here.

## Working Rules

- Keep changes focused and easy to review.
- Keep Spectre and PHCDevworks naming consistent.
- Treat documentation accuracy as product behavior.
- Keep contributor-facing docs synchronized with actual scripts and tooling.
- Do not introduce broad rewrites for small documentation tasks.
- Do not add dependencies unless the docs site genuinely needs them.
- Preserve shared editor and workspace settings; avoid personal preferences.
- Keep Astro and deployment configuration changes explicit and scoped.
- Keep `spectre.manifest.json` in sync with `package.json` whenever an
  `@phcdevworks/*` dependency is added, removed, or bumped.

## Content Standards

- Write concise, direct Markdown and MDX.
- Avoid references to retired branding or unrelated organizations.
- No bare URLs — use `[text](url)` link syntax in Markdown.
- Do not introduce project-specific conventions without documenting them here.

## TypeScript and ESLint

TypeScript uses `astro/tsconfigs/strict`. ESLint is configured in
`eslint.config.ts` with these enforced rules:

- `@typescript-eslint/no-explicit-any` — error; no `any` allowed
- `@typescript-eslint/no-unused-vars` — warn; prefix intentionally unused
  parameters with `_`

There is no `npm run lint` script, and ESLint and `typescript-eslint` are not
installed in the current starter, so `eslint.config.ts` is not enforced yet.
`astro check` is also not in the gate: `@astrojs/check` does not yet support
the starter's TypeScript 7. Both are tracked in [TODO.md](TODO.md).

## Documentation Ownership

This repository owns:

- Spectre documentation site content
- docs site route structure
- repository README, contributing, changelog, security, and agent guidance
- project-level editor, build, preview, and deploy configuration

This repository does not own:

- Spectre token definitions
- Spectre UI component source
- framework adapter internals outside the docs site
- company-wide website positioning for `www-phcdevworks-com`

## Git Access — Denied

**Claude Code has zero git access in this repo, as part of a companywide
policy.** Claude Code must not run `git commit`, `git push`, `git tag`, or
any other git command — read-only or mutating — here. This supersedes any
prior commit/push/tag grant described in this repo's `AGENTS.md`. OpenAI
Codex now executes all git operations for this repo; see `AGENTS.md` and
`CODEX.md`.

When work is ready, Claude Code stops short of any git command and hands off
to Codex (or Bradley Potts) with a summary of files changed and validation
performed (`npm run check` when practical). This sharpens the existing
handoff chain below — Claude Code was never the one committing here, and now
that boundary is explicit and absolute.

## Handoff Expectations

Before handing work to Codex or Bradley:

- summarize what changed
- run `npm run check` when practical
- call out broken links, skipped checks, or unresolved risks
- update `CHANGELOG.md` for release-relevant documentation or configuration
  changes
- keep any release-candidate tracking in `.codex/change-watch.md` when Codex is
  involved

Handoff chain: Claude Code → Codex review, commit, and push → Bradley Potts
retains final authority.

## Coordination Rules

- Codex is the release gate — production changes pass through Codex review
  before reaching Bradley.
- Bradley Potts has final authority for all commits, merges, tags, and
  production deployments.
- ChatGPT provides strategy and external review; it does not implement or
  release.
- Jules output must stay small, automated, and easy to accept or revert.
- If agent guidance conflicts, prefer `AGENTS.md` for shared policy and this
  file for implementation direction.
- Escalate unclear production risk to Bradley instead of hiding it in a diff.
