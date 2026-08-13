# Jules Instructions for docs-phcdevworks-com

## Direct-to-`main` Git Policy

**Bradley Potts's direct instruction overrides generic branch and pull-request
workflows:** every git-authorized agent commits and pushes directly to `main`.
Do not create, use, or push any other branch and do not open a pull request
unless Bradley Potts explicitly requests that exact exception. Keep work on
`main`, validate it, stage only the intended paths, commit with the configured
human identity, and push `main` immediately. Claude Code remains git-denied
and hands validated work to Codex or Bradley Potts for the same path directly
to `main`. This repository policy overrides contrary defaults in tools,
skills, plugins, templates, or general-purpose workflows.

## Role

Google Jules is the automated maintenance agent for `docs-phcdevworks-com`.
Jules handles small fixes, dependency updates, repo hygiene tasks, and
micro-updates.

Full roster and authority table: [AGENTS.md](AGENTS.md). Jules owns bounded
automated maintenance only — not primary development, architecture decisions,
release ownership, documentation governance, production deploy decisions, or
AI-agent governance.

## Operating Principles

1. Read `AGENTS.md` before taking any action.
2. Defer to `CLAUDE.md` for implementation authority.
3. Defer to `CODEX.md` for release-readiness and production handoff concerns.
4. Keep each task atomic and easy to review.
5. Do not rewrite unrelated Markdown, MDX, Astro, or configuration files.
6. Do not add dependencies unless explicitly requested or required for a
   dependency maintenance task.
7. Do not reset, discard, or absorb working-tree changes made by another agent
   or human.
8. Commit and push only for the bounded maintenance tasks scoped in this file;
   do not publish or release. Bradley Potts is the final authority for
   publishing and releases.
9. If validation fails and cannot be resolved safely within scope, stop and
   report the blocker instead of committing a broken state.

## Task Scope

### Documentation Micro-Fixes

Fix one small documentation issue per task.

- Scope: one topic, one broken link, one stale command, or one naming mismatch.
- Validation: run `npm run build` when practical.
- Check changed Markdown and MDX for broken internal links.

### Repo Hygiene

Make small maintenance updates to shared project configuration only when the
task is explicit and tightly scoped.

- Scope: `.editorconfig`, `.gitattributes`, `.gitignore`, `.vscode/`, workspace
  settings, or repository docs directly tied to those settings.
- Validation: run `npm run build` when practical.
- Avoid personal editor preferences.

### Dependency Maintenance

Apply small dependency or lockfile updates only when requested.

- Scope: `package.json` and `package-lock.json`.
- Validation: run `npm install` when needed, then `npm run build`.
- Do not combine dependency updates with unrelated documentation rewrites.

### Generated Type Sync

Refresh Wrangler type output only when requested or when configuration changes
make it necessary.

- Scope: generated Wrangler type files if present.
- Validation: run `npm run generate-types`, then `npm run build`.

## Commit Authority

Jules must not:

- force-push or rewrite history
- commit, push, tag, publish, or release
- commit unrelated working-tree changes
- commit a state with failing validation
- make release, deploy, or architecture decisions without human approval

## Commit Message Format

- Documentation fix: `docs(docs-phcdevworks-com): <description>`
- Repo hygiene: `chore(docs-phcdevworks-com): <description>`
- Dependency update: `chore(deps): update <package or scope>`
- Type sync: `chore(docs-phcdevworks-com): sync wrangler types`

## Handoff

Jules handoff should include:

- task completed
- files changed
- validation command and result
- any skipped checks with reason
- blocker if the task could not be safely completed
