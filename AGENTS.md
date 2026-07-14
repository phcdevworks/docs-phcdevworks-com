# Spectre Docs Agent Guide

## Repository Snapshot

| Field | Value |
| --- | --- |
| Project team | `project-web` |
| Repository role | Spectre documentation site |
| Package/artifact | `docs-phcdevworks-com` |
| Validation gate | `npm run check` |

## Standard Authority Model and Handoff

See the project-team [AGENTS.md](../AGENTS.md) "AI Operating Model" and
"Handoff Requirements" sections for the full agent roster, authority table,
and standard handoff format. Bradley Potts holds final authority for commits,
merges, tags, publishing, and releases. Do not edit generated outputs
directly. Do not update [CHANGELOG.md](CHANGELOG.md) unless the change is
release-relevant.

## Project Identity

- Repository: `docs-phcdevworks-com`
- Product: Spectre
- Maintainer: PHCDevworks
- Scope: documentation site, repository docs, and project-level configuration

## Cross-Repo Access

This repo may be worked on standalone or alongside any combination of other
PHCDevworks repos — do not assume the company root or sibling project areas
are present. The following rules are self-contained and apply whether or not
that broader context is available.

**File access.** An agent working in this repo has full read/write access to
every file in this repo. When this repo is present alongside other
PHCDevworks repos (company root or sibling `project-*` areas), the same full
read/write access extends to those repos too — there is no per-repo access
restriction anywhere in this workspace. What differs repo-to-repo is not
*access*, it's *editorial ownership*: each repo's own `CLAUDE.md`/`AGENTS.md`
still governs what changes make sense there (design-token authority, layer
boundaries, etc.) — being able to open and edit a file is not the same as it
being this repo's job to change it.

**Cross-repo changelog sync.** When a change in this repo has direct
downstream or upstream impact on another present repo (e.g. a breaking token
rename, an API contract change), an agent may append a `CHANGELOG.md
[Unreleased]` entry directly into that other repo's own changelog — not just
leave a note asking its owner to add it. Rules:

1. Only append new `[Unreleased]` entries — never edit, reorder, or remove
   another repo's existing changelog entries, version headers, or release
   history.
2. Every cross-repo entry must be self-contained and attributed: which repo
   caused it and why, what changed from the affected repo's perspective, and
   the date added.
3. Add it in the same change that produced the impact, not a later session.
4. This never grants release authority — cutting a release, bumping a version
   header, or publishing a package stays gated by that repo's own release
   process and the human owner's final sign-off.

**TODO/roadmap requests.** When work here surfaces a need that belongs to
another repo, an agent may append the request directly to that repo's own
`TODO.md` under a clearly labeled "Requested by Downstream" section (create
it if absent), stating which repo is requesting it, why, the date, and a
link back if the other repo's `TODO.md`/`ROADMAP.md` is reachable.

No AI agent creates commits, tags, publishes packages, or merges changes in
this repo or any other unless that repo's own agent guide explicitly grants
that authority or the human owner has explicitly requested the action.

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
