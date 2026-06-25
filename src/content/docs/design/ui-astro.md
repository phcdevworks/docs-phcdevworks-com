---
title: Spectre UI Astro
description: Astro-native components for the Spectre UI design system — SSR-safe, token-driven, and ready to drop into any Astro project.
---

`@phcdevworks/spectre-ui-astro` (current version **3.1.0**) provides
Astro-native components for [Spectre UI](/design/ui). Drop Spectre components
into any Astro project — SSR, SSG, or hybrid — without writing CSS, redefining
tokens, or reimplementing recipe logic.

## What Astro developers get

- **Twenty-three ready-to-use Astro components** — alerts, avatars, badges,
  buttons, cards, containers, dropdowns, footers, grids, icon boxes, inputs,
  modals, navs, pricing cards, ratings, sections, sidebars, spinners, stacks,
  tags, testimonials, toasts, and tooltips
- **SSR-safe by default** — deterministic markup and stable accessibility
  wiring. Every component ships no client-side JavaScript except `SpSidebar`,
  which owns its own toggle/backdrop interaction via a small scoped inline
  `<script>`
- **Thin wrapper pattern** — styling comes entirely from [Spectre
  UI](/design/ui); this package adds Astro slots, typed props, and framework
  ergonomics
- **Re-exported recipe helpers** — use the same class functions the
  components use, directly from your Astro frontmatter or TypeScript

## Installation

```bash
npm install @phcdevworks/spectre-ui-astro @phcdevworks/spectre-ui
```

`@phcdevworks/spectre-ui` is a required peer dependency. It owns the CSS,
class recipes, and design system behavior that powers every component in this
package. Install this package inside an Astro project; `astro` is also a peer
dependency supplied by the consuming app.

If your project works with Spectre design tokens directly:

```bash
npm install @phcdevworks/spectre-tokens
```

## CSS setup

This package ships no CSS. Add the Spectre UI stylesheet once in your Astro
layout:

```astro
---
// src/layouts/BaseLayout.astro
import '@phcdevworks/spectre-ui/index.css'

interface Props {
  title?: string
}
const { title = 'My Astro site' } = Astro.props
---
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>
```

All Spectre components pick up the stylesheet through the layout. Do not
import it per-component — CSS ownership stays with [Spectre UI](/design/ui).

## Quick start

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro'
import {
  SpBadge,
  SpButton,
  SpCard,
  SpIconBox,
  SpInput,
  SpPricingCard,
} from '@phcdevworks/spectre-ui-astro'
---

<BaseLayout title="My page">
  <SpCard variant="elevated">
    <SpIconBox variant="primary" size="md">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l7 4v12l-7 4-7-4V6l7-4z" fill="currentColor" />
      </svg>
    </SpIconBox>

    <SpBadge variant="success" size="sm">Stable</SpBadge>
    <h2>Build faster with Spectre</h2>
    <SpButton variant="primary" size="lg">Get started</SpButton>
  </SpCard>

  <SpInput
    id="email"
    label="Email"
    name="email"
    type="email"
    placeholder="you@example.com"
    helperText="We will never share your email."
  />

  <SpPricingCard featured>
    <h3 slot="header">Pro</h3>
    <span slot="price">$29/mo</span>
    <span slot="description">For growing teams.</span>
    <SpButton variant="primary" fullWidth>Choose plan</SpButton>
  </SpPricingCard>
</BaseLayout>
```

## Polymorphic rendering (`as` prop)

Most components accept an `as` prop to change the rendered HTML element
without changing component behavior or styling.

```astro
<!-- SpButton: renders <button> by default -->
<SpButton variant="primary">Submit</SpButton>

<!-- SpButton: renders <a> with all button styling -->
<SpButton variant="primary" as="a" href="/get-started">Get started</SpButton>

<!-- SpCard: semantic article markup -->
<SpCard variant="elevated" as="article">
  <h2>Article title</h2>
</SpCard>

<!-- SpBadge: inline time element -->
<SpBadge variant="primary" as="time" datetime="2026-01-01">Jan 2026</SpBadge>
```

- **Disabled navigation:** When `disabled` is set on an anchor (`as="a"`), the
  `href` is suppressed so the element is not keyboard-navigable.
  `aria-disabled="true"` is always set alongside `disabled`.
- **Button type:** When `as="button"` (the default for `SpButton`), `type`
  defaults to `"button"` to prevent accidental form submission. Pass
  `type="submit"` explicitly when needed.
- **Non-native interactive elements:** Setting `interactive={true}` on a `div`
  or `span` adds `role="button"` and `tabindex="0"` automatically. Use this
  only when a native `button` or `a` is genuinely impractical.

## SSR and static site behavior

This package works in all Astro output modes: `"static"`, `"server"`, and
`"hybrid"`.

- **No client-side JavaScript.** Every component renders entirely at build
  time or in the server step. No hydration directives are needed or used.
  Interactive styles (hover, focus, active) are driven by CSS from [Spectre
  UI](/design/ui).
- **Deterministic markup.** All IDs, class names, and attributes are computed
  from explicit props. Every render of the same props produces identical HTML
  — safe for SSR streaming and static generation.
- **`SpInput` explicit `id` requirement.** When any of `label`, `helperText`,
  or `errorMessage` are passed, an explicit `id` prop is required. Without it,
  the component throws during render to prevent nondeterministic
  `for`/`aria-describedby` wiring in server-rendered and statically generated
  output.

```astro
<!-- id is required whenever label, helperText, or errorMessage is set -->
<SpInput id="email" label="Email" name="email" />
```

CSS is handled by importing the Spectre UI stylesheet in your Astro layout
once — Astro bundles and injects it in both SSR and static builds. No runtime
style injection occurs from this package.

## Recipe helpers

The package re-exports class recipe functions from [Spectre UI](/design/ui).
Use these when you need Spectre-aligned class names outside of the Astro
components — in layout markup, in headless patterns, or when mapping over
dynamic data.

```astro
---
// Using getButtonClasses to style plain anchor tags in a nav
import { getButtonClasses } from '@phcdevworks/spectre-ui-astro'

const navClass = getButtonClasses({ variant: 'ghost', size: 'sm' })
const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
]
---

<nav>
  {links.map(link => (
    <a class={navClass} href={link.href}>{link.label}</a>
  ))}
</nav>
```

## What this package owns

- Astro-native component delivery for Spectre UI recipes and classes
- Astro-friendly, SSR-safe component interfaces and composition patterns
- Type-safe framework bindings for the upstream Spectre UI contract
- Adapter-level ergonomics that make [Spectre UI](/design/ui) straightforward
  to consume in Astro projects

Golden rule: bind the upstream Spectre UI contract for Astro, do not redefine
it.

## What this package does not own

- Design values or token meaning — [Spectre Tokens](/design/tokens)
- Core CSS, utilities, Tailwind helpers, or class recipe logic — [Spectre
  UI](/design/ui)
- Local styling systems that diverge from the shared Spectre contract

## When to use this package

- you are building an Astro project and want Spectre UI components as
  first-class Astro components
- you need SSR-safe, type-safe component interfaces that bind the upstream
  Spectre UI recipe contract without reimplementing it
- you want to compose with Spectre's shared recipe helpers from TypeScript in
  an Astro project

## When not to use this package

- you are using a different framework (React, Vue, Svelte, etc.) — this
  package is Astro-only. Consider [Spectre Components](/design/components)
  for framework-agnostic web components instead
- you want to define custom tokens or override Spectre's design values — that
  belongs in [Spectre Tokens](/design/tokens)
- you want to add or change class recipes, CSS utilities, or Tailwind helpers
  — that belongs in [Spectre UI](/design/ui)
- you need a framework-agnostic styling contract — consume [Spectre
  UI](/design/ui) directly

## Relationship to the rest of Spectre

| Package | Owns |
|---|---|
| [Spectre Tokens](/design/tokens) | Design values, semantic token meaning, and token contracts |
| [Spectre UI](/design/ui) | CSS, utilities, Tailwind helpers, and type-safe class recipes |
| [Spectre Components](/design/components) | Framework-agnostic Lit web component behavior |
| Spectre UI Astro | Astro-native adapter delivery and framework ergonomics |

Tokens define meaning. UI defines the styling contract. Components define
framework-agnostic custom element behavior. This package defines Astro
delivery and consumes the upstream UI contract directly.

For the full component reference (props, slots, and examples for all 23
components), package exports, and stability table, see the [Spectre UI Astro
reference](/design/ui-astro-reference).
