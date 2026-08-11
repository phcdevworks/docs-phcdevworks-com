---
title: Spectre Tokens — Reference
description: Full token model, public contract guarantees, protected token families, and package exports for @phcdevworks/spectre-tokens.
---

Reference for `@phcdevworks/spectre-tokens` (current version **4.3.0**). For an
introduction, installation, and quick start, see the [Spectre Tokens
overview](/design/tokens).

`contract.manifest.json` is the machine-readable contract authority for this
package. Every contract-facing surface (runtime exports, CSS variables,
Tailwind theme, README) must match that manifest. Validation fails fast on
token overwrite across files, undocumented namespaces, output drift, and
README/manifest mismatch.

## Token model

The generated token object includes these public, stable top-level namespaces:

- `colors`
- `space`
- `layout`
- `radii`
- `typography`
- `font`
- `shadows`
- `breakpoints`
- `zIndex`
- `transitions`
- `animations`
- `opacity`
- `aspectRatios`
- `icons`
- `border`
- `accessibility`
- `buttons`
- `forms`
- `link`
- `surface`
- `text`
- `component`
- `modes`

The exported runtime token object is a flattened string-based tree generated
from the package's source token data. Source-only wrapper fields such as
`value` and `metadata` are internal generation details and are not part of the
public package contract.

## Package exports / API surface

### Root package

`@phcdevworks/spectre-tokens` exports:

- `default` / `tokens` — the runtime token object
- `tailwindTheme` — the generated Tailwind theme object
- `tailwindPreset` — a Tailwind preset that wires `tailwindTheme` into a
  consumer's Tailwind config via `presets`
- `generateCssVariables` — generates a CSS variable block from a token object
- TypeScript types: `SpectreTokens`, `TailwindTheme`, `SpectreModeTokens`,
  `SpectreModeName`

```ts
import tokens, {
  generateCssVariables,
  tailwindPreset,
  tailwindTheme
} from '@phcdevworks/spectre-tokens'

const css = generateCssVariables(tokens, {
  selector: ':root',
  prefix: 'sp'
})
```

### CSS entry point

- `@phcdevworks/spectre-tokens/index.css` — the generated CSS variable
  contract. All CSS custom properties use the `--sp-` prefix.

```css
@import '@phcdevworks/spectre-tokens/index.css';

.card {
  background: var(--sp-surface-card);
  color: var(--sp-text-on-surface-default);
}
```

### Design-tool export

- `dist/tokens.dtcg.json` — a W3C DTCG-format export for Figma / Tokens Studio
  synchronization, with required top-level keys `colors`, `space`, `radii`,
  `surface`, `text`, `buttons`, `forms`, and `component`.

## Themes and modes

The package includes mode-aware semantic tokens under `modes`, with `default`
and `dark` mode definitions in the generated output. The dark-mode override
block targets the `[data-spectre-theme="dark"]` attribute.

```ts
import tokens from '@phcdevworks/spectre-tokens'

const darkPage = tokens.modes.dark.surface.page
const darkText = tokens.modes.dark.text.onPage.default
```

Guidance:

- Prefer semantic tokens for theme-aware UI.
- Prefer `modes` when a consumer explicitly needs mode-specific values.
- Do not invent local light/dark token contracts when this package already
  provides the semantic path.
- `modes.default` and `modes.dark` are the only stable mode names today.
  Adding a new mode is additive only if it doesn't break the existing mode
  shape; renaming or removing a mode is breaking.

## Public contract guarantees

This package guarantees these public output surfaces, all validated against
`contract.manifest.json`:

- JavaScript runtime tokens, with named exports `tokens`, `tailwindTheme`,
  `tailwindPreset`, and `generateCssVariables`
- TypeScript contract exports including `SpectreTokens`, `TailwindTheme`,
  `SpectreModeTokens`, and `SpectreModeName`
- CSS variables in `dist/index.css`
- Tailwind theme output derived from the token contract
- the W3C DTCG export in `dist/tokens.dtcg.json`

### Required token paths

`contract.manifest.json` lists specific token paths that consumers may rely on
as stable across minor and patch releases, including:

- `surface.page`, `surface.card`, `surface.input`
- `text.onPage.default`, `text.onPage.muted`, `text.onSurface.default`,
  `text.onSurface.muted`
- `buttons.primary.bg`, `buttons.primary.text`
- `forms.default.bg`, `forms.default.border`, `forms.default.text`,
  `forms.default.placeholder`
- `component.badge.*`, `component.iconBox.*`, `component.nav.*`,
  `component.modal.*`, `component.toast.*`, `component.tooltip.*`,
  `component.dropdown.*`
- `modes.default.surface.page`, `modes.dark.surface.page`

Paths not listed in `contract.manifest.json` are internal and may change
without notice. The `borders` namespace (plural) is explicitly banned and must
not be reintroduced as a public contract namespace.

### Required CSS variables

Including (non-exhaustive): `--sp-color-brand-500`, `--sp-space-16`,
`--sp-layout-section-padding-md`, `--sp-radius-md`, `--sp-font-family-sans`,
`--sp-font-md-size`, `--sp-surface-page`, `--sp-text-on-page-default`,
`--sp-button-primary-bg`, `--sp-form-default-border`,
`--sp-animation-fadein-duration`, `--sp-focus-ring-width`. Dark-mode variants
are required for `--sp-surface-page`, `--sp-text-on-page-default`,
`--sp-component-card-text`, `--sp-badge-success-bg`, `--sp-nav-bg`,
`--sp-modal-bg`, `--sp-toast-success-bg`, `--sp-tooltip-bg`, and
`--sp-dropdown-bg`.

## Protected token families

The following semantic groups are locked. Their values must not change without
explicit approval from Bradley Potts. This applies to all contributors and all
AI agents — apparent visual improvements still require human sign-off.

| Protected group | Backed by |
|---|---|
| `success` | `colors.success` palette |
| `warning` | `colors.warning` palette |
| `danger` semantic roles | `colors.error` palette |
| CTA / primary action / brand-action | `colors.brand` + `buttons.cta` |

An intentional change to a protected group requires updating the recorded
baseline as part of an approved, classified release.

## Downstream boundaries

Downstream packages should never redefine locally:

- the meaning of `surface`, `text`, `component`, `buttons`, `forms`, `link`,
  or `modes`
- protected semantic groups such as `success`, `warning`, `danger`, or CTA /
  brand-action semantics
- public namespace shape that this package already exports
- their own `--sp-*` CSS custom properties in the same stylesheet scope — use
  a distinct prefix if you need to extend the variable set

Downstream packages may:

- compose UI structure on top of this contract
- map these tokens into framework-specific delivery
- use raw palette values when the usage is intentionally non-semantic

## Upgrade expectations for consumers

Consumers should treat this package as a SemVer-governed contract.

- additive token paths are safe for existing consumers
- semantic shifts may keep the same path but still affect visual meaning
- renames and removals are breaking, and only ever happen in a major release
- generated JS, TS, CSS, and Tailwind outputs are expected to stay aligned

### Change classification

Every contract-affecting change is classified in `CHANGELOG.md [Unreleased]`
with a `Contract change type:` line before release:

| Classification | When to use | Examples |
|---|---|---|
| `additive` | New tokens, new paths, new CSS variables — existing consumers unaffected | Adding a namespace, adding a token inside an existing family |
| `semantic change` | Path stays the same but meaning, intent, or visual output shifts | Adjusting the role of an existing surface or text token |
| `breaking` | Existing consumers may need code changes | Renaming a token path, removing a namespace, changing mode names |

### Deprecation lifecycle

Tokens move through three states:

- **active** — part of the stable public contract with no planned removal
- **deprecated** — marked for future removal via `metadata.deprecated` (with
  `since`, optional `replacedBy`, and optional `removeIn`); remains exported
  but consumers should migrate
- **removed** — eliminated in a major release

Deprecated tokens remain in the public export for at least one minor release
cycle before removal, and removal always requires a major version bump with a
`Contract change type: breaking` classification.

## Tailwind preset composition

The exported `tailwindPreset` extends the Tailwind color scale with these
top-level namespaces: `brand`, `neutral`, `success`, `warning`, `error`,
`info`, `black`, and `white`.

- Use the preset via the `presets` array, not via manual `theme.extend`
  merging — using it outside `presets` is unsupported.
- Do not override `brand`, `neutral`, `success`, `warning`, or `error` in a
  consumer config that also uses this preset. Those namespaces back protected
  semantic groups.
- If a consumer extends `colors` independently, test for collisions with these
  namespaces before shipping.

## Consumer checklist

- import tokens from the package root when you need runtime values
- import `index.css` when you need generated CSS variables
- use `tailwindPreset` (via `presets`) when you need Tailwind theme integration
- prefer semantic namespaces for UI behavior
- use raw palette values only when fixed palette access is intentional
- do not redefine Spectre semantic contracts locally, and do not define your
  own `--sp-*` variables in the same stylesheet scope
