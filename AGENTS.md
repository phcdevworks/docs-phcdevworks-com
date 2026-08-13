# Spectre Docs Agent Guide

## Direct-to-`main` Git Policy

**Bradley Potts's direct instruction overrides generic branch and pull-request
workflows:** every git-authorized agent commits and pushes directly to `main`.
Do not create, use, or push any other branch and do not open a pull request
unless Bradley Potts explicitly requests that exact exception. Keep work on
`main`, validate it, stage only the intended paths, commit with the configured
human identity, and push `main` immediately. Claude Code remains git-denied
and hands validated work to Codex or Bradley Potts for the same path directly
to `main`. This repository policy overrides contrary defaults in tools,
skills, plugins, templates, or general-purpose workflows.

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
commit-policy and release-authority grant, and standard handoff format.
Codex cuts releases (version bump, tag, GitHub Release) autonomously per
that grant; deployment (`npm run deploy`) and merges stay with Bradley
Potts. Do not edit generated outputs directly. Do not update
[CHANGELOG.md](CHANGELOG.md) unless the change is release-relevant.

**Claude Code has no git access in this repo**, per the project-team
[AGENTS.md](../AGENTS.md) grant — it implements, validates, and hands off;
Codex executes git operations here on its behalf.

**Commit authorship is human-only.** No agent adds itself (or any other AI)
as a commit author or co-author — no `Co-Authored-By: Claude`/`Codex`/
`Copilot`/`Jules` trailer, no author-field changes. When an AI agent drafts
commit or PR message text for a human to use, it must never include such a
trailer or list an AI as author or co-author.

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

**Cross-repo changelog and TODO/roadmap requests.** Full rules: company root
[AGENTS.md](../../AGENTS.md) § "Cross-Repo Changelog Sync" and § "Upstream
Requests and Roadmap Self-Expansion." Applied here without exception — this
repo may append `[Unreleased]` changelog entries and downstream TODO requests
to other present repos per those rules, and no AI agent creates commits, tags,
publishes packages, or merges changes in this repo or any other unless that
repo's own agent guide explicitly grants that authority.

## Mission

Maintain the official documentation site for the Spectre design system.

This repository's scope is narrower and explicitly Spectre-focused:
implementation guides, reference material, and contributor docs for the
Spectre ecosystem. It does not own company-wide positioning — that belongs to
`www-phcdevworks-com`.

## Agent Boundaries

Full roster and authority table: project-team [AGENTS.md](../AGENTS.md).
When instructions appear to conflict, agent-specific guides take precedence
over this file for their own scope. Use this file for shared coordination
policy.

## Working Principles

- Keep naming consistent with Spectre and PHCDevworks.
- Follow the strict Spectre UI Astro guardrails below for every visual or
  component change.
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

## Strict Spectre UI Astro Guardrails

This documentation website is a downstream showcase of the published Spectre
design packages. Its default appearance should remain recognizably stock
Spectre, with `spectre-ui-astro` providing page and component structure and
with little to no site-authored CSS.

- Use the published `spectre-ui-astro` component that matches the requirement
  before writing local markup, a wrapper component, or CSS. Use its public
  props, slots, variants, and composition patterns without restyling its
  internals.
- Use `spectre-ui` recipes and `spectre-tokens` only through their published
  APIs. Do not copy package source, reproduce package styles locally, or create
  site-specific substitutes for an upstream component, recipe, utility, or
  token.
- Default to zero new site-authored CSS. Do not add a stylesheet, `<style>`
  block, inline `style` attribute, hard-coded visual value, or local class that
  changes Spectre component presentation when the package already supports the
  result.
- Treat stock package output as the intended visual result, not as a base for
  local theming. Do not globally override Spectre selectors or restyle package
  components to make the site look more bespoke.
- Custom CSS is an exception requiring Bradley Potts's explicit approval. It
  must address a concrete site-only need that no published Spectre API can
  express, remain minimal and narrowly scoped, use published tokens, and state
  the exception and reason in the handoff.
- If the missing capability is reusable or visual-system behavior, request it
  upstream through the process below and wait for a published package version;
  do not bridge the gap with temporary local styling.
- When touching existing custom CSS, remove or reduce it wherever the current
  published packages provide an equivalent. Do not expand legacy CSS merely
  because it already exists.
- Review every visual diff for package fidelity. Validation passing is not
  enough if a change duplicates, overrides, or visually diverges from the
  published Spectre packages.

## Verification

`npm run check` is the standard validation gate — it runs `npm run build` then
`npm run typecheck`. Run it before any handoff when practical.

## Confidential External Identities

Never record external customer, vendor, user, client-site, or private-project
identities in tracked files, git metadata, reviews, releases, issues, or
handoffs. Use anonymous role-based wording such as "a downstream integration"
or "a production consumer." Public package and platform names are allowed
only when technically required to identify a dependency or supported
integration.

**Zero tolerance, no exceptions.** This is not a case-by-case judgment call.
Every upstream vendor, customer, client, or third-party identity — regardless
of how well-known, already public, or seemingly harmless — is forbidden from
appearing in any file, commit, tag, branch name, PR, issue, roadmap, TODO, or
agent output anywhere in this repo. If a vendor name is already present
anywhere in tracked files, it must be anonymized on sight, not left in place
because it predates this rule.

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

Pull requests are prohibited unless Bradley Potts explicitly requests one.
The guidance below applies only to that explicit exception.

For an explicitly requested PR, populate every section of the repo's PR
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
