---
title: Spectre UI
description: Token-backed CSS bundles, Tailwind helpers, and class recipes — Layer 2 of the Spectre design system.
---

`@phcdevworks/spectre-ui` (current version **4.0.0**) is **Layer 2 of the
Spectre design suite**. It turns [Spectre Tokens](/design/tokens) into reusable
CSS bundles, Tailwind tooling, and type-safe class recipes for downstream
adapters and apps.

**For:** adapter authors and app developers who need a stable, token-driven
styling contract without re-implementing class logic themselves.

**Not for:** authoring design tokens (that belongs in [Spectre
Tokens](/design/tokens)) or building framework-specific components (that
belongs in adapter packages such as [Spectre UI Astro](/design/ui-astro) or
[Spectre Components](/design/components)).

## Architecture

| Layer | Package or consumer | Responsibility |
|---|---|---|
| 1 | [Spectre Tokens](/design/tokens) | Defines design values and semantic token meaning |
| 2 | Spectre UI | Translates tokens into CSS bundles, Tailwind helpers, and class recipes |
| 3 | Adapters and apps, e.g. [Spectre UI Astro](/design/ui-astro), [Spectre Components](/design/components) | Deliver Spectre through framework-native ergonomics |

`spectre-components` is a separate component package that can wrap this
styling contract in Lit web components. This package owns Layer 2 only: it
does not deliver components and it does not define tokens.

## Key capabilities

- Ships precompiled CSS: `index.css`, `base.css`, `components.css`, and
  `utilities.css`
- Provides Tailwind theme and preset helpers built from Spectre tokens
- Exports type-safe class recipes for shared UI patterns
- Keeps CSS classes and recipe APIs aligned
- Gives adapters and apps a stable styling contract instead of re-implementing
  classes
- Enforces a zero-hex approach so visual values stay tied to
  [Spectre Tokens](/design/tokens)

## What this package owns

- Token-backed CSS class contracts
- Precompiled CSS bundles for root, base, components, and utilities
- Framework-agnostic class recipe functions
- Tailwind preset and theme helpers
- Contract validation that keeps CSS, recipes, exports, and docs aligned

## What this package does not own

- Design token values or semantic visual meaning — those belong in [Spectre
  Tokens](/design/tokens)
- Framework components, templates, hooks, or runtime behavior — those belong
  in adapter packages
- App-level layout, routing, data fetching, or product-specific composition
- Local redefinition of token meaning — consume the token contract rather than
  recreate it

## Installation

```bash
npm install @phcdevworks/spectre-ui
```

## Quick start

### Vanilla HTML — CSS classes only

No framework needed. Import the CSS and use the `sp-*` classes directly:

```html
<!doctype html>
<html>
  <head>
    <link
      rel="stylesheet"
      href="node_modules/@phcdevworks/spectre-ui/dist/index.css"
    />
  </head>
  <body>
    <button class="sp-btn sp-btn--primary sp-btn--md">Save</button>
    <button class="sp-btn sp-btn--ghost sp-btn--md">Cancel</button>
    <span class="sp-badge sp-badge--success sp-badge--sm">Published</span>

    <div class="sp-card sp-card--elevated">
      <p>Card content</p>
    </div>

    <div class="sp-input-wrapper">
      <label class="sp-label">Email</label>
      <input class="sp-input sp-input--md" type="email" />
    </div>
  </body>
</html>
```

### CSS import (bundler or framework)

Import the full stylesheet:

```ts
import '@phcdevworks/spectre-ui/index.css'
```

Or import the bundles separately:

```ts
import '@phcdevworks/spectre-ui/base.css'
import '@phcdevworks/spectre-ui/components.css'
import '@phcdevworks/spectre-ui/utilities.css'
```

### Tailwind preset usage

Use Spectre tokens as the source of truth for your Tailwind theme:

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'
import { createSpectreTailwindPreset } from '@phcdevworks/spectre-ui/tailwind'
import tokens from '@phcdevworks/spectre-tokens'

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx,html}'],
  presets: [createSpectreTailwindPreset({ tokens })]
}

export default config
```

### Class recipe usage

Class recipes are the stable styling API for adapters and apps. They return
predictable class strings and keep behavior consistent across frameworks.

```ts
import {
  getBadgeClasses,
  getButtonClasses,
  getPricingCardClasses
} from '@phcdevworks/spectre-ui'

const cta = getButtonClasses({ variant: 'primary', size: 'lg' })
const badge = getBadgeClasses({ variant: 'success', size: 'sm' })
const pricingCard = getPricingCardClasses({ featured: true })
```

## When to use this package

Use Spectre UI when you need:

- precompiled, token-backed CSS ready to drop into any framework
- a Tailwind preset or theme helper built from Spectre tokens
- stable, type-safe class recipes for shared UI patterns (buttons, badges,
  cards, inputs, etc.) that you want to remain consistent across frameworks
- a styling contract that is enforced through tests and CI rather than
  conventions alone

## When not to use this package

Do not use Spectre UI when you need to:

- **Define new design values** — add them to [Spectre Tokens](/design/tokens)
  instead
- **Deliver framework components** — use an adapter package such as [Spectre
  UI Astro](/design/ui-astro) or [Spectre Components](/design/components)
  that wraps this package in framework-native components
- **Use raw Tailwind utilities without a shared recipe contract** — import
  Tailwind directly and use the Spectre preset; you don't need this package's
  recipe layer for one-off UI built with utility classes

## What belongs here vs elsewhere

| What | Where it lives |
|---|---|
| Semantic color values, spacing scale, type scale | [Spectre Tokens](/design/tokens) |
| Token-to-CSS variable mapping | **here** |
| Precompiled CSS bundles | **here** |
| Class recipe functions (input → class string) | **here** |
| Tailwind preset and theme helpers | **here** |
| Astro, React, Vue, Lit, Svelte components | Adapter packages (e.g. [Spectre UI Astro](/design/ui-astro), [Spectre Components](/design/components)) |
| WordPress shortcodes or PHP templates | [Spectre Base](/design/base) |
| App-level layout, routing, or data fetching | Consuming apps |
| New design decisions (new colors, new spacing) | [Spectre Tokens](/design/tokens) |

Golden rule: this package consumes tokens and exposes class contracts. It does
not define tokens and it does not deliver framework components.

## Relationship to the rest of Spectre

- [Spectre Tokens](/design/tokens) defines design values and semantic meaning
- Spectre UI turns those tokens into reusable CSS, Tailwind tooling, and
  type-safe class recipes
- [Spectre Components](/design/components) turns those styling contracts into
  framework-agnostic Lit web components
- Adapters and apps (e.g. [Spectre UI Astro](/design/ui-astro)) consume
  Spectre UI instead of re-implementing its styling layer

For the full recipe catalog, package exports, and contract guarantees, see the
[Spectre UI reference](/design/ui-reference).
