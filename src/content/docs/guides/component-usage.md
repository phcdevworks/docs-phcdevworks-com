---
title: Using Spectre UI Components
description: A practical walkthrough for building UI with Spectre UI class recipes and the Spectre UI Astro / Spectre Components adapters.
---

This guide walks through the day-to-day patterns for building interfaces on
top of [Spectre UI](/design/ui) — either directly via class recipes, or
through the [Spectre UI Astro](/design/ui-astro) and
[Spectre Components](/design/components) adapters. For full prop tables and
recipe signatures, see the [Spectre UI reference](/design/ui-reference) and
[Spectre UI Astro reference](/design/ui-astro-reference).

## Choosing a consumption layer

| You are building... | Use |
|---|---|
| An Astro project | [Spectre UI Astro](/design/ui-astro) components (`SpButton`, `SpCard`, etc.) |
| A non-Astro framework, or framework-agnostic markup | [Spectre Components](/design/components) custom elements (`<sp-button>`, `<sp-card>`, etc.) |
| Raw HTML, or a custom adapter not yet built | [Spectre UI](/design/ui) class recipes directly (`getButtonClasses`, `getCardClasses`, etc.) |

All three layers consume the same underlying CSS contract — they differ only
in delivery ergonomics, not visual output.

## Pattern 1 — Astro components

In an Astro project, import components directly and pass typed props:

```astro
---
import { SpButton, SpCard } from '@phcdevworks/spectre-ui-astro'
---

<SpCard variant="elevated" padded>
  <h2>Plan: Pro</h2>
  <SpButton variant="primary" fullWidth>Choose Pro</SpButton>
</SpCard>
```

No CSS import is required beyond the one already wired into your layout —
see `src/layouts/DocsLayout.astro` in this repository for an example of
importing `@phcdevworks/spectre-ui/index.css` once at the layout level.

## Pattern 2 — Class recipes directly

When you need a class string instead of a component — for example, inside a
non-Astro template, or to apply Spectre styling to a third-party element —
call the recipe function directly:

```ts
import { getButtonClasses, getBadgeClasses } from '@phcdevworks/spectre-ui'

const ctaClass = getButtonClasses({ variant: 'primary', size: 'lg' })
const badgeClass = getBadgeClasses({ variant: 'success', size: 'sm' })
```

```html
<button class={ctaClass}>Get started</button>
<span class={badgeClass}>Active</span>
```

Every recipe function takes a plain options object and returns a class
string — no required options, sensible defaults for all of them.

## Pattern 3 — App shell layout (Container / Stack / Section / Sidebar)

The layout recipe family (`getContainerClasses`, `getStackClasses`,
`getSectionClasses`, `getSidebarClasses`, `getFooterClasses`,
`getGridClasses`) composes page-level structure — nav bar, sidebar, main
content column, footer — the same way component recipes compose buttons and
cards. This site's own `src/layouts/DocsLayout.astro` is a working example:

```astro
---
import { SpStack, SpSidebar, SpContainer, SpSection } from '@phcdevworks/spectre-ui-astro'
---

<SpStack direction="horizontal" align="stretch" as="div">
  <SpStack basis="sidebar" as="div">
    <SpSidebar bordered aria-label="Documentation navigation">
      <nav><a href="/">Introduction</a></nav>
    </SpSidebar>
  </SpStack>

  <SpContainer as="div">
    <SpSection as="main">
      <h1>Page title</h1>
    </SpSection>
  </SpContainer>
</SpStack>
```

`align="stretch"` on the outer horizontal `SpStack` is what lets a
fixed-width sidebar match the height of a taller main content column — the
default `align="center"` only centers items vertically, it does not stretch
them. Use `align="stretch"` for app-shell-style sidebar/main rows.

## State-driven recipes (interactive components)

Some recipe families render visual *state* but leave the interaction itself
to the consumer — `SpModal`'s `open` prop, `SpDropdown`'s menu/item classes,
and `SpToast`'s dismiss styling are all driven by props you set; none of them
include built-in show/hide logic. `SpSidebar` is the one exception: it owns
its own toggle/backdrop interaction internally (a scoped inline `<script>`
in the Astro adapter), so you don't need to wire that one up yourself.

```astro
---
import { SpModal } from '@phcdevworks/spectre-ui-astro'

const isOpen = false // driven by your own state management
---

<SpModal open={isOpen} aria-labelledby="modal-title">
  <h2 id="modal-title">Confirm deletion</h2>
</SpModal>
```

## Common mistakes

- **Writing local CSS instead of a recipe.** If you're about to write a
  custom class for a button, card, badge, or layout pattern, check whether a
  Spectre UI recipe already covers it.
- **Mixing adapters in one project.** Pick Spectre UI Astro *or* Spectre
  Components for a given framework target — don't import both into the same
  page unless you have a specific cross-framework embedding need.
- **Forgetting `align="stretch"` on app-shell rows.** A docked sidebar next
  to a `flex: 1` main column will not match height with the default
  `align="center"` — see Pattern 3 above.
- **Re-implementing interactive state Spectre UI deliberately leaves to
  consumers.** Modal open/close, dropdown open/close, and toast
  show/dismiss are intentionally consumer-driven so they fit your app's
  existing state management instead of fighting it.

## Next steps

- For the full recipe catalog and package exports, see the
  [Spectre UI reference](/design/ui-reference).
- For Astro-specific prop tables and slots, see the
  [Spectre UI Astro reference](/design/ui-astro-reference).
- For the underlying token contract these recipes consume, see
  [Using Spectre Tokens](/guides/token-usage).
