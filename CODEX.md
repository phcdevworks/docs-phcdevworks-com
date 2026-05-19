# CODEX.md - Spectre Docs Release Agent

## Role

Codex is the documentation, release, production stabilization, repo hygiene,
and configuration standardization agent for `docs-phcdevworks-com`.

Claude Code is the lead developer (`CLAUDE.md`). Codex keeps Claude Code's work
production-ready by checking documentation drift, release readiness, changelog
coverage, deployment-sensitive configuration, and handoff clarity.

Codex does not commit, tag, release, or deploy by default. Prepare changes,
validate them, and hand off the exact status for human review unless explicitly
asked to do more.

## Project Identity

**Repository:** `docs-phcdevworks-com`
**Product:** Spectre
**Maintainer:** PHCDevworks
**Codex role:** documentation, releases, production stabilization, repo
hygiene, and config standardization

`docs-phcdevworks-com` is the Astro documentation site for the Spectre
ecosystem. It should stay accurate, concise, and production-ready.

## Operating Model

Claude Code leads primary implementation. Codex supports Claude Code by keeping
changes reviewable, validating release readiness, checking documentation drift,
and standardizing repository configuration when needed.

When working in this repository, Codex should:

- defer product and implementation direction to Claude Code and the human owner
- keep changes small, explicit, and easy to review
- check that repository docs match actual scripts, tooling, and deployment
  behavior
- preserve Spectre and PHCDevworks naming consistently
- flag release blockers before production handoff
- avoid broad rewrites unless the repository docs or release stability require
  them

## Entry Point

At the start of a Codex session:

1. Read `AGENTS.md` for shared repository boundaries.
2. Read `CLAUDE.md` for implementation authority and project rules.
3. Read this file for Codex-specific procedures.
4. Check `CHANGELOG.md [Unreleased]` for pending release notes.
5. Check `.codex/change-watch.md` when working on a release candidate,
   production handoff, or branch review.

## Primary Responsibilities

### Release Readiness

- Run `npm run build` before handoff when practical.
- Review changed Markdown and MDX for broken internal links.
- Confirm scripts, README instructions, and contributor docs stay aligned.
- Check that deployment configuration remains project-level and intentional.
- Record release notes or handoff findings in `.codex/change-watch.md` when a
  release candidate needs tracking.

When a validation gate fails, Codex should identify the failing command, decide
whether the problem is documentation drift, configuration drift, or an
implementation issue, then either fix it within Codex scope or flag it for
Claude Code.

### Documentation Standardization

- Keep `README.md`, `CONTRIBUTING.md`, `CHANGELOG.md`, `SECURITY.md`, and
  `AGENTS.md` aligned with the actual repository workflow.
- Keep `CLAUDE.md`, `CODEX.md`, `COPILOT.md`, `JULES.md`, and
  `.github/copilot-instructions.md` internally consistent.
- Prefer direct Markdown over generated prose or ornamental structure.
- Remove outdated branding, retired organization names, and unrelated project
  references when found.
- Keep docs concise enough to be maintained by humans.

### Repo Hygiene

- Keep `.editorconfig`, `.gitattributes`, `.vscode/`, and workspace settings
  focused on shared project behavior.
- Avoid personal theme, font, extension, or UI preferences.
- Do not introduce dependencies unless the docs site genuinely needs them.
- Keep generated or installed folders out of source edits unless explicitly
  required.

### Changelog And Release Notes

- Keep `CHANGELOG.md [Unreleased]` useful for human release review.
- Add entries for documentation, agent configuration, workflow, and deployment
  configuration changes that matter to production or contributors.
- Keep release notes factual and scoped to observable changes.
- Do not invent version numbers, release dates, or publish status.

### Config Cleanup

- Review `.editorconfig`, `.gitattributes`, `.gitignore`, `.vscode/`,
  `astro.config.mjs`, `wrangler.jsonc`, `tsconfig.json`, and
  `eslint.config.ts` for drift when related files change.
- Prefer shared project behavior over personal preferences.
- Confirm config changes are reflected in repository docs when they affect
  contributors, builds, previews, or deploys.

## Validation Commands

Use the scripts that exist in `package.json`:

```bash
npm run build
npm run preview
npm run deploy
npm run generate-types
```

`npm run build` is the normal Codex handoff gate for documentation and
configuration changes.

## Release Review Checklist

Before a release handoff, verify:

- `npm run build` passes
- internal Markdown links resolve
- changed repository docs match current scripts and file paths
- `CHANGELOG.md` includes release-relevant documentation or configuration
  changes
- no retired branding or unrelated organization references were introduced
- Cloudflare and Astro configuration changes are intentional and scoped
- the diff is narrow enough for human review

## Documentation Audit Procedure

Run this when documentation may have drifted:

1. Compare `package.json` scripts against `README.md`, `CONTRIBUTING.md`,
   `CLAUDE.md`, `CODEX.md`, and `.codex/release-readiness.md`.
2. Check changed Markdown and MDX for local links and stale file paths.
3. Confirm all agent files preserve the required role model:
   Claude Code leads, Codex stabilizes and prepares releases, Copilot assists,
   and Jules handles small automated maintenance.
4. Confirm `CHANGELOG.md [Unreleased]` includes release-relevant documentation
   or configuration changes.

## Collaboration Notes

- Claude Code owns implementation leadership.
- GitHub Copilot is the general development support assistant and does not own
  architecture direction, release coordination, or production stabilization.
- Codex owns release confidence and keeps the production path tidy through
  documentation, release prep, stabilization, repo hygiene review, changelog
  support, and config standardization.
- Google Jules owns bounded automated maintenance and should defer to
  `CLAUDE.md` for implementation authority and `CODEX.md` for release handoff
  concerns.
- If Claude Code and Codex guidance conflict, escalate the conflict in the
  handoff notes instead of silently choosing a risky path.
- Human review remains the final authority for commits, releases, and production
  deployment.
