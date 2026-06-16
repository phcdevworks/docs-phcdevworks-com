---
title: Spectre Design System
description: An overview of the Spectre design system — design tokens, UI styling, framework adapters, web components, and the WordPress theme shell.
---

Spectre is the PHCDevworks design system. It is built as a layered set of
packages, each with a single responsibility. Every layer consumes the layer
below it rather than redefining values or structure locally — this keeps the
visual language consistent across every product that adopts Spectre.

## The layers

| Layer | Package | What it provides |
|---|---|---|
| L1 — Tokens | [Spectre Tokens](/design/tokens) | Design-token contract: colors, spacing, typography, shadows, and semantic UI roles, generated as JS/TS, CSS variables, and a Tailwind preset. |
| L2 — UI | [Spectre UI](/design/ui) | Precompiled CSS, Tailwind helpers, and framework-agnostic class recipes built on top of the token contract. |
| L3a — Components | [Spectre Components](/design/components) | Framework-agnostic Lit web components (`<sp-button>`, `<sp-card>`, etc.) built on the Spectre UI styling contract. |
| L3b — UI Astro | [Spectre UI Astro](/design/ui-astro) | SSR-safe Astro components (`<SpButton>`, `<SpCard>`, etc.) that wrap the same styling contract for Astro projects. |
| Shell — Base | [Spectre Base](/design/base) | A Vite-built WordPress theme shell that consumes tokens, UI, and components without redefining any of them. |

## How the layers fit together

```
spectre-tokens (L1)
  └─ spectre-ui (L2)
       ├─ spectre-components (L3a — Lit web components)
       └─ spectre-ui-astro (L3b — Astro components)
            └─ spectre-base (WordPress theme shell)
```

- **Tokens are the only source of design values.** No package above L1 defines
  raw hex, px, or rem values — everything is consumed by reference from
  `@phcdevworks/spectre-tokens`.
- **UI defines structure and styling behavior.** `spectre-ui` turns token
  values into CSS classes, Tailwind theme helpers, and recipe functions that
  every higher layer reuses.
- **Components and adapters deliver framework ergonomics.** `spectre-components`
  and `spectre-ui-astro` both wrap the same `spectre-ui` contract — one as
  framework-agnostic custom elements, the other as native Astro components.
- **Base is a consumer, not a source.** `spectre-base` is a WordPress theme
  built on top of the other four packages; it does not define its own design
  values or component contracts.

## Where to start

- Building a new app or site on Spectre? Start with [Spectre Tokens](/design/tokens)
  to understand the design-token contract, then choose the layer that matches
  your stack — [Spectre UI](/design/ui) for plain CSS/Tailwind, [Spectre
  Components](/design/components) for framework-agnostic web components, or
  [Spectre UI Astro](/design/ui-astro) for Astro projects.
- Building a WordPress site? Start with [Spectre Base](/design/base).
