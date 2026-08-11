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

## 2. Roadmap — Mature Operations

The foundation is stable. The next phase expands content coverage, hardens
navigation, and keeps the site aligned as the Spectre ecosystem matures.

---

### P0: Content Expansion

**Objective** Build out implementation guides and reference material so the
site is a useful resource for Spectre consumers and contributors.

**Why it matters** The current site has the correct structure and deployment
but limited published content. Without guides and reference pages, the docs
site does not serve its primary purpose.

**Deliverables**

- Add implementation guides for Spectre token usage, Spectre UI component
  usage, and docs-site contribution workflow.
- Add reference pages for the `@phcdevworks/spectre-tokens` public contract
  and `@phcdevworks/spectre-ui` component surface.
- Keep all published content synchronized with the upstream packages it
  documents.

**Risk if skipped**

- The docs site exists structurally but does not serve consumers or
  contributors.

---

### P1: Navigation and Discoverability

**Objective** Make the docs site easy to navigate as content grows.

**Why it matters** A flat structure works for a small site. As guides and
reference pages are added, navigation without structure creates friction for
readers and contributors.

**Deliverables**

- Add a sidebar or top-level navigation structure that scales with content.
- Add a search or filter surface if the Astro or Cloudflare toolchain
  supports it cleanly.
- Keep navigation aligned with the documented route structure in `CLAUDE.md`.

**Dependency notes**

- Depends on P0 content being in place first. Do not build navigation
  structure before there is content to navigate.

**Risk if skipped**

- A growing docs site becomes harder to use without structure, reducing the
  value of content added in P0.

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

## 3. Explicitly Out of Scope

- Token contract definitions — those live in `spectre-tokens`.
- Upstream UI component implementation — that lives in `spectre-ui`.
- Company-wide website positioning — that lives in `www-phcdevworks-com`.
- Framework adapter internals outside the docs site.
- Speculative content expansion without proven consumer demand.

---

## 4. Recommended Execution Order

1. **P0 — Content expansion** — highest priority; the site's primary purpose
   depends on it.
2. **P1 — Navigation** — implement once enough content is in place to need
   structure.
3. **P2 — Ecosystem alignment automation** — implement once content exists and
   upstream packages are releasing regularly.
