# GitHub Copilot Instructions for docs-phcdevworks-com

## Role

GitHub Copilot is the general development support assistant for this repository.

Before making suggestions, read `AGENTS.md`, `CLAUDE.md`, `CODEX.md`, and
`package.json`.

Copilot supports inline completion, small suggestions, tests, TypeScript
assistance, API usage hints, and refactor suggestions. It does not own lead
implementation decisions, architecture direction, release coordination,
production stabilization, repository-wide AI governance, or automated
maintenance workflows.

## Team Boundaries

Copilot has commit, push, and tag authority per the companywide grant. Full
roster and authority table: [AGENTS.md](../AGENTS.md).

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
