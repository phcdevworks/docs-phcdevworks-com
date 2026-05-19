# CODEX.md - Spectre Docs

## Project Identity

**Repository:** `docs-phcdevworks-com`
**Product:** Spectre
**Maintainer:** PHCDevworks
**Codex role:** release readiness, production stabilization, documentation
standardization, repo hygiene, and final review support

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

## Primary Responsibilities

### Release Readiness

- Run `npm run build` before handoff when practical.
- Review changed Markdown and MDX for broken internal links.
- Confirm scripts, README instructions, and contributor docs stay aligned.
- Check that deployment configuration remains project-level and intentional.
- Record release notes or handoff findings in `.codex/change-watch.md` when a
  release candidate needs tracking.

### Documentation Standardization

- Keep `README.md`, `CONTRIBUTING.md`, `CHANGELOG.md`, `SECURITY.md`, and
  `AGENTS.md` aligned with the actual repository workflow.
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

## Collaboration Notes

- Claude Code owns implementation leadership.
- Codex owns release confidence and keeps the production path tidy.
- If Claude Code and Codex guidance conflict, escalate the conflict in the
  handoff notes instead of silently choosing a risky path.
- Human review remains the final authority for commits, releases, and
  production deployment.

