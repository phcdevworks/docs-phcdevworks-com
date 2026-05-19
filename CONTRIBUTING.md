# Contributing to Spectre Docs

Thanks for contributing to `docs-phcdevworks-com`.

## Principles

- Keep changes focused and easy to review.
- Match existing Spectre and PHCDevworks naming.
- Update repository docs when scripts, workflow, or ownership language changes.
- Prefer project-level configuration over machine-wide changes.

## Local Workflow

1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev`
3. Validate before handoff: `npm run check`

## Troubleshooting

- **Build errors after pulling** — run `npm install` to sync dependencies before
  building; `node_modules/` and `dist/` are not committed.
- **`preview` or `deploy` fails** — requires Wrangler authentication; run
  `wrangler login` and confirm Cloudflare project access.
- **TypeScript errors in `.astro` files** — confirm your editor uses the Astro
  VS Code extension. TypeScript is checked during `astro build`.

## Pull Request Expectations

- Explain the intent of the change clearly.
- Keep documentation, config, and scripts in sync.
- Do not include unrelated formatting churn.
- Call out follow-up work if something is intentionally deferred.

## Scope Guidance

- Use this repository for Spectre documentation and repo-level maintenance.
- Do not introduce retired branding or outdated ownership language.
- Keep project settings cohesive with the Spectre website repository when the
  workflow is shared.

## AI Guidance Files

- `AGENTS.md` defines shared multi-agent boundaries for this repository.
- `CLAUDE.md` is the lead implementation guide.
- `CODEX.md` covers release readiness, production stabilization, and repo
  hygiene review.
- `COPILOT.md` defines repository-level Copilot support boundaries.
- `.github/copilot-instructions.md` keeps GitHub Copilot focused on support work
  inside the IDE.
- `JULES.md` defines automated micro-maintenance boundaries.
