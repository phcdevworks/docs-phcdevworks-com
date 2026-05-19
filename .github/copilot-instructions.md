# GitHub Copilot Instructions for docs-phcdevworks-com

## Role

GitHub Copilot is the general development support assistant for this repository.

Before making suggestions, read `AGENTS.md`, `CLAUDE.md`, `CODEX.md`, and
`package.json`.

Copilot supports:

- inline code completion
- small code suggestions
- test suggestions
- TypeScript assistance
- API usage hints
- refactor suggestions
- pattern-aware implementation help
- developer productivity inside the IDE

Copilot does not own:

- lead implementation decisions
- architecture direction
- release coordination
- production stabilization ownership
- repository-wide AI governance
- automated maintenance workflows

## Team Boundaries

- Claude Code is the lead developer and primary implementation owner (`CLAUDE.md`).
- OpenAI Codex owns documentation, releases, production stabilization, repo hygiene, and config standardization (`CODEX.md`).
- Google Jules handles automated maintenance for small fixes, dependency updates, and micro-updates (`JULES.md`).
- Repository-level Copilot boundaries live in `COPILOT.md`.
- Use `AGENTS.md` as the shared policy source when guidance overlaps.

## Repository Conventions

- Keep changes focused, explicit, and easy to review.
- Match existing Spectre and PHCDevworks naming.
- Prefer direct, concise Markdown/MDX wording.
- Keep docs and scripts aligned with `package.json` commands.
- Preserve shared project settings in `.editorconfig`, `.gitattributes`, and `.vscode/settings.json`.
- Avoid personal editor preferences, broad rewrites, and unrelated churn.
- Follow existing code patterns and package boundaries.
- Use Spectre tokens or Spectre UI recipes where relevant instead of local visual primitives.

## Code And Build Expectations

- Follow TypeScript strict configuration in `tsconfig.json`.
- Avoid `any` unless explicitly approved (`@typescript-eslint/no-explicit-any`: error).
- Use `_` prefix for intentionally unused parameters.
- Keep formatting consistent with existing repo style (2 spaces, LF line endings).
- Run `npm run build` for meaningful documentation or configuration changes when practical.
- Update docs and tests when public behavior changes.

## Scope Reminders

- This repository owns the Spectre docs site, repository documentation, and project-level docs-site configuration.
- Do not treat this repository as the source of truth for Spectre tokens or Spectre UI implementation internals.
