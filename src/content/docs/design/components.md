---
title: Spectre Components
description: Lit-based custom elements for the Spectre design system — framework-agnostic, accessible, and light-DOM rendered.
---

`@phcdevworks/spectre-components` (current version **1.5.0**) is **Layer 3a of
the Spectre design suite**. It turns [Spectre Tokens](/design/tokens) and
[Spectre UI](/design/ui) styling contracts into reusable, accessible,
framework-agnostic custom elements — the canonical component implementation
layer for Spectre, usable directly or wrapped by downstream adapter packages.

## Why this package exists alongside Spectre UI

[Spectre UI](/design/ui) owns CSS: class recipes, Tailwind helpers, and the
styling contract that maps Spectre tokens to visual output. It ships CSS rules
and JavaScript class-name helpers — nothing more.

This package sits above that. It owns **behavior**: the Lit element classes that
apply those CSS recipes, forward ARIA attributes to native elements, manage
focus delegation, handle content projection, validate properties, and expose a
stable TypeScript API surface for downstream adapters.

| Layer | Package | Owns |
|---|---|---|
| L1 | [Spectre Tokens](/design/tokens) | Design values and semantic meaning |
| L2 | [Spectre UI](/design/ui) | CSS recipes and styling contracts |
| **L3a** | **Spectre Components** | **Lit web component behavior and API** |
| L3b | [Spectre UI Astro](/design/ui-astro) | Astro-native adapter delivery |
| L4 | Downstream adapters | Framework-specific delivery |

If you only need CSS class names, use [Spectre UI](/design/ui) directly. If you
need ready-to-use HTML elements with behavior, accessibility, and a typed API,
use this package.

## Key capabilities

- Lit-based custom elements built on the Custom Elements standard
- Renders in **light DOM** so Spectre UI global styles apply directly — no
  Shadow DOM piercing required
- ARIA attributes (`aria-label`, `aria-labelledby`, `aria-describedby`) are
  forwarded to the native inner element, not left on the host
- Focus and blur delegate to the inner native element
- Property validation with safe fallbacks
- Idempotent `defineSpectre*()` helpers — safe to call multiple times
- ESM + CJS dual build with TypeScript declaration files
- Tree-shakeable subpath exports per component

## Installation

```bash
npm install @phcdevworks/spectre-components @phcdevworks/spectre-ui @phcdevworks/spectre-tokens
```

## Quick start

### Plain HTML

Import the CSS layers and register all components. These are standard custom
elements — no build step required for consumption.

```html
<!doctype html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="/node_modules/@phcdevworks/spectre-tokens/index.css" />
    <link rel="stylesheet" href="/node_modules/@phcdevworks/spectre-ui/index.css" />
  </head>
  <body>
    <sp-label for="email">Email address</sp-label>
    <sp-input id="email" name="email" type="email" placeholder="you@example.com"></sp-input>

    <sp-button variant="primary" type="submit">Send</sp-button>
    <sp-button variant="ghost" type="button">Cancel</sp-button>

    <script type="module">
      import { defineSpectreComponents } from '/node_modules/@phcdevworks/spectre-components/dist/index.js'
      defineSpectreComponents()
    </script>
  </body>
</html>
```

### JavaScript / TypeScript module

```ts
import '@phcdevworks/spectre-tokens/index.css'
import '@phcdevworks/spectre-ui/index.css'

// Register everything at once
import { defineSpectreComponents } from '@phcdevworks/spectre-components'
defineSpectreComponents()

// Or register only what you use (tree-shakeable)
import { defineSpectreButton } from '@phcdevworks/spectre-components/button'
import { defineSpectreInput } from '@phcdevworks/spectre-components/input'
defineSpectreButton()
defineSpectreInput()
```

### Full form example

```html
<sp-fieldset legend="Contact preferences">
  <sp-label for="email">Email address</sp-label>
  <sp-input id="email" name="email" type="email" required></sp-input>

  <sp-label for="bio">Bio</sp-label>
  <sp-textarea id="bio" name="bio" rows="4" maxlength="500"></sp-textarea>

  <sp-label for="role">Role</sp-label>
  <sp-select id="role" name="role">
    <option value="admin">Admin</option>
    <option value="user">User</option>
  </sp-select>

  <sp-checkbox name="terms" value="accepted" required>
    I accept the <a href="/terms">terms of service</a>
  </sp-checkbox>

  <sp-radio name="plan" value="monthly">Monthly billing</sp-radio>
  <sp-radio name="plan" value="annual">Annual billing</sp-radio>

  <sp-button variant="primary" type="submit">Save</sp-button>
  <sp-button variant="ghost" type="reset">Reset</sp-button>
</sp-fieldset>
```

## Framework integration

These are standard HTML custom elements and work in every major framework that
supports the Custom Elements standard.

**React 19+** — properties and events work natively:

```tsx
<sp-input name="email" type="email" onInput={(e) => setValue(e.target.value)} />
```

**React 18 and below** — set properties via `ref` for property bindings, listen
for native events on the element:

```tsx
const inputRef = useRef(null)
useEffect(() => {
  if (inputRef.current) inputRef.current.invalid = true
}, [])

return <sp-input ref={inputRef} name="email" />
```

**Vue 3** — supports custom elements out of the box. Mark the `sp-*` prefix in
`compilerOptions` to suppress unknown-element warnings:

```ts
// vite.config.ts
plugins: [
  vue({
    template: {
      compilerOptions: { isCustomElement: (tag) => tag.startsWith('sp-') }
    }
  })
]
```

**Astro** — use components as static custom elements or with `client:load`
when JavaScript interactivity is needed:

```astro
---
import '@phcdevworks/spectre-tokens/index.css'
import '@phcdevworks/spectre-ui/index.css'
---
<script>
  import { defineSpectreComponents } from '@phcdevworks/spectre-components'
  defineSpectreComponents()
</script>
<sp-button variant="primary">Click me</sp-button>
```

For Astro projects, consider [Spectre UI Astro](/design/ui-astro) — it wraps
this package's styling contract in idiomatic Astro components with SSR-safe,
typed props and named slots.

## Accessibility

All components follow WCAG 2.1 AA baseline expectations by default.

- **ARIA forwarding** — `aria-label`, `aria-labelledby`, and `aria-describedby`
  set on the host element are automatically forwarded to the inner native element.
- **Native semantics** — every component renders a real native element
  (`<button>`, `<input>`, `<textarea>`, `<select>`, `<label>`, `<fieldset>`) or
  a semantic light-DOM container.
- **State communication** — `loading` sets `aria-busy="true"`, `invalid` sets
  `aria-invalid="true"`, `disabled` uses the native `disabled` attribute.
- **Focus delegation** — `.focus()` and `.blur()` called on the host are
  delegated to the inner native element.
- **Label association** — use `<sp-label for="id">` paired with `id` on the
  target control, or wrap controls inside `<sp-fieldset>`.

## Light DOM rendering

All components render in **light DOM**. This allows Spectre UI global CSS to
reach the native element directly without Shadow DOM piercing.

The native element is directly selectable using standard CSS combinators or the
stable internal data attributes:

```css
/* Target the native input inside sp-input */
sp-input input { font-size: 0.875rem; }

/* Stable internal hook — won't break if markup restructures */
sp-input [data-sp-input-native] { font-size: 0.875rem; }
```

## When to use this package

- You are building UI with the Spectre design system and want standards-based
  custom elements with baked-in behavior and accessibility
- You want typed form controls (`sp-button`, `sp-input`, `sp-select`, etc.) and
  display primitives (`sp-badge`, `sp-card`, `sp-rating`, etc.) that work in any
  framework or in plain HTML
- You are writing a framework adapter and need a reliable, stable element layer
  to wrap

## When not to use this package

- You only need CSS class names — use [Spectre UI](/design/ui) directly
- You are using Astro — consider [Spectre UI Astro](/design/ui-astro) for
  idiomatic Astro components with SSR-safe typed props
- You need framework-specific component files (JSX, SFCs, Astro components) —
  those belong in a downstream adapter package
- You are adding routing, shell logic, or app-startup orchestration — those are
  out of scope here

## Relationship to the rest of Spectre

| Package | Owns |
|---|---|
| [Spectre Tokens](/design/tokens) | Design values, semantic token meaning, and token contracts |
| [Spectre UI](/design/ui) | CSS, utilities, Tailwind helpers, and type-safe class recipes |
| Spectre Components | Lit web component behavior and API |
| [Spectre UI Astro](/design/ui-astro) | Astro-native adapter delivery and framework ergonomics |

Tokens define meaning. UI defines structure. Components define behavior.
Adapters define delivery.

For the full per-element attribute reference, events, content projection
details, and package exports, see the [Spectre Components
reference](/design/components-reference).
