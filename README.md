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

- `npm run dev` starts the local Astro development server.
- `npm run build` creates the production build.
- `npm run preview` builds the project and starts the Cloudflare preview.
- `npm run generate-types` refreshes Wrangler type output.
- `npm run deploy` builds and deploys the site.

## Project Structure

| Path | Responsibility |
| --- | --- |
| `src/pages/` | Route-level pages for the documentation experience |
| `src/components/` | Shared presentation and content helpers |
| `public/` | Static assets served as-is |

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
