---
title: Contributing Documentation Content
description: How to add or update a page on this docs site — file structure, frontmatter, sidebar wiring, and the review handoff chain.
---

This guide covers the docs-site-specific workflow for adding or editing
*content* pages. For repository-level setup, scripts, and PR expectations,
see `CONTRIBUTING.md` in the repository root.

## Where content lives

Every page is a Markdown file under `src/content/docs/`, loaded as an Astro
content collection (see `src/content.config.ts`). The route a file resolves
to is its path relative to that directory:

```
src/content/docs/design/tokens.md        ->  /design/tokens
src/content/docs/guides/token-usage.md   ->  /guides/token-usage
```

`src/pages/[...slug].astro` reads the collection and renders every entry
through `DocsLayout.astro` automatically — you do not need to create a page
file for new content.

## Required frontmatter

Every page needs exactly two frontmatter fields, enforced by the Zod schema
in `src/content.config.ts`:

```md
---
title: Page Title
description: One or two sentences describing the page for previews and meta tags.
---
```

Both are required strings. The build fails if either is missing.

## Adding a new page

1. Create the Markdown file under the appropriate subdirectory of
   `src/content/docs/` (e.g. `design/` for ecosystem package docs, `guides/`
   for task-oriented how-tos).
2. Add the required `title` and `description` frontmatter.
3. Write the content. Follow the existing house style: concise Markdown,
   `[text](url)` links (no bare URLs), and code examples that match the
   actual installed package API — verify against the real source or
   `CHANGELOG.md` in the upstream `project-design/` repo rather than
   assuming.
4. If the page should appear in the sidebar, add it to `DocsLayout.astro`
   (see below). Pages not linked from the sidebar are still built and
   reachable by direct URL, but won't be discoverable through navigation.
5. Run `npm run build` and check the new route renders.

## Wiring a page into the sidebar

The sidebar nav lives in `src/layouts/DocsLayout.astro`. Two patterns exist
today:

- **Package docs** (Tokens, UI, UI Astro, Components, Base) are generated
  from the `packages` array near the top of the component — each entry adds
  an Overview + Reference link pair.
- **Single pages** (like "Introduction") are written directly as an `<a>`
  inside a named `<SpStack>` section.

Add a new top-level section by following the existing `SpStack`/`<nav>`
pattern, or extend the `packages` array if the new page is another
ecosystem-package doc pair.

## Keeping content synchronized with upstream packages

This repository documents packages it does not own (`spectre-tokens`,
`spectre-ui`, `spectre-ui-astro`, `spectre-components`, `spectre-base`, all
published from `project-design/`). When an upstream package ships a release:

1. Check the installed version range in `package.json` against the latest
   published version in `project-design/<repo>/package.json` (the
   project-design top-level `ROADMAP.md` can lag behind individual repo
   `CHANGELOG.md` files — prefer the per-repo source when they disagree).
2. Read the relevant `CHANGELOG.md` entries since the version currently
   documented here.
3. Update the affected overview and reference pages — version numbers,
   new recipes/components, new props, and any claims about component counts
   or "current version" callouts.
4. Verify against actual source (`src/recipes/*.ts`,
   `src/components/*.astro`, `astro-adapter.contract.json`) when a changelog
   entry is ambiguous — don't guess at prop names or option values.

## Review and handoff chain

Per `CLAUDE.md`: **Claude Code → Codex review → Bradley Potts commits.**
Claude Code does not create commits in this repository. Before handing off:

- Run `npm run build` (or `npm run check` for build + typecheck).
- Summarize what changed and call out any broken links or unresolved risks.
- Update `CHANGELOG.md` if the change is release-relevant.

## Next steps

- [Using Spectre Tokens](/guides/token-usage) and
  [Using Spectre UI Components](/guides/component-usage) are examples of the
  guide format described above.
- See `CLAUDE.md` in the repository root for the full implementation guide
  and working rules.
