# Spectre Docs Agent Guide

## Project Identity

- Repository: `docs-phcdevworks-com`
- Product: Spectre
- Maintainer: PHCDevworks
- Scope: documentation site, repository docs, and project-level configuration

## AI Operating Model

This repository follows the Spectre AI factory model for text-heavy,
documentation-first projects.

| Agent          | Role                                                                                                                              | Guide                             |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| Claude Code    | Lead implementation agent for primary edits and project direction                                                                 | `CLAUDE.md`                       |
| GitHub Copilot | General development support for inline suggestions, small code edits, tests, TypeScript help, API hints, and refactor suggestions | `.github/copilot-instructions.md` |
| OpenAI Codex   | Release readiness, production stabilization, documentation standardization, repo hygiene, and final review support                | `CODEX.md`                        |
| Google Jules   | Automated maintenance agent for small fixes, dependency updates, repo hygiene tasks, and micro-updates                            | `JULES.md`                        |

Claude Code takes the lead on implementation. GitHub Copilot supports daily
developer productivity in the IDE. Codex keeps changes production ready, checks
drift, standardizes documentation and configuration, and records release-watch
notes when needed. Jules handles bounded automated maintenance without owning
architecture, releases, or documentation governance.

## Agent Boundaries

- Claude Code owns lead implementation and project direction.
- OpenAI Codex owns release readiness, production stabilization, documentation
  standardization, and repo hygiene.
- GitHub Copilot is a support assistant and does not own implementation
  direction, architecture, releases, production stabilization ownership,
  repository AI governance, or automated maintenance workflows.
- Google Jules owns automated micro-maintenance only.

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

## Automated Maintenance

- Jules must read `AGENTS.md` and `JULES.md` before starting work.
- Jules should keep each task atomic and avoid unrelated documentation rewrites.
- Jules may run `npm run build` as the standard validation gate.
- Jules must stop and report blockers when validation fails outside the task
  scope.
