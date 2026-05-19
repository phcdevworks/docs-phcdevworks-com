# CLAUDE.md - Spectre Docs

## Project Identity

**Repository:** `docs-phcdevworks-com`
**Product:** Spectre
**Maintainer:** PHCDevworks
**Primary AI developer:** Claude Code

`docs-phcdevworks-com` is the Astro documentation site for the Spectre
ecosystem. It owns the public documentation experience, repository docs, and
project-level configuration for the docs site.

This file is the primary working guide for Claude Code in this repository. Read
`AGENTS.md` first, then use this file for implementation direction.

## Team

| Role           | Agent          | Authority                                                                                                   | Guide                                              |
| -------------- | -------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| Human owner    | Bradley Potts  | Final authority — all commits, merges, tags, and production releases                                        | —                                                  |
| Lead developer | Claude Code    | Primary implementation, architecture, refactor, debugging, and project direction                             | `CLAUDE.md`                                        |
| Release safety | OpenAI Codex   | Backs up Claude Code — release readiness, production stabilization, documentation, changelog, and repo hygiene | `CODEX.md`                                       |
| Strategy       | ChatGPT        | Strategy, coordination, and external review — does not own implementation or releases                        | —                                                  |
| Dev support    | GitHub Copilot | General development support — inline suggestions, TypeScript, API hints, and small refactors                 | `COPILOT.md` and `.github/copilot-instructions.md` |
| Maintenance    | Google Jules   | Bounded automated maintenance — small fixes, dependency updates, and micro-updates                           | `JULES.md`                                         |

Claude Code leads all implementation. Codex backstops release safety, production
readiness, validation, and documentation hygiene. Bradley Potts has final
authority for every commit, merge, tag, and production release — no AI agent
commits or releases without his review.

## Project Structure

| Path                 | Responsibility                                      |
| -------------------- | --------------------------------------------------- |
| `src/pages/`         | Route-level Astro pages for the docs experience     |
| `src/layouts/`       | Page layout components                              |
| `public/`            | Static assets served as-is                          |
| `astro.config.mjs`   | Astro + Cloudflare adapter configuration            |
| `wrangler.jsonc`     | Cloudflare Workers deployment configuration         |
| `eslint.config.ts`   | TypeScript-ESLint rules — no `npm run lint` script  |
| `tsconfig.json`      | Extends `astro/tsconfigs/strict`                    |
| `.codex/`            | Codex release and change-watch playbooks            |

## Development Workflow

```bash
npm install
npm run dev
npm run build
```

Use `npm run build` as the standard validation gate before handoff when
practical. Use `npm run preview` only when Cloudflare runtime behavior needs to
be checked.

## Working Rules

- Keep changes focused and easy to review.
- Keep Spectre and PHCDevworks naming consistent.
- Treat documentation accuracy as product behavior.
- Keep contributor-facing docs synchronized with actual scripts and tooling.
- Do not introduce broad rewrites for small documentation tasks.
- Do not add dependencies unless the docs site genuinely needs them.
- Preserve shared editor and workspace settings; avoid personal preferences.
- Keep Cloudflare and Astro configuration changes explicit and scoped.

## Content Standards

- Write concise, direct Markdown and MDX.
- Avoid references to retired branding or unrelated organizations.
- No bare URLs — use `[text](url)` link syntax in Markdown.
- Do not introduce project-specific conventions without documenting them here.

## TypeScript and ESLint

TypeScript uses `astro/tsconfigs/strict`. ESLint is configured in
`eslint.config.ts` with these enforced rules:

- `@typescript-eslint/no-explicit-any` — error; no `any` allowed
- `@typescript-eslint/no-unused-vars` — warn; prefix intentionally unused
  parameters with `_`

There is no `npm run lint` script. Run ESLint manually or through the IDE when
working in `.ts`, `.tsx`, `.astro` files.

## Documentation Ownership

This repository owns:

- Spectre documentation site content
- docs site route structure
- repository README, contributing, changelog, security, and agent guidance
- project-level editor, build, preview, and deploy configuration

This repository does not own:

- Spectre token definitions
- Spectre UI component source
- framework adapter internals outside the docs site
- company-wide website positioning for `www-phcdevworks-com`

## Handoff Expectations

Before handing work to Codex or Bradley:

- summarize what changed
- run `npm run build` when practical
- call out broken links, skipped checks, or unresolved risks
- update `CHANGELOG.md` for release-relevant documentation or configuration
  changes
- keep any release-candidate tracking in `.codex/change-watch.md` when Codex is
  involved

Handoff chain: Claude Code → Codex review → Bradley Potts commits.

## Coordination Rules

- Codex is the release gate — production changes pass through Codex review
  before reaching Bradley.
- Bradley Potts has final authority for all commits, merges, tags, and
  production deployments.
- ChatGPT provides strategy and external review; it does not implement or
  release.
- Jules output must stay small, automated, and easy to accept or revert.
- If agent guidance conflicts, prefer `AGENTS.md` for shared policy and this
  file for implementation direction.
- Escalate unclear production risk to Bradley instead of hiding it in a diff.
