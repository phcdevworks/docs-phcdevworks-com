# Codex Release Readiness

Codex uses this checklist before a release, deploy, or production handoff for
`docs-phcdevworks-com`.

## Required Checks

- [ ] Confirm the diff is focused and reviewable.
- [ ] Confirm Spectre and PHCDevworks naming is consistent.
- [ ] Confirm changed repository docs match current scripts and tooling.
- [ ] Confirm changelog or release-note updates cover release-relevant changes.
- [ ] Confirm `package.json` metadata and scripts match repository docs.
- [ ] Check changed Markdown and MDX for broken internal links.
- [ ] Run `npm run build` when practical.
- [ ] Review `astro.config.mjs` and `wrangler.jsonc` if deployment behavior
      changed.
- [ ] Confirm `CHANGELOG.md` captures release-relevant docs or config changes.
- [ ] Note unresolved risks or follow-up in `.codex/change-watch.md`.

## Documentation Checks

- `README.md` describes current setup, scripts, and repository scope.
- `CONTRIBUTING.md` reflects the actual local workflow.
- README structure is consistent with the docs-site flow in `CODEX.md`.
- `SECURITY.md` gives private reporting guidance.
- `AGENTS.md`, `CLAUDE.md`, `CODEX.md`, `COPILOT.md`, `JULES.md`, and
  `.github/copilot-instructions.md` agree on agent roles and responsibilities.
- Links to sibling Spectre repositories are current.

## Build And Deploy Checks

- Use `npm run check` when the repository defines it.
- `npm run build` completes successfully.
- `npm run preview` remains available for Cloudflare preview when needed.
- `npm run deploy` still builds before deployment.
- `npm run generate-types` is used only when Wrangler type output needs a
  refresh.

## Config Cleanup Checks

- Shared editor behavior remains in `.editorconfig`, `.gitattributes`, and
  `.vscode/`.
- Personal theme, font, extension, and UI preferences are not introduced.
- Build, preview, deploy, TypeScript, ESLint, and Wrangler settings stay
  reflected in repository docs when contributor workflow changes.
- Duplicate config files are not introduced.

## Handoff Notes

Summarize only what matters:

- what changed
- what was verified
- any release blocker
- any human decision needed
