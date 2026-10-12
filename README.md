# Spectre Docs

`docs-phcdevworks-com` is the official documentation site for the Spectre
design system. It centralizes implementation guides, reference material, and
supporting documentation for the Spectre ecosystem.

Maintained by [PHCDevworks](https://go.phcdev.co). It documents the Spectre
design system — tokens, components, and adapters — for engineers and
designers consuming the published packages.

## Repository Snapshot

| Field | Value |
| --- | --- |
| Project team | `project-web` |
| Repository role | Spectre documentation site |
| Package/artifact | `docs-phcdevworks-com` |
| Current version/status | 0.0.1 |

## Standard Workflow

1. Read [AGENTS.md](AGENTS.md), then the agent-specific guide for the task.
2. Check [TODO.md](TODO.md) and [ROADMAP.md](ROADMAP.md) for current scope.
3. Make the smallest repo-local change that satisfies the task.
4. Run `npm run check` when validation is required or practical.
5. Update docs and [CHANGELOG.md](CHANGELOG.md) only when behavior, public
   contracts, or release-relevant metadata changed.

## Documentation Map

| Guide | Path |
| --- | --- |
| Agent rules | [AGENTS.md](AGENTS.md) |
| Claude Code | [CLAUDE.md](CLAUDE.md) |
| Codex | [CODEX.md](CODEX.md) |
| Copilot | [COPILOT.md](COPILOT.md) |
| Jules | [JULES.md](JULES.md) |
| Grok  | [GROK.md](GROK.md)   |
| Roadmap | [ROADMAP.md](ROADMAP.md) |
| Todo | [TODO.md](TODO.md) |
| Changelog | [CHANGELOG.md](CHANGELOG.md) |
| Security | [SECURITY.md](SECURITY.md) |

[![GitHub issues](https://img.shields.io/github/issues/phcdevworks/docs-phcdevworks-com)](https://github.com/phcdevworks/docs-phcdevworks-com/issues)
[![GitHub pulls](https://img.shields.io/github/issues-pr/phcdevworks/docs-phcdevworks-com)](https://github.com/phcdevworks/docs-phcdevworks-com/pulls)
[![License](https://img.shields.io/github/license/phcdevworks/docs-phcdevworks-com)](LICENSE)

`docs-phcdevworks-com` is the official documentation site for Spectre, run by
PHCDevworks. It centralizes implementation guides, reference material, and
supporting documentation for the Spectre ecosystem.

**Repository docs:** [CONTRIBUTING.md](CONTRIBUTING.md) |
[CHANGELOG.md](CHANGELOG.md) | [ROADMAP.md](ROADMAP.md) |
[SECURITY.md](SECURITY.md) | [AGENTS.md](AGENTS.md) | [CLAUDE.md](CLAUDE.md) |
[CODEX.md](CODEX.md) | [JULES.md](JULES.md) | [COPILOT.md](COPILOT.md) |
[GROK.md](GROK.md) | [LICENSE](LICENSE)

## Overview

This repository contains the Astro-based documentation experience for Spectre.
It is intended to stay clear, accurate, and easy to maintain for both internal
contributors and external readers.

## Where It Fits

This site is the documentation home for Spectre. It was scaffolded from the
`@phcdevworks/spectre-init` `astro` template and depends on
`@phcdevworks/spectre-tokens`, `@phcdevworks/spectre-ui`, and
`@phcdevworks/spectre-ui-astro` for Spectre-aligned presentation. It does not
define upstream design tokens or UI package internals.

The site owns the docs content; Spectre owns the system. Pages are built from
published `spectre-ui-astro` components and shipped `sp-*` classes, with no
site-authored design system. See "Spectre-First Building" in
[AGENTS.md](AGENTS.md).

[spectre.manifest.json](spectre.manifest.json) describes the site's Spectre
dependencies for tooling and AI agents, and is validated by
`@phcdevworks/spectre-manifest` as part of `npm run check`.

## When To Use This Repository

- Maintain the Spectre documentation site.
- Update contributor-facing repository docs.
- Adjust docs-site build, preview, deployment, or workspace configuration.
- Keep automation guidance aligned across Claude Code, Codex, Copilot, and
  Jules.

## When Not To Use This Repository

- Do not define Spectre token contracts here.
- Do not implement source components for `@phcdevworks/spectre-ui`.
- Do not change company website positioning owned by `www-phcdevworks-com`.

## Stack

- Astro 7 (static output; no hosting adapter configured yet)
- TypeScript 7
- `@phcdevworks/spectre-tokens`, `@phcdevworks/spectre-ui`,
  `@phcdevworks/spectre-ui-astro`
- `@phcdevworks/spectre-manifest` (dev) for manifest validation

## Getting Started

### Prerequisites

- Node.js 22.12 or newer
- npm

### Install

```bash
npm install
```

### Run

```bash
npm run dev
```

## Available Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the local Astro development server |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run manifest:validate` | Validate `spectre.manifest.json` with `spectre-manifest-validate` |
| `npm run check` | Full validation gate — runs `npm run build` then `npm run manifest:validate` |

## Validation

```bash
npm run check
```

`npm run check` runs the production build then validates
`spectre.manifest.json`. Use it before any handoff.

## Troubleshooting

**Build fails with missing module errors** — run `npm install` first; `dist/`
is not committed and must be rebuilt locally.

**Manifest validation fails** — confirm the `docs-phcdevworks-com` package
entry's `dependencies` in `spectre.manifest.json` still matches the
`@phcdevworks/*` dependencies in `package.json`.

## Project Structure

| Path | Responsibility |
| --- | --- |
| `src/pages/` | Route-level pages for the documentation experience |
| `src/layouts/` | Page layout components; `BaseLayout.astro` loads `spectre-ui` CSS |
| `astro.config.ts` | Astro configuration |
| `spectre.manifest.json` | App manifest describing this site's Spectre dependencies |

## AI And Automation Boundaries

- Claude Code leads primary implementation. See [CLAUDE.md](CLAUDE.md).
- Codex handles documentation, releases, production stabilization, repo hygiene,
  and config standardization. See [CODEX.md](CODEX.md).
- GitHub Copilot provides general development assistance. See
  [COPILOT.md](COPILOT.md) and
  [.github/copilot-instructions.md](.github/copilot-instructions.md).
- Google Jules handles small automated maintenance. See [JULES.md](JULES.md).
- xAI Grok (and Grok Bot) assists with development and commits its own work. See [GROK.md](GROK.md).

Claude Code has no git access in this repository; Codex executes git
operations for its handed-off work. Site deployment remains Bradley Potts's
sole authority. See
[AGENTS.md](AGENTS.md) for the full commit-policy and release-authority
grant.

Shared coordination rules live in [AGENTS.md](AGENTS.md).

## Versioning And Release Notes

Track release-relevant documentation, workflow, and configuration changes in
[CHANGELOG.md](CHANGELOG.md).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

See [LICENSE](LICENSE).

## Spectre Repositories

- [spectre-tokens](https://github.com/phcdevworks/spectre-tokens)
- [spectre-ui](https://github.com/phcdevworks/spectre-ui)
- [spectre-ui-astro](https://github.com/phcdevworks/spectre-ui-astro)
- [spectre-init](https://github.com/phcdevworks/spectre-init)
- [spectre-manifest](https://github.com/phcdevworks/spectre-manifest)
- [docs-phcdevworks-com](https://github.com/phcdevworks/docs-phcdevworks-com)
- [www-phcdevworks-com](https://github.com/phcdevworks/www-phcdevworks-com)

## Ownership

Spectre is run by PHCDevworks. This repository should use Spectre naming and
PHCDevworks ownership language consistently across docs, settings, and project
configuration.
