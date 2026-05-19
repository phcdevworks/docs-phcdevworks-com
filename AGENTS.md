# Spectre Docs Agent Guide

## Project Identity

- Repository: `docs-phcdevworks-com`
- Product: Spectre
- Maintainer: PHCDevworks
- Scope: documentation site, repository docs, and project-level configuration

## AI Operating Model

This repository follows the Spectre AI factory model for text-heavy,
documentation-first projects.

| Agent | Role | Guide |
| --- | --- | --- |
| Claude Code | Lead implementation agent for primary edits and project direction | `CLAUDE.md` when present |
| OpenAI Codex | Release readiness, production stabilization, documentation standardization, repo hygiene, and final review support | `CODEX.md` |

Claude Code takes the lead on implementation. Codex keeps changes production
ready, checks drift, standardizes documentation and configuration, and records
release-watch notes when needed.

## Working Principles

- Keep naming consistent with Spectre and PHCDevworks.
- Prefer small, explicit changes over broad rewrites.
- Treat documentation accuracy as a product requirement.
- Keep repository-level configuration aligned with the website repository where
  it makes sense to share conventions.

## Content Standards

- Write concise, direct Markdown and MDX.
- Keep contributor-facing docs synchronized with actual scripts and tooling.
- Avoid references to retired branding or unrelated organizations.
- Do not introduce project-specific conventions here unless they are documented
  in the repository docs.

## Configuration Standards

- Preserve project-level settings only.
- Favor shared editor behavior over personal theme, font, or UI preferences.
- Keep line endings, indentation, and save behavior aligned with
  `.editorconfig`, `.gitattributes`, and the local workspace settings.

## Verification

- Run `npm run build` after documentation or config changes when practical.
- Check for broken internal links in repository Markdown before finishing.

## Release Readiness

- Use `.codex/release-readiness.md` before production handoff.
- Use `.codex/change-watch.md` for active branch or release-candidate notes.
- Keep `CHANGELOG.md` updated for release-relevant documentation and
  configuration changes.
- Escalate unclear production risks instead of burying them in broad cleanup.
