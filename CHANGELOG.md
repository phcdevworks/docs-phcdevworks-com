# Changelog

All notable changes to `docs-phcdevworks-com` should be documented in this file.

The format follows Keep a Changelog and uses semantic versioning where
practical.

## Unreleased

### Fixed

- Removed prohibited terminology from `src/pages/index.astro` — replaced
  "Arsenal", "8-Layer", and layer-naming language with accurate Spectre design
  system descriptions.
- Fixed `frontmatter?: any` in `DocsLayout.astro` — replaced with
  `Record<string, unknown>` to satisfy the enforced `no-explicit-any` ESLint
  rule.
- Replaced hardcoded `v1.2.0` version badge in `DocsLayout.astro` with "Early
  Access" to reflect actual release state.
- Fixed broken sidebar navigation links — replaced non-existent internal routes
  (`/installation`, `/spectre-ui`, `/spectre-tokens`) with links to the correct
  GitHub repositories.

### Added

- `npm run check` script — standardized full validation gate aliased to
  `npm run build`, consistent with the Spectre ecosystem convention.
- `package.json` metadata — added `description`, `repository`, `bugs`,
  `keywords`, and `license` fields.
- Troubleshooting section in `README.md` — covers build errors, wrangler auth
  failures, and type-checking setup.
- Troubleshooting section in `CONTRIBUTING.md` — covers common local setup
  failures.
- Scripts table in `README.md` replacing the plain list for easier scanning.
- AI team alignment updates — added Bradley Potts and ChatGPT to all agent team
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
