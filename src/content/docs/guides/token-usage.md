---
title: Using Spectre Tokens
description: A practical walkthrough for consuming Spectre design tokens in a real project — CSS variables, the runtime token object, and the Tailwind preset.
---

This guide walks through the day-to-day patterns for consuming
[Spectre Tokens](/design/tokens) in an app or package. For the full contract
and package exports, see the [Spectre Tokens reference](/design/tokens-reference).

## Install and import

```bash
npm install @phcdevworks/spectre-tokens
```

Most projects only need the generated CSS variables:

```css
@import '@phcdevworks/spectre-tokens/index.css';
```

This gives every `--sp-*` custom property to any stylesheet in the project,
including ones written outside a build pipeline.

## Pattern 1 — CSS custom properties

The most common pattern: reference `--sp-*` variables directly in CSS. Never
hardcode a hex, px, or rem value when a token already covers the same
concept.

```css
.card {
  background: var(--sp-surface-card);
  color: var(--sp-text-on-surface-default);
  padding: var(--sp-space-16);
  border-radius: var(--sp-radius-md);
}
```

## Pattern 2 — Runtime token object (JS/TS)

When you need a token value in JavaScript or TypeScript logic — not just CSS
— import the runtime object:

```ts
import tokens from '@phcdevworks/spectre-tokens'

const cardStyle = {
  background: tokens.surface.card,
  color: tokens.text.onSurface.default,
  padding: tokens.space['16'],
}
```

Prefer the semantic namespaces (`surface`, `text`, `component`, `buttons`,
`forms`, `link`) over the raw `colors` palette. Semantic tokens carry UI
meaning and stay mode-aware; the raw palette is a fixed ramp meant for
deliberate non-semantic use (data visualization, compatibility shims).

## Pattern 3 — Tailwind preset

If the project uses Tailwind, wire the generated preset into `tailwind.config.ts`
via `presets` rather than hand-copying values into `theme.extend`:

```ts
// tailwind.config.ts
import { tailwindPreset } from '@phcdevworks/spectre-tokens'

export default {
  presets: [tailwindPreset]
}
```

This keeps Tailwind's utility classes (`bg-brand-500`, `text-neutral-700`,
etc.) backed by the same token contract as the CSS variables and runtime
object — there is one source of truth, expressed three ways.

## Mode-aware (dark mode) tokens

Tokens that vary between light and dark mode live under `modes.default` and
`modes.dark`. The CSS variable layer already reacts to the
`[data-spectre-theme="dark"]` attribute automatically — you don't need to
branch in CSS:

```css
/* This works in both modes without an explicit dark-mode selector */
.page {
  background: var(--sp-surface-page);
}
```

Only reach for `tokens.modes.dark.*` directly in JS/TS when you need a
mode-specific value outside of CSS (for example, generating a chart theme
at runtime):

```ts
import tokens from '@phcdevworks/spectre-tokens'

const darkPageBg = tokens.modes.dark.surface.page
```

## Common mistakes

- **Hardcoding a value that already has a token.** If you're about to type a
  hex code, `px` value, or `rem` value, check whether a Spectre token already
  expresses that concept first.
- **Reaching for the raw `colors` palette instead of a semantic token.** Use
  `colors.brand[500]` only when fixed palette access is intentional (e.g.
  chart series colors) — never as a substitute for `surface`, `text`, or
  `buttons` tokens in normal UI.
- **Defining a local `--sp-*` variable.** This package owns the `--sp-`
  namespace. If you need to extend the variable set, use a distinct prefix.
- **Redefining token meaning downstream.** If a token's semantic role doesn't
  fit your use case, that's a sign the right move is requesting a new token
  upstream in `spectre-tokens` — not reinterpreting an existing one locally.

## Next steps

- For component-level usage (turning these tokens into buttons, cards, nav
  bars, etc.) see [Using Spectre UI Components](/guides/component-usage).
- For the full token model, protected token families, and upgrade/versioning
  expectations, see the [Spectre Tokens reference](/design/tokens-reference).
