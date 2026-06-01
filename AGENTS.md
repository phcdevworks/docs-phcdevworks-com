# Spectre Docs Agent Guide

## Project Identity

- Repository: `docs-phcdevworks-com`
- Product: Spectre
- Maintainer: PHCDevworks
- Scope: documentation site, repository docs, and project-level configuration

## AI Operating Model

This repository follows the Spectre AI factory model for text-heavy,
documentation-first projects.

| Role           | Agent          | Authority                                                                                                   | Guide                                              |
| -------------- | -------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| Human owner    | Bradley Potts  | Final authority — all commits, merges, tags, and production releases                                        | —                                                  |
| Lead developer | Claude Code    | Primary implementation, architecture, refactor, debugging, and project direction                             | `CLAUDE.md`                                        |
| Release safety | OpenAI Codex   | Release readiness, production stabilization, documentation, changelog, and repo hygiene                      | `CODEX.md`                                         |
| Strategy       | ChatGPT        | Strategy, coordination, and external review — does not own implementation or releases                        | —                                                  |
| Dev support    | GitHub Copilot | General development support — inline suggestions, small code edits, TypeScript, API hints, and refactors    | `COPILOT.md` and `.github/copilot-instructions.md` |
| Maintenance    | Google Jules   | Bounded automated maintenance — small fixes, dependency updates, repo hygiene, and micro-updates             | `JULES.md`                                         |

Claude Code leads implementation. Codex backstops release safety and production
readiness. Bradley Potts has final authority for every commit, merge, tag, and
production release. No AI agent commits, pushes, or releases without Bradley's
review.

## Agent Boundaries

- **Bradley Potts** holds final authority for all commits, merges, tags, and
  production deployments. No AI agent may commit, push, or release.
- **Claude Code** owns lead implementation and project direction.
- **OpenAI Codex** owns release readiness, production stabilization,
  documentation standardization, repo hygiene, and config standardization. Codex
  does not override Claude Code's implementation decisions.
- **ChatGPT** provides strategy guidance and external review. ChatGPT does not
  own implementation, releases, governance, or autonomous execution.
- **GitHub Copilot** is a development support assistant and does not own
  implementation direction, architecture, releases, production stabilization,
  repository governance, or automated maintenance.
- **Google Jules** owns automated micro-maintenance only. Jules does not own
  architecture, releases, documentation governance, or implementation decisions.

When instructions appear to conflict, agent-specific guides take precedence over
this file for their own scope. Use this file for shared coordination policy.

## Working Principles

- Keep naming consistent with Spectre and PHCDevworks.
- Prefer small, explicit changes over broad rewrites.
- Treat documentation accuracy as a product requirement.
- Keep contributor-facing docs synchronized with actual scripts and tooling.
- Escalate unclear production risk instead of burying it in a cleanup diff.

## Verification

`npm run check` is the standard validation gate — it runs `npm run build` then
`npm run typecheck`. Run it before any handoff when practical.

## Pull Request Creation

Every agent that opens a PR must populate every section of the repo's PR
template (`.github/pull_request_template.md`):

- **Summary** — one or two bullets describing what changed and why.
- **Type of Change** — check every box that applies.
- **Package Boundary Check** — confirm the change stays within docs-site scope.
- **Public API / Behavior Impact** — confirm whether public behavior changed.
- **Validation** — record the command run and its result.
- **Documentation Updated** — confirm which docs were updated or note why none
  were needed.
- **Release Impact** — flag any release-relevant changes.
- **Team Review** — indicate whether Codex review, Claude Code notes, or
  Bradley decision is needed.

Never submit a PR with an empty body or only the template headings left
unfilled.

## For Full Operating Context

See the agent-specific guide for each role:

- [CLAUDE.md](CLAUDE.md) — implementation authority, project structure, content
  standards, and workflow
- [CODEX.md](CODEX.md) — release readiness checklist and documentation
  standardization
- [COPILOT.md](COPILOT.md) — Copilot support boundaries and practical guardrails
- [JULES.md](JULES.md) — maintenance task scope and commit authority
- [.github/copilot-instructions.md](.github/copilot-instructions.md) — Copilot
  IDE-facing scope and repository conventions
