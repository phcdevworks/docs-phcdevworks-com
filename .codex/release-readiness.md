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
- [ ] Run `npm run check` when practical.
- [ ] Review `astro.config.ts` if build or deployment behavior changed.
- [ ] Confirm `spectre.manifest.json` matches `package.json` `@phcdevworks/*`
      dependencies.
- [ ] Confirm changed pages use published Spectre components and classes
      with no new site-authored CSS.
- [ ] Confirm `CHANGELOG.md` captures release-relevant docs or config changes.
- [ ] Note unresolved risks or follow-up in `.codex/change-watch.md`.

## Documentation Checks

- `README.md` describes current setup, scripts, and repository scope.
- `CONTRIBUTING.md` reflects the actual local workflow.
- README structure is consistent with the docs-site flow in `CODEX.md`.
- `SECURITY.md` gives private reporting guidance.
- `AGENTS.md`, `CLAUDE.md`, `CODEX.md`, `COPILOT.md`, `JULES.md`, `GROK.md`,
  and `.github/copilot-instructions.md` agree on agent roles and responsibilities.
- Links to sibling Spectre repositories are current.

## Build And Deploy Checks

- `npm run check` (build plus manifest validation) passes.
- `npm run preview` serves the production build locally when needed.
- No deploy script or hosting adapter exists yet; restoring one is tracked in
  `TODO.md`.

## Config Cleanup Checks

- Shared editor behavior remains in `.editorconfig`, `.gitattributes`, and
  `.vscode/`.
- Personal theme, font, extension, and UI preferences are not introduced.
- Build, preview, deploy, TypeScript, ESLint, and manifest settings stay
  reflected in repository docs when contributor workflow changes.
- Duplicate config files are not introduced.

## Handoff Notes

Summarize only what matters:

- what changed
- what was verified
- any release blocker
- any human decision needed
