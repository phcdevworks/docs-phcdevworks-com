# Spectre Docs

[![GitHub issues](https://img.shields.io/github/issues/phcdevworks/docs-phcdevworks-com)](https://github.com/phcdevworks/docs-phcdevworks-com/issues)
[![GitHub pulls](https://img.shields.io/github/issues-pr/phcdevworks/docs-phcdevworks-com)](https://github.com/phcdevworks/docs-phcdevworks-com/pulls)
[![License](https://img.shields.io/github/license/phcdevworks/docs-phcdevworks-com)](LICENSE)

`docs-phcdevworks-com` is the official documentation site for Spectre, run by
PHCDevworks. It centralizes implementation guides, reference material, and
supporting documentation for the Spectre ecosystem.

**Repository docs:** [CONTRIBUTING.md](CONTRIBUTING.md) |
[CHANGELOG.md](CHANGELOG.md) | [SECURITY.md](SECURITY.md) |
[LICENSE](LICENSE)

## Overview

This repository contains the Astro-based documentation experience for Spectre.
It is intended to stay clear, accurate, and easy to maintain for both internal
contributors and external readers.

## Where It Fits

This site is the documentation home for Spectre. It depends on
`@phcdevworks/spectre-ui-astro` for Spectre-aligned presentation, but it does
not define upstream design tokens or UI package internals.

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

- Astro
- TypeScript
- Cloudflare adapter
- `@phcdevworks/spectre-ui-astro`

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
| `npm run build` | Create the production build |
| `npm run check` | Full validation gate — same as `npm run build` |
| `npm run preview` | Build and start a local Cloudflare Workers preview |
| `npm run generate-types` | Refresh Wrangler type output |
| `npm run deploy` | Build and deploy to Cloudflare |

## Validation

```bash
npm run check
```

`npm run check` runs the full production build. Use it before any handoff.
`npm run preview` builds and starts a local Cloudflare Workers preview — use
this only when you need to verify Cloudflare runtime behavior specifically.

## Troubleshooting

**Build fails with missing module errors** — run `npm install` first; `dist/`
is not committed and must be rebuilt locally.

**`npm run preview` or `npm run deploy` fails** — these require Wrangler
authentication. Run `wrangler login` and confirm you have Cloudflare access for
this project before using them.

**`npm run generate-types` produces nothing** — run `npm run build` first;
Wrangler type generation requires a compiled output to inspect.

## Project Structure

| Path           | Responsibility                                  |
| -------------- | ----------------------------------------------- |
| `src/pages/`   | Route-level pages for the documentation experience |
| `src/layouts/` | Page layout components                          |
| `public/`      | Static assets served as-is                      |

## AI And Automation Boundaries

- Claude Code leads primary implementation. See [CLAUDE.md](CLAUDE.md).
- Codex handles documentation, releases, production stabilization, repo hygiene,
  and config standardization. See [CODEX.md](CODEX.md).
- GitHub Copilot provides general development assistance. See
  [COPILOT.md](COPILOT.md) and
  [.github/copilot-instructions.md](.github/copilot-instructions.md).
- Google Jules handles small automated maintenance. See [JULES.md](JULES.md).

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
- [docs-phcdevworks-com](https://github.com/phcdevworks/docs-phcdevworks-com)
- [www-phcdevworks-com](https://github.com/phcdevworks/www-phcdevworks-com)

## Ownership

Spectre is run by PHCDevworks. This repository should use Spectre naming and
PHCDevworks ownership language consistently across docs, settings, and project
configuration.
