# Codex Release Readiness

Codex uses this checklist before a release, deploy, or production handoff for
`docs-phcdevworks-com`.

## Required Checks

- [ ] Confirm the diff is focused and reviewable.
- [ ] Confirm Spectre and PHCDevworks naming is consistent.
- [ ] Confirm changed repository docs match current scripts and tooling.
- [ ] Check changed Markdown and MDX for broken internal links.
- [ ] Run `npm run build` when practical.
- [ ] Review `astro.config.mjs` and `wrangler.jsonc` if deployment behavior
      changed.
- [ ] Confirm `CHANGELOG.md` captures release-relevant docs or config changes.
- [ ] Note unresolved risks or follow-up in `.codex/change-watch.md`.

## Documentation Checks

- `README.md` describes current setup, scripts, and repository scope.
- `CONTRIBUTING.md` reflects the actual local workflow.
- `SECURITY.md` gives private reporting guidance.
- `AGENTS.md` and `CODEX.md` agree on agent roles and responsibilities.
- Links to sibling Spectre repositories are current.

## Build And Deploy Checks

- `npm run build` completes successfully.
- `npm run preview` remains available for Cloudflare preview when needed.
- `npm run deploy` still builds before deployment.
- `npm run generate-types` is used only when Wrangler type output needs a
  refresh.

## Handoff Notes

Summarize only what matters:

- what changed
- what was verified
- any release blocker
- any human decision needed

