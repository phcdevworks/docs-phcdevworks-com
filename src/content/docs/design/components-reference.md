---
title: Spectre Components — Reference
description: Attribute tables, events, content projection, and package exports for all 18 Spectre custom elements.
---

Reference for `@phcdevworks/spectre-components` (current version **1.5.0**).
For an introduction, installation, and framework integration, see the [Spectre
Components overview](/design/components).

All 18 elements render in **light DOM** and delegate ARIA attributes to the
inner native element. Each element exposes a stable internal CSS target via a
`data-sp-*-native` attribute. Boolean attributes follow the HTML convention —
presence means `true`, absence means `false`.

## Form controls

### sp-button

Renders a `<button>` with Spectre variant, size, loading, and pill support.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `variant` | `primary \| secondary \| ghost \| danger \| success \| cta \| accent` | `primary` | Visual style |
| `size` | `sm \| md \| lg` | `md` | Control size |
| `type` | `button \| submit \| reset` | `button` | Native button type |
| `label` | string | — | Text label (overridden by slotted content) |
| `loading` | boolean | `false` | Busy state — disables and shows `loading-label` |
| `loading-label` | string | `Loading` | Accessible text shown during loading |
| `disabled` | boolean | `false` | Disables the button |
| `full-width` | boolean | `false` | Spans full container width |
| `pill` | boolean | `false` | Fully-rounded corners |
| `name` | string | — | Form field name |
| `value` | string | `''` | Submitted value |
| `form` | string | — | Associates with a form by ID |
| `autofocus` | boolean | `false` | Autofocus on page load |
| `id` / `title` / `aria-*` | string | — | Forwarded to the native `<button>` |

**Events** — native button events bubble normally (`click`, `focus`, `blur`).

**Content projection** — children become the button content, overriding `label`:

```html
<sp-button variant="primary">
  <svg aria-hidden="true">...</svg>
  Save changes
</sp-button>
```

**Internal target** — `[data-sp-button-native]`

---

### sp-input

Renders an `<input>` with state, size, and type support.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `type` | `text \| email \| password \| search \| tel \| url \| number \| date \| datetime-local \| month \| time \| week` | `text` | Native input type |
| `size` | `sm \| md \| lg` | `md` | Control size |
| `name` | string | — | Form field name |
| `value` | string | `''` | Current value |
| `placeholder` | string | — | Placeholder text |
| `disabled` | boolean | `false` | Disables the input |
| `loading` | boolean | `false` | Busy state |
| `readonly` | boolean | `false` | Read-only mode |
| `required` | boolean | `false` | Marks field as required |
| `invalid` | boolean | `false` | Error state (`aria-invalid`) |
| `success` | boolean | `false` | Success state |
| `full-width` | boolean | `false` | Spans full container width |
| `pill` | boolean | `false` | Fully-rounded corners |
| `autocomplete` | string | — | Native autocomplete hint |
| `inputmode` | string | — | Virtual keyboard hint |
| `min` / `max` / `step` | string | — | Numeric / date range |
| `minlength` / `maxlength` | number | — | Character length constraints |
| `form` | string | — | Associates with a form by ID |
| `autofocus` | boolean | `false` | Autofocus on page load |
| `id` / `title` / `aria-*` | string | — | Forwarded to the native `<input>` |

**Events** — `input` and `change` fire from the native `<input>` and bubble.

**Internal target** — `[data-sp-input-native]`

---

### sp-textarea

Renders a `<textarea>` with row control and resize support. Accepts the same
attributes as `sp-input` except no `type`, `min`, `max`, or `step`.

| Additional attribute | Type | Default | Description |
|---|---|---|---|
| `rows` | number | `2` | Visible row height |

**Events** — `input` and `change` fire from the native `<textarea>`.

**Internal target** — `[data-sp-textarea-native]`

---

### sp-select

Renders a `<select>`. Pass `<option>` elements as children — they are projected
into the native select element. Accepts the same attributes as `sp-input`
minus `type`, `placeholder`, `readonly`, `inputmode`, `min`, `max`, `step`,
`minlength`, `maxlength`.

**Events** — `input` and `change` fire from the native `<select>`.

**Content projection** — `<option>` and `<optgroup>` children are moved into
the native `<select>`:

```html
<sp-select name="country" required>
  <option value="">Select a country</option>
  <optgroup label="Americas">
    <option value="us">United States</option>
    <option value="ca">Canada</option>
  </optgroup>
</sp-select>
```

**Internal target** — `[data-sp-select-native]`

---

### sp-checkbox

Renders a `<label>` wrapping an `<input type="checkbox">` with indicator.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `name` | string | — | Form field name |
| `value` | string | `on` | Submitted value when checked |
| `checked` | boolean | `false` | Checked state |
| `label` | string | — | Text label (overridden by slotted content) |
| `disabled` | boolean | `false` | Disables the checkbox |
| `loading` | boolean | `false` | Busy state |
| `required` | boolean | `false` | Marks field as required |
| `invalid` | boolean | `false` | Error state |
| `success` | boolean | `false` | Success state |
| `form` / `autofocus` / `id` / `title` / `aria-*` | — | — | Forwarded to native `<input>` |

**Events** — `input` and `change` fire from the native checkbox input.

**Content projection** — children become the label content (supports rich markup):

```html
<sp-checkbox name="terms" value="accepted" required>
  I accept the <a href="/terms">terms of service</a>
</sp-checkbox>
```

**Internal target** — `[data-sp-checkbox-native]`

---

### sp-radio

Renders a `<label>` wrapping an `<input type="radio">` with indicator. Group
multiple `sp-radio` elements by giving them the same `name`.

Accepts the same attributes as `sp-checkbox`. `value` defaults to `on`.

**Events** — `input` and `change` fire from the native radio input.

**Content projection** — same as `sp-checkbox`:

```html
<sp-radio name="plan" value="monthly">Monthly — $9/mo</sp-radio>
<sp-radio name="plan" value="annual">Annual — $90/yr</sp-radio>
```

**Internal target** — `[data-sp-radio-native]`

---

### sp-label

Renders a `<label>` with `for` forwarding. Use to associate a visible label
with any form control.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `for` | string | — | ID of the associated control |
| `id` / `title` / `aria-*` | string | — | Forwarded to native `<label>` |

**Content projection** — children become the label text (supports rich markup):

```html
<sp-label for="email">
  Email address <span aria-hidden="true">*</span>
</sp-label>
```

**Internal target** — `[data-sp-label-native]`

---

### sp-fieldset

Renders a `<fieldset>` with optional legend and group-level state.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `legend` | string | — | Text for the `<legend>` element |
| `disabled` | boolean | `false` | Disables all controls in the group |
| `loading` | boolean | `false` | Busy state |
| `invalid` | boolean | `false` | Group-level error state |
| `success` | boolean | `false` | Group-level success state |
| `form` / `name` / `id` / `title` / `aria-*` | string | — | Forwarded to native `<fieldset>` |

**Content projection** — children are placed inside the native `<fieldset>`
alongside the legend:

```html
<sp-fieldset legend="Billing address" name="billing">
  <sp-label for="city">City</sp-label>
  <sp-input id="city" name="city" required></sp-input>

  <sp-label for="zip">ZIP code</sp-label>
  <sp-input id="zip" name="zip" type="text" maxlength="10"></sp-input>
</sp-fieldset>
```

**Internal target** — `[data-sp-fieldset-native]`

---

## Display primitives

### sp-badge

Renders a `<span>` backed by the Spectre badge recipe.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `variant` | `primary \| secondary \| ghost \| danger \| success \| warning \| info \| accent \| cta \| neutral \| outline` | `primary` | Visual style |
| `size` | `sm \| md \| lg` | `md` | Badge size |
| `disabled` | boolean | `false` | Disabled visual state |
| `loading` | boolean | `false` | Busy visual state |
| `full-width` | boolean | `false` | Spans full container width |
| `id` / `title` / `aria-*` | string | — | Forwarded to the native `<span>` |

**Content projection** — children become the badge content.

**Internal target** — `[data-sp-badge-native]`

```html
<sp-badge variant="success" size="sm">Published</sp-badge>
<sp-badge variant="warning">Beta</sp-badge>
```

---

### sp-card

Renders a `<div>` container backed by the Spectre card recipe.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `variant` | `elevated \| flat \| outline \| ghost` | `elevated` | Visual style |
| `padded` | boolean | `true` | Applies card padding |
| `full-height` | boolean | `false` | Spans full container height |
| `interactive` | boolean | `false` | Applies interactive styling |
| `disabled` | boolean | `false` | Disabled visual state |
| `loading` | boolean | `false` | Busy visual state |
| `id` / `title` / `aria-*` | string | — | Forwarded to the native `<div>` |

**Content projection** — children become the card content.

**Internal target** — `[data-sp-card-native]`

```html
<sp-card variant="elevated">
  <h2>Card title</h2>
  <p>Card content.</p>
</sp-card>
```

---

### sp-icon-box

Renders a `<div>` icon container backed by the Spectre icon-box recipe.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `variant` | `primary \| secondary \| ghost \| danger \| success \| warning \| info \| accent \| cta \| neutral \| outline` | `primary` | Visual style |
| `size` | `sm \| md \| lg` | `md` | Icon-box size |
| `disabled` | boolean | `false` | Disabled visual state |
| `loading` | boolean | `false` | Busy visual state |
| `interactive` | boolean | `false` | Applies interactive styling |
| `pill` | boolean | `false` | Fully-rounded corners |
| `full-width` | boolean | `false` | Spans full container width |
| `id` / `title` / `aria-*` | string | — | Forwarded to the native `<div>` |

**Content projection** — children become the icon-box content.

**Internal target** — `[data-sp-icon-box-native]`

```html
<sp-icon-box variant="primary" size="md">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2l7 4v12l-7 4-7-4V6l7-4z" fill="currentColor" />
  </svg>
</sp-icon-box>
```

---

### sp-rating

Renders a read-only rating visualization with generated star spans.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `value` | number | `0` | Filled star count |
| `max` | number | `5` | Total star count |
| `size` | `sm \| md \| lg` | `md` | Rating size |
| `label` | string | — | Optional visible text beside the stars |
| `disabled` | boolean | `false` | Disabled visual state |
| `loading` | boolean | `false` | Busy visual state |
| `id` / `title` / `aria-*` | string | — | Forwarded to the rating container |

**Accessibility** — renders `role="img"` and computes an accessible label like
`Rating: 4 out of 5` unless `aria-label` is provided explicitly.

**Internal target** — `[data-sp-rating-native]`

```html
<sp-rating value="4" max="5" aria-label="4 out of 5 stars"></sp-rating>
<sp-rating value="4" max="5" label="4.0"></sp-rating>
```

---

### sp-testimonial

Renders a `<div>` testimonial container backed by the Spectre testimonial
recipe.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `variant` | `elevated \| flat \| outline \| ghost` | `elevated` | Visual style |
| `full-height` | boolean | `false` | Spans full container height |
| `interactive` | boolean | `false` | Applies interactive styling |
| `disabled` | boolean | `false` | Disabled visual state |
| `loading` | boolean | `false` | Busy visual state |
| `id` / `title` / `aria-*` | string | — | Forwarded to the native `<div>` |

**Content projection** — children become the testimonial content.

**Internal target** — `[data-sp-testimonial-native]`

```html
<sp-testimonial>
  <p>"Spectre cut our prototype time in half."</p>
  <img src="/avatars/jane.jpg" alt="Jane Doe" width="40" height="40" />
  <strong>Jane Doe</strong>
  <span>Frontend Lead</span>
</sp-testimonial>
```

---

### sp-alert

Renders a `<div role="alert">` backed by the Spectre alert recipe.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `variant` | `info \| success \| warning \| danger \| neutral` | `info` | Visual style |
| `size` | `sm \| md \| lg` | `md` | Alert size |
| `dismissed` | boolean | `false` | Dismissed visual state |
| `disabled` | boolean | `false` | Disabled visual state |
| `loading` | boolean | `false` | Busy visual state |
| `full-width` | boolean | `false` | Spans full container width |
| `id` / `title` / `aria-*` | string | — | Forwarded to the native `<div>` |

**Content projection** — children become the alert content.

**Accessibility** — renders `role="alert"` and reflects `loading` to `aria-busy`.

**Internal target** — `[data-sp-alert-native]`

```html
<sp-alert variant="success">Your changes have been saved.</sp-alert>
<sp-alert variant="danger" full-width>Something went wrong.</sp-alert>
```

---

### sp-avatar

Renders a `<div>` avatar container backed by the Spectre avatar recipe.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `size` | `xs \| sm \| md \| lg \| xl` | `md` | Avatar size |
| `shape` | `circle \| square` | `circle` | Avatar shape |
| `interactive` | boolean | `false` | Applies interactive styling |
| `disabled` | boolean | `false` | Disabled visual state |
| `loading` | boolean | `false` | Busy visual state |
| `full-width` | boolean | `false` | Spans full container width |
| `placeholder` | boolean | `false` | Placeholder background and color |
| `id` / `title` / `aria-*` | string | — | Forwarded to the native `<div>` |

**Content projection** — children become the avatar content (an `<img>`,
initials, or an icon).

**Accessibility** — reflects `loading` to `aria-busy`.

**Internal target** — `[data-sp-avatar-native]`

```html
<sp-avatar size="lg">
  <img src="/avatars/jane.jpg" alt="Jane Doe" />
</sp-avatar>

<sp-avatar shape="square" placeholder>JD</sp-avatar>
```

---

### sp-spinner

Renders a `<div role="status">` loading indicator backed by the Spectre
spinner recipe.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `variant` | `primary \| secondary \| success \| warning \| danger \| info \| neutral \| accent \| cta` | — | Arc color |
| `size` | `sm \| md \| lg` | `md` | Spinner size |
| `disabled` | boolean | `false` | Disabled visual state |
| `loading` | boolean | `true` | Busy visual state |
| `id` / `title` / `aria-*` | string | — | Forwarded to the native `<div>` |

**Accessibility** — renders `role="status"` and reflects `loading` to
`aria-busy`. Defaults `aria-label` to `Loading` unless overridden.

**Internal target** — `[data-sp-spinner-native]`

```html
<sp-spinner></sp-spinner>
<sp-spinner variant="primary" size="lg" aria-label="Saving…"></sp-spinner>
```

---

### sp-tag

Renders a `<span>` tag/chip backed by the Spectre tag recipe.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `variant` | `default \| primary \| secondary \| success \| warning \| danger \| info \| neutral \| accent \| cta \| outline \| ghost` | `default` | Tag color |
| `size` | `sm \| md \| lg` | `md` | Tag size |
| `interactive` | boolean | `false` | Applies interactive styling |
| `selected` | boolean | `false` | Selected / active visual state |
| `dismissible` | boolean | `false` | Reserves space for a dismiss icon |
| `disabled` | boolean | `false` | Disabled visual state |
| `loading` | boolean | `false` | Busy visual state |
| `full-width` | boolean | `false` | Spans full container width |
| `id` / `title` / `aria-*` | string | — | Forwarded to the native `<span>` |

**Content projection** — children become the tag label (and any projected
dismiss icon).

**Accessibility** — reflects `loading` to `aria-busy`.

**Internal target** — `[data-sp-tag-native]`

```html
<sp-tag variant="primary">New</sp-tag>
<sp-tag variant="success" selected>Active</sp-tag>
<sp-tag variant="info" dismissible>Removable</sp-tag>
```

---

### sp-pricing-card

Renders a `<div>` pricing card container backed by the Spectre pricing-card
recipe.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `featured` | boolean | `false` | Highlights the card as featured |
| `interactive` | boolean | `false` | Applies interactive styling |
| `disabled` | boolean | `false` | Disabled visual state |
| `loading` | boolean | `false` | Busy visual state |
| `full-height` | boolean | `false` | Spans full container height |
| `id` / `title` / `aria-*` | string | — | Forwarded to the native `<div>` |

**Content projection** — children become the pricing card content (heading,
price, feature list, call-to-action, etc.).

**Accessibility** — reflects `loading` to `aria-busy`.

**Internal target** — `[data-sp-pricing-card-native]`

```html
<sp-pricing-card featured>
  <h3>Pro</h3>
  <span>$29/mo</span>
  <p>For growing teams and businesses.</p>
  <ul>
    <li>Unlimited projects</li>
    <li>Priority support</li>
  </ul>
  <sp-button variant="primary" full-width type="button">Choose Pro</sp-button>
</sp-pricing-card>
```

---

## Package exports / API surface

### Root — `@phcdevworks/spectre-components`

Exports everything from all component entry points plus the bulk registration
helper.

**Bulk registration**

```ts
import { defineSpectreComponents } from '@phcdevworks/spectre-components'
defineSpectreComponents() // registers all 18 sp-* elements
```

**Per-component define helpers**

`defineSpectreButton`, `defineSpectreInput`, `defineSpectreTextarea`,
`defineSpectreSelect`, `defineSpectreCheckbox`, `defineSpectreRadio`,
`defineSpectreLabel`, `defineSpectreFieldset`, `defineSpectreBadge`,
`defineSpectreCard`, `defineSpectreIconBox`, `defineSpectreRating`,
`defineSpectreTestimonial`, `defineSpectreAlert`, `defineSpectreAvatar`,
`defineSpectreSpinner`, `defineSpectreTag`, `defineSpectrePricingCard`

**Element classes**

`SpectreButtonElement`, `SpectreInputElement`, `SpectreTextareaElement`,
`SpectreSelectElement`, `SpectreCheckboxElement`, `SpectreRadioElement`,
`SpectreLabelElement`, `SpectreFieldsetElement`, `SpectreBadgeElement`,
`SpectreCardElement`, `SpectreIconBoxElement`, `SpectreRatingElement`,
`SpectreTestimonialElement`, `SpectreAlertElement`, `SpectreAvatarElement`,
`SpectreSpinnerElement`, `SpectreTagElement`, `SpectrePricingCardElement`

**Constants and types** — all variant/size constants and their corresponding
TypeScript types (e.g. `spectreButtonVariants`, `SpectreButtonVariant`,
`spectreAlertVariants`, `SpectreAlertVariant`), plus the full set of Props
interfaces (`SpectreButtonProps`, `SpectreInputProps`, `SpectreTextareaProps`,
`SpectreSelectProps`, `SpectreCheckboxProps`, `SpectreRadioProps`,
`SpectreLabelProps`, `SpectreFieldsetProps`, `SpectreBadgeProps`,
`SpectreCardProps`, `SpectreIconBoxProps`, `SpectreRatingProps`,
`SpectreTestimonialProps`, `SpectreAlertProps`, `SpectreAvatarProps`,
`SpectreSpinnerProps`, `SpectreTagProps`, `SpectrePricingCardProps`).

### Subpath entry points

Each entry point registers only that element and exports only its surface.
Use subpaths when tree-shaking matters.

| Entry point | Registers | Key exports |
|---|---|---|
| `.../button` | `sp-button` | `defineSpectreButton`, `SpectreButtonElement`, button constants + types |
| `.../input` | `sp-input` | `defineSpectreInput`, `SpectreInputElement`, input constants + types |
| `.../textarea` | `sp-textarea` | `defineSpectreTextarea`, `SpectreTextareaElement`, `SpectreTextareaProps` |
| `.../select` | `sp-select` | `defineSpectreSelect`, `SpectreSelectElement`, `SpectreSelectProps` |
| `.../checkbox` | `sp-checkbox` | `defineSpectreCheckbox`, `SpectreCheckboxElement`, `SpectreCheckboxProps` |
| `.../radio` | `sp-radio` | `defineSpectreRadio`, `SpectreRadioElement`, `SpectreRadioProps` |
| `.../label` | `sp-label` | `defineSpectreLabel`, `SpectreLabelElement`, `SpectreLabelProps` |
| `.../fieldset` | `sp-fieldset` | `defineSpectreFieldset`, `SpectreFieldsetElement`, `SpectreFieldsetProps` |
| `.../badge` | `sp-badge` | `defineSpectreBadge`, `SpectreBadgeElement`, badge constants + types |
| `.../card` | `sp-card` | `defineSpectreCard`, `SpectreCardElement`, card constants + types |
| `.../icon-box` | `sp-icon-box` | `defineSpectreIconBox`, `SpectreIconBoxElement`, icon-box constants + types |
| `.../rating` | `sp-rating` | `defineSpectreRating`, `SpectreRatingElement`, rating constants + types |
| `.../testimonial` | `sp-testimonial` | `defineSpectreTestimonial`, `SpectreTestimonialElement`, testimonial constants + types |
| `.../alert` | `sp-alert` | `defineSpectreAlert`, `SpectreAlertElement`, alert constants + types |
| `.../avatar` | `sp-avatar` | `defineSpectreAvatar`, `SpectreAvatarElement`, avatar constants + types |
| `.../spinner` | `sp-spinner` | `defineSpectreSpinner`, `SpectreSpinnerElement`, spinner constants + types |
| `.../tag` | `sp-tag` | `defineSpectreTag`, `SpectreTagElement`, tag constants + types |
| `.../pricing-card` | `sp-pricing-card` | `defineSpectrePricingCard`, `SpectrePricingCardElement`, `SpectrePricingCardProps` |

Size constants are shared between `sp-input`, `sp-textarea`, and `sp-select`.
Import `spectreInputSizes` / `SpectreInputSize` from `.../input` when you need
them alongside textarea or select entry points.

## Troubleshooting

**Styles not applying** — The Spectre CSS layers must load before components are
registered. Import `@phcdevworks/spectre-tokens/index.css` and
`@phcdevworks/spectre-ui/index.css` at the top of your entry module.

**Custom element already defined** — Each `defineSpectre*()` helper is
idempotent; calling it twice is safe. If you see conflicts, two different
versions of this package may be loaded on the same page.

**Properties not reflecting in React 18** — React 18 sets custom element
properties as attributes. Use a `ref` to set properties imperatively, or
upgrade to React 19 which supports custom elements fully.
