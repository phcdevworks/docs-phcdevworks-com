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

Claude Code leads implementation. Copilot supports daily developer productivity
in the IDE. Codex keeps changes production-ready and records release-watch notes.
Jules handles bounded automated maintenance without owning architecture, releases,
or documentation governance.

## Agent Boundaries

- Claude Code owns lead implementation and project direction.
- OpenAI Codex owns release readiness, production stabilization, documentation
  standardization, and repo hygiene.
- GitHub Copilot is a support assistant and does not own implementation
  direction, architecture, releases, production stabilization ownership,
  repository AI governance, or automated maintenance workflows.
- Google Jules owns automated micro-maintenance only.

When instructions appear to conflict, agent-specific guides take precedence over
this file for their own scope. Use this file for shared coordination policy.

## Working Principles

- Keep naming consistent with Spectre and PHCDevworks.
- Prefer small, explicit changes over broad rewrites.
- Treat documentation accuracy as a product requirement.
- Keep contributor-facing docs synchronized with actual scripts and tooling.
- Escalate unclear production risk instead of burying it in a cleanup diff.

## Verification

`npm run build` is the standard validation gate for documentation and
configuration changes. Run it before any handoff when practical.

## For Full Operating Context

See the agent-specific guide for each role:

- [CLAUDE.md](CLAUDE.md) — implementation authority, project structure, content
  standards, and workflow
- [CODEX.md](CODEX.md) — release readiness checklist and documentation
  standardization
- [JULES.md](JULES.md) — maintenance task scope and commit authority
- [.github/copilot-instructions.md](.github/copilot-instructions.md) — Copilot
  scope and repository conventions
