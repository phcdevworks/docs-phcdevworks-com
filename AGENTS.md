# Spectre Docs Agent Guide

## Repository Snapshot

| Field | Value |
| --- | --- |
| Project team | `project-web` |
| Repository role | Spectre documentation site |
| Package/artifact | `docs-phcdevworks-com` |
| Validation gate | `npm run check` |

## Standard Authority Model

| Agent | Role | Authority |
|-------|------|-----------|
| Claude Code | Lead implementation and validation | [CLAUDE.md](CLAUDE.md) |
| OpenAI Codex | Documentation, release readiness, stabilization, and repo hygiene | [CODEX.md](CODEX.md) |
| ChatGPT | Strategy, coordination, prompt design, and external review | Support only |
| GitHub Copilot | Development assistance | [COPILOT.md](COPILOT.md) |
| Google Jules | Bounded automated maintenance | [JULES.md](JULES.md) |

Bradley Potts holds final authority for commits, merges, tags, publishing, and
releases.

## Standard Handoff

Every AI-prepared change should report files changed, validation performed,
public behavior or contract impact, and unresolved risks. Do not edit generated
outputs directly. Do not update [CHANGELOG.md](CHANGELOG.md) unless the change
is release-relevant.

## Project Identity

- Repository: `docs-phcdevworks-com`
- Product: Spectre
- Maintainer: PHCDevworks
- Scope: documentation site, repository docs, and project-level configuration

## Mission

Maintain the official documentation site for the Spectre design system.

This repository's scope is narrower and explicitly Spectre-focused:
implementation guides, reference material, and contributor docs for the
Spectre ecosystem. It does not own company-wide positioning — that belongs to
`www-phcdevworks-com`.

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
- Keep shared project rules in `AGENTS.md`; keep agent-specific workflow details
  in the matching agent file.
- Update related agent docs together when scripts, validation gates, or
  ownership boundaries change.
- All `scripts/` tooling is TypeScript (`.ts`), run via
  `node --experimental-strip-types`; never add a new `.js`/`.mjs` script.
  Convert `scripts/screenshot.js` to `.ts` if it is touched for unrelated work.

## Verification

`npm run check` is the standard validation gate — it runs `npm run build` then
`npm run typecheck`. Run it before any handoff when practical.

## Upstream Requests and Roadmap Self-Expansion

Full directive: project-team [AGENTS.md](../AGENTS.md) "Upstream Requests and
Roadmap Self-Expansion." Applied to this repo:

- This repo's upstream is `project-design` (`spectre-tokens`, `spectre-ui`,
  `spectre-ui-astro`). If a docs page needs a token, recipe, or component that
  doesn't exist upstream, append the request to the owning `project-design`
  repo's `TODO.md` under `## Requested by Downstream`, dated, with the reason
  and a link back to this repo's own TODO.md/ROADMAP.md.
- This repo has no downstream consumer within the workspace. No `##
  Requested by Downstream` section is expected here, but keep one ready if
  that ever changes.
- This repo's own `ROADMAP.md` may be proactively expanded with new or
  reordered phases by the agent's own analysis — but never mark a phase
  delivered without `npm run check` (build) passing, and never let a
  self-expanded phase drift this repo into owning company-wide positioning —
  that belongs to `www-phcdevworks-com` (see Mission above).
- Surface any new TODO request or roadmap expansion in the handoff for Bradley
  Potts in the same change it was made, and reflect cross-repo-relevant
  changes in the project-team's own ROADMAP.md/TODO.md.

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
