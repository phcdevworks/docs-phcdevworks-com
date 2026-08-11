# ROADMAP.md

# Spectre Docs Roadmap

`docs-phcdevworks-com` is the Astro documentation site for the Spectre
ecosystem. It owns the public documentation experience, repository docs, and
project-level configuration for the docs site. Its job is to stay clear,
accurate, and production-ready — not to define token contracts or implement
upstream UI components.

---

## 1. Foundation Status — Delivered

All foundation work is complete. The site is deployed and maintained.

Current Spectre dependency versions: `@phcdevworks/spectre-tokens ^4.3.0`,
`@phcdevworks/spectre-ui ^4.0.0`, `@phcdevworks/spectre-ui-astro ^4.4.0` —
bumped 2026-08-11 to close the version lag behind `project-design`'s latest
releases. This closed the sidebar parent/child indentation gap tracked in
`TODO.md` (`getSidebarLinkClasses({ level: 'child' })`).

### What is in place

- Astro + Cloudflare adapter setup with a working local dev and production
  build path.
- Full validation gate: `npm run check` runs the production build before
  any handoff.
- Multi-agent team (Claude Code, Codex, Copilot, Jules) with documented
  authority boundaries in `AGENTS.md`, `CLAUDE.md`, `CODEX.md`, `COPILOT.md`,
  and `JULES.md`.
- PR template and GitHub issue templates that align with the Spectre AI
  factory model.
- `.codex/` playbooks for change-watch and release-readiness tracking.
- `release:propose` script for version proposal at handoff.
- `@phcdevworks/spectre-ui-astro` integration for Spectre-aligned presentation.
- README, CONTRIBUTING, CHANGELOG, and SECURITY docs aligned with the
  broader Spectre repository standard.

### What will not change

- This site does not define token contracts. Those live in `spectre-tokens`.
- This site does not implement upstream UI components. Those live in
  `spectre-ui`.
- `npm run check` remains the validation gate. No gate is optional before
  handoff.
- Bradley Potts holds final authority for all commits, merges, tags, and
  production deployments.

---

## 2. Delivered Phases

| Phase | Summary | Status |
| --- | --- | --- |
| 1 | Foundation — Astro + Cloudflare adapter, `npm run check` gate, agent docs, PR/issue templates, phased roadmap/todo | Delivered |
| 2 P0 | Content expansion — token/component/contribution guides, `spectre-tokens`/`spectre-ui` reference pages, ongoing sync with upstream releases | Delivered |
| 2 P1 (partial) | Navigation — Guides sidebar section, sidebar hamburger dead-toggle fix, parent/child link indentation | Delivered |

See [CHANGELOG.md](CHANGELOG.md) for release-by-release detail on the above.

---

## 3. What's Next

The remainder of Phase 2 is open. See [TODO.md](TODO.md) for the active
item-level checklist.

---

### P1: Navigation and Discoverability (remaining)

**Objective** Finish making the docs site easy to navigate as content grows.

**Deliverables**

- Full-height sidebar sizing for the docked (desktop) layout — likely
  requires an upstream `spectre-ui` change; do not work around locally.
- Search or filter surface, once content volume justifies it (Pagefind is
  the recommended choice — see `TODO.md`).

**Risk if skipped**

- A growing docs site becomes harder to use without structure, reducing the
  value of content already added in P0.

---

### P2: Ecosystem Alignment Automation

**Objective** Keep the docs site automatically aligned with upstream Spectre
package releases.

**Why it matters** Docs drift from the packages they document when releases
happen without a corresponding docs update. Manual tracking works at small
scale but breaks down as the ecosystem matures.

**Deliverables**

- Define a lightweight docs-update checklist triggered by upstream package
  releases.
- Evaluate whether a GitHub Actions workflow can flag docs-site content for
  review when `spectre-tokens` or `spectre-ui` publish a new version.
- Document the update procedure in `CONTRIBUTING.md`.

**Dependency notes**

- Requires P0 content to exist before alignment automation is meaningful.

**Risk if skipped**

- Docs lag behind package releases and mislead consumers about the current
  contract.

---

## 4. Explicitly Out of Scope

- Token contract definitions — those live in `spectre-tokens`.
- Upstream UI component implementation — that lives in `spectre-ui`.
- Company-wide website positioning — that lives in `www-phcdevworks-com`.
- Framework adapter internals outside the docs site.
- Speculative content expansion without proven consumer demand.

---

## 5. Recommended Execution Order

1. **P1 remaining — Navigation** — sidebar sizing and search evaluation;
   content (P0) is already in place.
2. **P2 — Ecosystem alignment automation** — implement once upstream packages
   are releasing regularly (they are).
