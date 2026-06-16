---
title: Spectre Tokens
description: The Spectre design-token contract — colors, spacing, typography, and semantic UI roles, generated as JS/TS, CSS variables, and a Tailwind preset.
---

`@phcdevworks/spectre-tokens` (current version **2.9.0**) is the design-token
package of the Spectre system. It is the only source of design values across
the whole Spectre ecosystem — no downstream package or app should define raw
hex, px, or rem values when a Spectre token already covers the same concept.

It defines the visual language, semantic roles, and token contracts that
downstream consumers rely on: `@phcdevworks/spectre-ui` turns these contracts
into CSS and recipes, and adapter packages (`spectre-ui-astro`,
`spectre-components`) translate them for specific frameworks and runtimes.

## What this package owns

- Visual language expressed as token data
- Semantic roles and token contracts consumed downstream
- Generated token outputs for JavaScript, TypeScript, CSS variables, and a
  Tailwind theme preset
- Theme and mode (light/dark) definitions used by downstream consumers

## What this package does not own

- Component structure or composition — that belongs to
  [Spectre UI](/design/ui)
- Framework-specific delivery — that belongs to adapter packages such as
  [Spectre UI Astro](/design/ui-astro)
- Local redefinition of token meaning — downstream consumers should consume
  these contracts rather than recreate them

## When to use this package

- You are building a Spectre ecosystem package or app and need the visual
  language contract
- You need design token values in JavaScript, TypeScript, CSS variables, or a
  Tailwind theme
- You want a single source of truth for semantic roles: `surface`, `text`,
  `component`, `buttons`, `forms`, `link`, `modes`
- You are consuming tokens as named values, not inventing new token meaning

## When not to use this package

- You need UI components or component structure — use
  [Spectre UI](/design/ui) (or an adapter built on it)
- You want to define your own token meaning or override Spectre semantics
  locally — this package is the authority; downstream consumers consume, not
  redefine

## Installation

```bash
npm install @phcdevworks/spectre-tokens
```

## Quick start

### CSS import

Import the generated CSS variables:

```css
@import '@phcdevworks/spectre-tokens/index.css';
```

### Token usage

Load the token object in JavaScript or TypeScript:

```ts
import tokens from '@phcdevworks/spectre-tokens'

const card = {
  background: tokens.surface.page,
  color: tokens.text.onPage.default,
  padding: tokens.space['16'],
  borderRadius: tokens.radii.md
}
```

### Tailwind preset usage

Use the generated Tailwind preset when you want the package to populate theme
values from the token contract:

```ts
// tailwind.config.ts
import { tailwindPreset } from '@phcdevworks/spectre-tokens'

export default {
  presets: [tailwindPreset]
}
```

## Semantic tokens vs raw palette tokens

Semantic tokens express UI meaning. Raw palette tokens expose the fixed color
ramp. Always prefer semantic tokens for UI surfaces, text, buttons, forms, and
mode-aware styling.

### Semantic namespaces (prefer for all UI work)

| Namespace | What it expresses |
|---|---|
| `surface` | Background roles: page, card, overlay, sidebar, hover, selected, active, divider |
| `text` | Foreground roles: default, muted, subtle, meta, on-surface, on-page |
| `component` | Role-specific tokens for icon boxes, badges, ratings, testimonials, pricing cards, nav, modal, toast, tooltip, dropdown |
| `buttons` | Button state tokens: default, hover, active, disabled, CTA |
| `forms` | Form state tokens: default, focused, error, disabled |
| `link` | Inline link color roles: default, hover, active, visited |
| `modes` | Mode-aware overrides under `modes.default` and `modes.dark` |

```ts
import tokens from '@phcdevworks/spectre-tokens'

// Semantic — always prefer this for UI
const card = {
  background: tokens.surface.card,
  color: tokens.text.onSurface.default,
}

// Mode-aware semantic
const dark = {
  background: tokens.modes.dark.surface.page,
  color: tokens.modes.dark.text.onPage.default,
}
```

### Raw palette (use sparingly)

The `colors` namespace exposes the raw palette ramp. Use it only when fixed
color access is intentional — data visualization, compatibility layers, or
tooling that inspects palette data directly.

```ts
// Raw palette — only when fixed color access is deliberate
const chart = {
  series1: tokens.colors.brand[500],
  series2: tokens.colors.neutral[300],
}
```

Do not use `colors` as a substitute for semantic tokens in normal UI surfaces.

## Relationship to the rest of Spectre

Spectre keeps responsibilities separate:

- `@phcdevworks/spectre-tokens` defines visual language, semantic roles, and
  token contracts
- [Spectre UI](/design/ui) turns those contracts into reusable CSS, Tailwind
  tooling, and shared styling behavior
- Adapter packages ([Spectre UI Astro](/design/ui-astro), [Spectre
  Components](/design/components)) translate Spectre contracts for
  framework-specific delivery

For the full token model, contract guarantees, and package exports, see the
[Spectre Tokens reference](/design/tokens-reference).
