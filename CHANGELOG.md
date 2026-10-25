# Changelog

All notable changes to `docs-phcdevworks-com` should be documented in this file.

The format follows Keep a Changelog and uses semantic versioning where
practical.

## Unreleased

### Changed

- Updated the runtime stack to `@phcdevworks/spectre-tokens` `^4.15.0`,
  `@phcdevworks/spectre-ui` `^5.8.0`, `@phcdevworks/spectre-ui-astro`
  `^4.14.0`, and Astro `^7.4.2`.
- Rebuilt the site on the `@phcdevworks/spectre-init` 1.5.0 `astro` starter:
  `astro.config.ts`, `tsconfig.json`, `src/layouts/BaseLayout.astro`, and
  `src/pages/index.astro`, consuming `@phcdevworks/spectre-tokens` `^4.13.0`,
  `@phcdevworks/spectre-ui` `^5.5.0`, and `@phcdevworks/spectre-ui-astro`
  `^4.12.0` on Astro 7 and TypeScript 7.
- Added `spectre.manifest.json` and `@phcdevworks/spectre-manifest` `^2.0.0`
  as a dev dependency, with a `manifest:validate` script.
- `npm run check` now runs `npm run build` then `npm run manifest:validate`.
- Added Spectre-first guidance (Spectre Packages, Spectre-First Building,
  Source of Truth, Standard Handoff) to `AGENTS.md` and carried it through
  `CLAUDE.md`, `CODEX.md`, `COPILOT.md`, `GROK.md`, `JULES.md`,
  `.github/copilot-instructions.md`, `README.md`, `CONTRIBUTING.md`, and
  `.codex/release-readiness.md`.
- Removed documentation for scripts and config the starter does not ship:
  `typecheck`, `generate-types`, `deploy`, `screenshot`,
  `sync:package-docs`, `astro.config.mjs`, and `wrangler.jsonc`.
- Bumped `@phcdevworks/spectre-tokens` to `^4.3.0`, `@phcdevworks/spectre-ui`
  to `^4.0.0`, and `@phcdevworks/spectre-ui-astro` to `^4.4.0`, closing the
  version lag behind `project-design`'s latest releases.
- Refreshed the Astro, Cloudflare adapter, Node.js types, TypeScript ESLint,
  and Wrangler dependencies to their current compatible releases.
- Applied `level: 'child'` to sidebar links nested under a group in
  `DocsLayout.astro` via `getSidebarLinkClasses`, so they render with the
  upstream indent styling instead of sitting flush with their parent group
  label.

### Fixed

- Added `@types/node` so `scripts/check-readme-version.ts` typechecks under
  `astro check` (was failing with 4 `tsc` errors for missing Node globals).
- Removed prohibited terminology from `src/pages/index.astro` - replaced
  "Arsenal", "8-Layer", and layer-naming language with accurate Spectre design
  system descriptions.
- Fixed `frontmatter?: any` in `DocsLayout.astro` - replaced with
  `Record<string, unknown>` to satisfy the enforced `no-explicit-any` ESLint
  rule.
- Replaced hardcoded `v1.2.0` version badge in `DocsLayout.astro` with "Early
  Access" to reflect actual release state.
- Fixed broken sidebar navigation links - replaced non-existent internal routes
  (`/installation`, `/spectre-ui`, `/spectre-tokens`) with links to the correct
  GitHub repositories.

### Added

- `npm run check` script - standardized full validation gate aliased to
  `npm run build`, consistent with the Spectre ecosystem convention.
- `package.json` metadata - added `description`, `repository`, `bugs`,
  `keywords`, and `license` fields.
- Troubleshooting section in `README.md` - covers build errors, wrangler auth
  failures, and type-checking setup.
- Troubleshooting section in `CONTRIBUTING.md` - covers common local setup
  failures.
- Scripts table in `README.md` replacing the plain list for easier scanning.
- AI team alignment updates - added Bradley Potts and ChatGPT to all agent team
  tables; created explicit Claude → Codex → Bradley handoff chain in `CLAUDE.md`.
- Created `COPILOT.md` with team position table and authority boundaries.

- Added GitHub PR and issue templates for bug, docs, release-readiness, and
  config-drift support aligned with Spectre agent boundaries.
- Standardized README structure with docs-site scope, validation, automation
  boundaries, and release-note references.
- Expanded Codex operating guidance for production readiness, validation,
  release preparation, README structure, package metadata, and config
  consistency.
- Strengthened Codex release, changelog, production-stabilization, and config
  cleanup guidance.
- Added repository-level Copilot support guidance and tightened cross-agent
  coordination references.
- Standardized GitHub Copilot role guidance and added repository-level Copilot
  instructions aligned with Claude Code, Codex, and Jules boundaries.
- Added Claude Code and Google Jules agent configuration for coordinated
  AI-assisted maintenance.
- Added Codex release-readiness and change-watch documentation for AI-assisted
  production handoffs.
- Standardized repository documentation and project-level workspace settings for
  Spectre.
