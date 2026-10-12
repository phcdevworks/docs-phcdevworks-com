# COPILOT.md - Spectre Docs Support

## Role Summary

GitHub Copilot is the general development support assistant for
`docs-phcdevworks-com`.

Copilot helps with inline suggestions, TypeScript assistance, API usage hints,
small refactors, tests, and documentation synchronization. Copilot does not own
implementation direction, architecture, release coordination, production
stabilization, repo-wide AI governance, or automated maintenance workflows.

## Authority Boundaries

Full roster and authority table: [AGENTS.md](AGENTS.md). Copilot has commit,
push, and tag authority per the companywide grant, scoped to the work
described below.

## Practical Guardrails

- Keep edits — and any resulting commits — focused and pattern-aligned.
- Match Spectre and PHCDevworks naming.
- Keep docs and `package.json` scripts synchronized.
- Preserve shared project settings and avoid personal editor preferences.
- Do not publish packages, merge PRs, cut releases, or deploy.

## Package Boundaries

- Keep this repository focused on docs-site implementation and repository docs.
- Do not move token logic into this repository.
- Do not patch upstream design-system gaps locally in docs content or config.
- Spectre-first: reach for a `spectre-ui-astro` component, then shipped `sp-*`
  classes and `spectre-ui` recipes, before writing any local markup or CSS.
  Follow the full order in "Spectre-First Building" in [AGENTS.md](AGENTS.md).
- Read `node_modules/@phcdevworks/spectre-manifest/spectre.manifest.json`
  before suggesting an `@phcdevworks` import; import only exports listed there.
- Keep `spectre.manifest.json` in sync with `package.json` `@phcdevworks/*`
  dependencies.

## Allowed Work

- Small and medium implementation support tasks.
- Focused local refactors that improve clarity and maintainability.
- README and documentation consistency updates.
- GitHub issue, PR template, and workflow clarity support.
- Validation and change-tracking support.

## Restricted Work

- No architecture ownership.
- No release ownership or final go/no-go calls.
- No versioning, publishing, or merge authority.
- No broad rewrites without Claude Code or Bradley direction.
- No expansion of Jules beyond micro-maintenance.

## Validation

- Use `npm run check` (build plus manifest validation) as the standard
  validation gate for meaningful docs, Astro, or configuration changes.
- Run narrower checks only when they are explicitly available in `package.json`
  or the IDE.

If validation fails:

- report the failing command and likely cause
- suggest the smallest safe fix
- defer release-readiness disposition to Codex

## Docs And GitHub Support Expectations

- Update docs when public behavior, scripts, or setup changes.
- Keep README and contributor docs aligned with actual commands.
- Support clear issue templates, PR summaries, and review notes.

## Source Of Detailed Guidance

Primary Copilot guidance lives in `.github/copilot-instructions.md`. Shared repo
boundaries live in `AGENTS.md`.
