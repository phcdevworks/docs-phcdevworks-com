# Codex Change Watch

Use this file as a lightweight review log when Codex is looped in for a branch,
release candidate, or production handoff.

Keep entries short. Remove stale notes after the related work ships or is
closed.

## Active Watch

- No active release watch.

## Review Prompts

- What changed since the last release-ready state?
- Do repository docs still match the current scripts and tooling?
- Are internal Markdown links still valid?
- Did any config change affect build, preview, deploy, or editor behavior?
- Does `CHANGELOG.md [Unreleased]` capture the release-relevant change?
- Is there anything Claude Code or the human reviewer needs to decide before
  production?

## Handoff Template

```md
## YYYY-MM-DD - Branch or Release Candidate

- Scope:
- Files reviewed:
- Validation:
- Changelog:
- Risks:
- Follow-up:
```
