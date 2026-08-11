---
title: Spectre UI — Reference
description: Recipe catalog, package exports, and contract guarantees for @phcdevworks/spectre-ui.
---

Reference for `@phcdevworks/spectre-ui` (current version **4.0.0**). For an
introduction, installation, and quick start, see the [Spectre UI
overview](/design/ui).

`ui-contract.manifest.json` is the machine-readable contract authority for
this package's public styling surface. It covers CSS entry points, root
package constants and recipe function exports, Tailwind subpath exports, and
recipe families, variants, sizes, and public states.

## Recipe quick reference

All recipe functions accept a plain options object and return a class string.
All options are optional and fall back to sensible defaults.

| Recipe | Function | Variants | Sizes | Common boolean flags |
|---|---|---|---|---|
| Button | `getButtonClasses` | `primary` `secondary` `ghost` `danger` `success` `cta` `accent` | `sm` `md` `lg` | `disabled` `loading` `fullWidth` `pill` `iconOnly` |
| Badge | `getBadgeClasses` | `primary` `secondary` `success` `warning` `danger` `neutral` `info` `ghost` `accent` `cta` | `sm` `md` `lg` | `interactive` `disabled` `loading` `fullWidth` |
| Card | `getCardClasses` | `elevated` `flat` `outline` `ghost` | — | `interactive` `padded` `fullHeight` `disabled` `loading` |
| Input | `getInputClasses` | — | `sm` `md` `lg` | `disabled` `loading` `fullWidth` `pill` |
| Input state | `getInputClasses` | `state`: `default` `error` `success` `disabled` `loading` | — | — |
| IconBox | `getIconBoxClasses` | `primary` `secondary` `success` `warning` `danger` `info` `neutral` `ghost` `accent` `cta` | `sm` `md` `lg` | `interactive` `disabled` `loading` `pill` `fullWidth` |
| PricingCard | `getPricingCardClasses` | — | — | `featured` `interactive` `disabled` `loading` `fullHeight` |
| Rating | `getRatingClasses` | — | `sm` `md` `lg` | `interactive` `disabled` `loading` `pill` `fullWidth` |
| Testimonial | `getTestimonialClasses` | `elevated` `flat` `outline` `ghost` | — | `interactive` `disabled` `loading` `fullHeight` |
| Alert | `getAlertClasses` | `info` `success` `warning` `danger` `neutral` | `sm` `md` `lg` | `dismissed` |
| Avatar | `getAvatarClasses` | — | `sm` `md` `lg` `xl` | shape: `circle` `square` |
| Tag | `getTagClasses` | `default` `primary` `secondary` `success` `warning` `danger` `info` `neutral` `accent` `cta` `outline` `ghost` | `sm` `md` `lg` | `dismissible` `selected` `disabled` `loading` `interactive` `fullWidth` |
| Spinner | `getSpinnerClasses` | — | `sm` `md` `lg` | — |
| Nav | `getNavClasses` | — | — | `bordered` `sticky` `fullWidth` |
| Toast | `getToastClasses` | `info` `success` `warning` `danger` | — | `dismissed` `fullWidth` |
| Tooltip | `getTooltipClasses` | placement: `top` `bottom` `left` `right` | — | `visible` |
| Dropdown | `getDropdownClasses` | menu placement: `bottom-start` `bottom-end` `top-start` `top-end` | — | `fullWidth`, item: `active` `disabled` |
| Modal | `getModalClasses` | — | — | `open` `fullWidth` |
| Container | `getContainerClasses` | `maxWidth`: `none` `prose` | — | — |
| Stack | `getStackClasses` | `direction`: `vertical` `horizontal`, `basis`: `none` `sidebar`, `align`: `center` `stretch` | — | — |
| Section | `getSectionClasses` | — | — | — (no options) |
| Grid | `getGridClasses` | `columns`: `1` `2` `3` `4` `6` `12` | `gap`: `sm` `md` `lg` | — |
| Sidebar | `getSidebarClasses` | — | — | `bordered` |
| Sidebar link | `getSidebarLinkClasses` | — | — | `active` `disabled` `hovered` `focused` |
| Sidebar backdrop | `getSidebarBackdropClasses` | — | — | — (no options) |
| Sidebar toggle | `getSidebarToggleClasses` | — | — | — (no options) |
| Footer | `getFooterClasses` | — | — | `bordered` `fullWidth` |

Each recipe family also exports sub-element helpers for its structural parts
(labels, wrappers, sub-containers, text elements) — see root recipe helper
functions below.

## Package exports / API surface

### Root package

The root package exports CSS path constants plus the recipe functions.

Root constants:

- `spectreStyles`
- `spectreBaseStylesPath`
- `spectreComponentsStylesPath`
- `spectreIndexStylesPath`
- `spectreUtilitiesStylesPath`

Root recipe functions:

- `getAlertClasses`
- `getAvatarClasses`
- `getBadgeClasses`
- `getButtonClasses`
- `getCardClasses`
- `getContainerClasses`
- `getDropdownClasses`
- `getFooterClasses`
- `getGridClasses`
- `getIconBoxClasses`
- `getInputClasses`
- `getModalClasses`
- `getNavClasses`
- `getPricingCardClasses`
- `getRatingClasses`
- `getSectionClasses`
- `getSidebarClasses`
- `getSpinnerClasses`
- `getStackClasses`
- `getTagClasses`
- `getTestimonialClasses`
- `getToastClasses`
- `getTooltipClasses`

Root recipe helper functions:

- `getDropdownItemClasses`
- `getDropdownMenuClasses`
- `getInputErrorMessageClasses`
- `getInputHelperTextClasses`
- `getInputLabelClasses`
- `getInputWrapperClasses`
- `getModalOverlayClasses`
- `getNavLinkClasses`
- `getNavLinksClasses`
- `getPricingCardBadgeClasses`
- `getPricingCardDescriptionClasses`
- `getPricingCardPriceClasses`
- `getPricingCardPriceContainerClasses`
- `getRatingStarClasses`
- `getRatingStarsClasses`
- `getRatingTextClasses`
- `getSidebarBackdropClasses`
- `getSidebarLinkClasses`
- `getSidebarToggleClasses`
- `getTestimonialAuthorClasses`
- `getTestimonialAuthorInfoClasses`
- `getTestimonialAuthorNameClasses`
- `getTestimonialAuthorTitleClasses`
- `getTestimonialQuoteClasses`
- `getToastIconClasses`

The root package also re-exports the related recipe option, variant, size,
and state TypeScript types defined by those recipes.

### Tailwind entry point

`@phcdevworks/spectre-ui/tailwind` exports:

- `createSpectreTailwindPreset`
- `createSpectreTailwindTheme`

### CSS entry points

- `@phcdevworks/spectre-ui/index.css`
- `@phcdevworks/spectre-ui/base.css`
- `@phcdevworks/spectre-ui/components.css`
- `@phcdevworks/spectre-ui/utilities.css`

## Public contract guarantees

`ui-contract.manifest.json` defines the public styling contract for this
package — CSS entry points, root package constants and recipe function
exports, Tailwind subpath exports, and recipe families, variants, sizes, and
public states. Validation fails when README documentation omits
manifest-declared exports, when export snapshots drift, when Tailwind
artifacts drift, or when CSS contract coverage no longer matches the declared
surface.

## Downstream boundaries

Downstream packages should never redefine locally:

- Spectre design token meaning
- CSS class semantics already provided by this package
- recipe option names, variants, sizes, or states
- package CSS entry point behavior
- Tailwind helper export names

Downstream packages may:

- compose application UI with the exported classes
- wrap recipe functions in framework-specific adapters
- import CSS entry points directly in applications or adapter packages
- extend app-specific layout around Spectre contracts

## Upgrade expectations for consumers

Consumers should treat this package as a SemVer-governed styling contract.

- additive recipes, variants, states, and helpers are intended to be safe for
  existing consumers
- semantic shifts may keep the same class or option name but still affect
  visual output
- renames, removals, and behavior changes to existing classes or options are
  breaking
- generated JS, TypeScript declarations, CSS bundles, Tailwind exports,
  README docs, and `ui-contract.manifest.json` are expected to stay aligned

### Change classification

Contract-affecting changes are classified in `CHANGELOG.md [Unreleased]`
before release:

| Classification | When to use | Examples |
|---|---|---|
| `additive` | New public styling surface that does not break existing consumers | Adding a recipe helper, variant, state, or CSS entry point |
| `semantic change` | Public name remains but behavior or visual meaning shifts | Adjusting an existing class or recipe option to map to different token intent |
| `breaking` | Existing consumers may need code changes | Renaming or removing a class, option, export, or CSS entry point |

Renames and removals are always breaking regardless of perceived scope.

## Consumer checklist

- import `@phcdevworks/spectre-ui/index.css` for the full styling contract
- import split CSS entry points only when you need bundle-level control
- use recipe functions when framework adapters need stable class strings
- use `@phcdevworks/spectre-ui/tailwind` for Tailwind theme integration
- consume tokens from [Spectre Tokens](/design/tokens) instead of inventing
  visual values locally
- treat `dist/` as generated package output, not an authoring surface
- do not add framework runtime logic to this package
