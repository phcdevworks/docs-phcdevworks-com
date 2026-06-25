---
title: Spectre UI Astro — Component Reference
description: Props, slots, and examples for all 23 Spectre UI Astro components, plus package exports and component stability.
---

Reference for `@phcdevworks/spectre-ui-astro` (current version **3.1.0**). For
an introduction, installation, and quick start, see the [Spectre UI Astro
overview](/design/ui-astro).

All components are SSR-safe and ship no client-side JavaScript. Styling comes
from the upstream [Spectre UI](/design/ui) stylesheet — this package adds no
local CSS. Every component accepts a `class` prop for additional classes and
spreads unknown props onto the root element.

## SpButton

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `ButtonVariant` | — | Visual style: `"primary"` `"secondary"` `"ghost"` |
| `size` | `ButtonSize` | — | Size: `"sm"` `"md"` `"lg"` |
| `as` | `"button" \| "a" \| "span" \| "div" \| "li"` | `"button"` | Rendered element |
| `href` | `string` | — | URL when `as="a"` |
| `type` | `"button" \| "submit" \| "reset"` | `"button"` | Button type (button elements only) |
| `disabled` | `boolean` | — | Disables the element; suppresses navigation on anchors |
| `loading` | `boolean` | — | Loading state; implies `disabled` |
| `fullWidth` | `boolean` | — | Stretches to fill its container |
| `iconOnly` | `boolean` | — | Removes text padding for icon-only buttons |
| `pill` | `boolean` | — | Fully rounded corners |
| `hovered` | `boolean` | — | Force-applies hover styling |
| `focused` | `boolean` | — | Force-applies focus styling |
| `active` | `boolean` | — | Force-applies active styling |
| `aria-label` | `string` | — | Accessible label |
| `tabindex` | `number` | — | Tab index override |
| `class` | `string` | — | Additional CSS classes |

```astro
<SpButton variant="primary" size="lg">Get started</SpButton>
<SpButton variant="ghost" as="a" href="/docs">Read docs</SpButton>
<SpButton variant="primary" type="submit">Save</SpButton>
<SpButton variant="primary" loading>Saving…</SpButton>
<SpButton variant="secondary" as="a" href="/item" disabled>Unavailable</SpButton>
```

## SpCard

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `CardVariant` | — | Visual style: `"elevated"` `"outline"` `"flat"` `"ghost"` |
| `as` | `"div" \| "section" \| "article" \| "aside" \| "a" \| "button" \| "li" \| …` | `"div"` | Rendered element |
| `interactive` | `boolean` | — | Adds hover/focus styles; adds `role="button"` for non-native elements |
| `padded` | `boolean` | — | Applies inner padding |
| `fullHeight` | `boolean` | — | Stretches to full container height |
| `disabled` | `boolean` | — | Disables the card; suppresses navigation on anchors |
| `loading` | `boolean` | — | Loading state |
| `href` | `string` | — | URL when `as="a"` |
| `aria-label` | `string` | — | Accessible label |
| `class` | `string` | — | Additional CSS classes |

```astro
<SpCard variant="elevated">
  <h2>Card title</h2>
  <p>Card content goes here.</p>
</SpCard>

<!-- Semantic article markup -->
<SpCard variant="outline" as="article">
  <h2>Blog post title</h2>
</SpCard>

<!-- Linked card -->
<SpCard variant="elevated" as="a" href="/post/1" interactive aria-label="Read post">
  <h2>Clickable card</h2>
</SpCard>
```

The default slot renders any child content.

## SpInput

`SpInput` renders a labeled input group: wrapper, optional label, input,
optional helper text, and optional error message.

When `label`, `helperText`, or `errorMessage` is present, an explicit `id` is
**required**. This is an SSR invariant — without a stable `id`, the
`for`/`aria-describedby` associations would be nondeterministic. The component
throws at render time if the requirement is violated.

| Prop | Type | Default | Description |
|---|---|---|---|
| `id` | `string` | — | **Required** when using `label`, `helperText`, or `errorMessage` |
| `label` | `string` | — | Renders a `<label>` associated with the input |
| `helperText` | `string` | — | Renders helper text below the input |
| `errorMessage` | `string` | — | Renders an error message; suppresses `helperText` |
| `state` | `InputState` | — | `"default"` `"success"` `"error"` `"disabled"` `"loading"` |
| `size` | `InputSize` | — | Size: `"sm"` `"md"` `"lg"` |
| `fullWidth` | `boolean` | — | Stretches input to fill its container |
| `pill` | `boolean` | — | Fully rounded corners |
| `disabled` | `boolean` | — | Disables the input |
| `loading` | `boolean` | — | Loading state |
| `as` | `"div" \| "form" \| "fieldset" \| …` | `"div"` | Rendered wrapper element |
| `class` | `string` | — | Additional CSS classes on the `<input>` element |
| `…rest` | — | — | Any HTML input attribute (`type`, `name`, `placeholder`, `required`, etc.) |

```astro
<!-- Standalone — no label, no id required -->
<SpInput type="search" placeholder="Search…" />

<!-- Labeled with helper text — id required -->
<SpInput
  id="email"
  label="Email"
  name="email"
  type="email"
  placeholder="you@example.com"
  helperText="We will never share your email."
/>

<!-- Validation error — errorMessage suppresses helperText -->
<SpInput
  id="password"
  label="Password"
  type="password"
  state="error"
  errorMessage="Password must be at least 8 characters."
/>

<!-- Disabled field -->
<SpInput
  id="api-key"
  label="API Key"
  value="••••••••"
  state="disabled"
  disabled
/>

<!-- Pill shape, small size -->
<SpInput id="search-pill" label="Search" size="sm" pill placeholder="Search…" />
```

## SpAlert

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `AlertVariant` | `"info"` | Visual style: `"info"` `"success"` `"warning"` `"danger"` `"neutral"` |
| `size` | `AlertSize` | `"md"` | Size: `"sm"` `"md"` `"lg"` |
| `as` | `"div" \| "section" \| "aside" \| "article"` | `"div"` | Rendered element |
| `dismissed` | `boolean` | — | Applies dismissed state styling |
| `interactive` | `boolean` | — | Adds hover/focus styles and `tabindex="0"` |
| `fullWidth` | `boolean` | — | Stretches to full width |
| `disabled` | `boolean` | — | Disables the alert |
| `loading` | `boolean` | — | Loading state (also sets disabled behavior) |
| `id` | `string` | — | Element ID |
| `aria-label` | `string` | — | Accessible label |
| `aria-describedby` | `string` | — | Associates a description element |
| `class` | `string` | — | Additional CSS classes |

```astro
<SpAlert variant="success">Your changes have been saved.</SpAlert>
<SpAlert variant="warning" size="sm">Session expires soon.</SpAlert>
<SpAlert variant="danger" dismissed>This alert has been dismissed.</SpAlert>
<SpAlert variant="info" as="aside" aria-label="Info notice">Read the docs.</SpAlert>
```

## SpAvatar

| Prop | Type | Default | Description |
|---|---|---|---|
| `shape` | `AvatarShape` | `"circle"` | Shape: `"circle"` `"square"` |
| `size` | `AvatarSize` | `"md"` | Size: `"xs"` `"sm"` `"md"` `"lg"` `"xl"` |
| `as` | `"div" \| "span" \| "figure" \| "a" \| "button"` | `"div"` | Rendered element |
| `interactive` | `boolean` | — | Adds hover/focus styles |
| `disabled` | `boolean` | — | Disables the avatar |
| `loading` | `boolean` | — | Loading state |
| `fullWidth` | `boolean` | — | Stretches to full width |
| `placeholder` | `boolean` | — | Applies placeholder styling |
| `href` | `string` | — | URL when `as="a"` |
| `aria-label` | `string` | — | Accessible label |
| `class` | `string` | — | Additional CSS classes |

```astro
<SpAvatar size="lg">
  <img src="/avatars/jane.jpg" alt="Jane Doe" />
</SpAvatar>

<SpAvatar shape="square" size="sm" placeholder>
  JD
</SpAvatar>

<SpAvatar as="a" href="/profile" interactive>
  <img src="/avatars/jane.jpg" alt="View profile" />
</SpAvatar>
```

## SpBadge

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `BadgeVariant` | — | Visual style: `"primary"` `"success"` `"warning"` `"danger"` `"info"` |
| `size` | `BadgeSize` | — | Size: `"sm"` `"md"` `"lg"` |
| `as` | `"span" \| "div" \| "a" \| "button" \| "li" \| "time" \| "mark"` | `"span"` | Rendered element |
| `interactive` | `boolean` | — | Adds hover/focus styles |
| `fullWidth` | `boolean` | — | Stretches to full width |
| `disabled` | `boolean` | — | Disables the badge |
| `loading` | `boolean` | — | Loading state |
| `href` | `string` | — | URL when `as="a"` |
| `datetime` | `string` | — | Datetime value when `as="time"` |
| `aria-label` | `string` | — | Accessible label |
| `class` | `string` | — | Additional CSS classes |

```astro
<SpBadge variant="success">Active</SpBadge>
<SpBadge variant="warning" size="sm">Beta</SpBadge>
<SpBadge variant="primary" as="a" href="/changelog" interactive>New</SpBadge>
<SpBadge variant="danger" as="time" datetime="2025-01-01">Jan 2025</SpBadge>
```

## SpIconBox

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `IconBoxVariant` | — | Color: `"primary"` `"success"` `"warning"` `"danger"` `"info"` |
| `size` | `IconBoxSize` | — | Size: `"sm"` `"md"` `"lg"` |
| `as` | `"span" \| "div" \| "i" \| "a" \| "button" \| "li"` | `"span"` | Rendered element |
| `pill` | `boolean` | — | Fully rounded corners |
| `interactive` | `boolean` | — | Adds hover/focus styles |
| `disabled` | `boolean` | — | Disables the icon box |
| `loading` | `boolean` | — | Loading state |
| `href` | `string` | — | URL when `as="a"` |
| `aria-label` | `string` | — | Accessible label (use when the icon conveys standalone meaning) |
| `class` | `string` | — | Additional CSS classes |

```astro
<!-- Decorative icon — mark the icon aria-hidden -->
<SpIconBox variant="primary" size="md">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2l7 4v12l-7 4-7-4V6l7-4z" fill="currentColor" />
  </svg>
</SpIconBox>

<!-- Standalone meaning — label the component -->
<SpIconBox variant="success" size="sm" aria-label="Success">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M20 6 9 17l-5-5" />
  </svg>
</SpIconBox>
```

Use `aria-hidden="true"` on the icon when surrounding context already
describes it. Use `aria-label` on the component when the icon box conveys
standalone meaning.

## SpPricingCard

Named slots map to the structural sections of the pricing card. Slot wrappers
render only when their slot is populated — empty slots produce no markup.

| Prop | Type | Default | Description |
|---|---|---|---|
| `featured` | `boolean` | — | Highlights the card as the recommended tier |
| `fullHeight` | `boolean` | — | Stretches to full container height |
| `interactive` | `boolean` | — | Adds hover/focus styles |
| `disabled` | `boolean` | — | Disables the card |
| `loading` | `boolean` | — | Loading state |
| `as` | `"div" \| "section" \| "article" \| …` | `"div"` | Rendered element |
| `class` | `string` | — | Additional CSS classes |

| Slot | Description |
|---|---|
| `header` | Plan name or heading |
| `badge` | Tag or label (e.g., "Popular") |
| `price` | Price string or element |
| `description` | Short plan description |
| *(default)* | Feature list or body content |
| `footer` | CTA button or footer action |

```astro
<SpPricingCard featured>
  <h3 slot="header">Pro</h3>
  <span slot="badge">Popular</span>
  <span slot="price">$29/mo</span>
  <span slot="description">For growing teams and businesses.</span>
  <ul>
    <li>Unlimited projects</li>
    <li>Advanced analytics</li>
    <li>Priority support</li>
  </ul>
  <SpButton slot="footer" variant="primary" fullWidth>Choose Pro</SpButton>
</SpPricingCard>
```

## SpRating

Renders a star rating. Stars are built from `value`/`max`. Provide a custom
star SVG via the `star-icon` slot. The star container is `aria-hidden="true"`
— always pass `aria-label` for screen readers.

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `number` | `0` | Number of filled stars |
| `max` | `number` | `5` | Total star count |
| `size` | `RatingSize` | — | Size |
| `interactive` | `boolean` | — | Adds hover/focus styles |
| `disabled` | `boolean` | — | Disables the rating |
| `loading` | `boolean` | — | Loading state |
| `fullWidth` | `boolean` | — | Stretches to fill container |
| `pill` | `boolean` | — | Fully rounded corners |
| `as` | `"div" \| "span" \| "section" \| …` | `"div"` | Rendered element |
| `aria-label` | `string` | — | Screen-reader description of the rating value |
| `class` | `string` | — | Additional CSS classes |

| Slot | Description |
|---|---|
| `star-icon` | Custom star icon. Receives `isFilled` as a slot prop. Defaults to `★`. |
| *(default)* | Optional text shown after the stars (e.g., "4.8 out of 5") |

```astro
<!-- Basic rating -->
<SpRating value={4} max={5} aria-label="4 out of 5 stars" />

<!-- With visible text -->
<SpRating value={4} max={5} aria-label="4 out of 5 stars">
  4.0 out of 5
</SpRating>

<!-- Custom star icon -->
<SpRating value={3} max={5} aria-label="3 out of 5">
  <svg slot="star-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2l3 6.5 7 1-5 4.9 1.2 7L12 18l-6.2 3.4 1.2-7L2 9.5l7-1z" fill="currentColor" />
  </svg>
</SpRating>
```

## SpTestimonial

Named slots map to the structural sections of the testimonial. Slot wrappers
render only when their slot is populated.

| Prop | Type | Default | Description |
|---|---|---|---|
| `fullHeight` | `boolean` | — | Stretches to full container height |
| `interactive` | `boolean` | — | Adds hover/focus styles |
| `disabled` | `boolean` | — | Disables the testimonial |
| `loading` | `boolean` | — | Loading state |
| `as` | `"div" \| "section" \| "article" \| "blockquote" \| …` | `"div"` | Rendered element |
| `class` | `string` | — | Additional CSS classes |

| Slot | Description |
|---|---|
| `quote` | Quotation text |
| `author-image` | Author avatar or image element |
| `author-name` | Author display name |
| `author-title` | Author job title or affiliation |

```astro
<SpTestimonial as="blockquote">
  <p slot="quote">
    "Spectre UI cut our Astro prototype time in half."
  </p>
  <img
    slot="author-image"
    src="/avatars/jane.jpg"
    alt="Jane Doe"
    width="40"
    height="40"
  />
  <span slot="author-name">Jane Doe</span>
  <span slot="author-title">Frontend Lead at Acme Corp</span>
</SpTestimonial>
```

## SpSpinner

A non-interactive status indicator. Renders as `<div role="status">` with a
default `aria-label` of `"Loading"`.

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `SpinnerVariant` | — | Color variant: `"primary"` `"secondary"` `"success"` `"warning"` `"danger"` `"info"` `"neutral"` `"accent"` `"cta"` |
| `size` | `SpinnerSize` | `"md"` | Size: `"sm"` `"md"` `"lg"` |
| `disabled` | `boolean` | — | Disabled state |
| `loading` | `boolean` | — | Loading state (also sets disabled behavior) |
| `aria-label` | `string` | `"Loading"` | Accessible label for the spinner |
| `id` | `string` | — | Element ID |
| `class` | `string` | — | Additional CSS classes |

```astro
<SpSpinner />
<SpSpinner variant="primary" size="lg" />
<SpSpinner loading aria-label="Saving changes" />
```

## SpTag

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `TagVariant` | `"default"` | Visual style: `"default"` `"primary"` `"secondary"` `"success"` `"warning"` `"danger"` `"info"` `"neutral"` `"accent"` `"cta"` `"outline"` `"ghost"` |
| `size` | `TagSize` | — | Size: `"sm"` `"md"` `"lg"` |
| `as` | `"span" \| "div" \| "li" \| "a" \| "button"` | `"span"` | Rendered element |
| `dismissible` | `boolean` | — | Applies dismissible styling |
| `selected` | `boolean` | — | Applies selected state and `aria-pressed` |
| `interactive` | `boolean` | — | Adds hover/focus styles and `tabindex="0"` |
| `fullWidth` | `boolean` | — | Stretches to full width |
| `disabled` | `boolean` | — | Disables the tag |
| `loading` | `boolean` | — | Loading state (also sets disabled behavior) |
| `href` | `string` | — | URL when `as="a"` |
| `id` | `string` | — | Element ID |
| `aria-label` | `string` | — | Accessible label |
| `aria-describedby` | `string` | — | Associates a description element |
| `class` | `string` | — | Additional CSS classes |

```astro
<SpTag>Default</SpTag>
<SpTag variant="primary" size="sm">New</SpTag>
<SpTag variant="success" selected>Active</SpTag>
<SpTag variant="info" dismissible>Removable</SpTag>
<SpTag as="a" href="/docs" variant="neutral" interactive>Docs</SpTag>
<SpTag as="button" variant="primary" disabled>Unavailable</SpTag>
```

## SpDropdown

| Prop | Type | Default | Description |
|---|---|---|---|
| `fullWidth` | `boolean` | — | Stretches to full width |
| `as` | `"div" \| "nav"` | `"div"` | Rendered element |
| `id` | `string` | — | Element ID |
| `class` | `string` | — | Additional CSS classes |

`SpDropdown` renders the dropdown container only. Build the menu and items in
the default slot using the re-exported `getDropdownMenuClasses` and
`getDropdownItemClasses` helpers, since open/closed state and per-item
active/disabled/hover/focus state are consumer-driven.

```astro
---
import { SpDropdown, getDropdownMenuClasses, getDropdownItemClasses } from '@phcdevworks/spectre-ui-astro'

const menuClass = getDropdownMenuClasses({ placement: 'bottom-start', open: true })
const itemClass = getDropdownItemClasses()
const activeItemClass = getDropdownItemClasses({ active: true })
---

<SpDropdown>
  <button>Options</button>
  <div class={menuClass} role="menu">
    <a class={activeItemClass} href="/profile" role="menuitem">Profile</a>
    <a class={itemClass} href="/settings" role="menuitem">Settings</a>
  </div>
</SpDropdown>
```

## SpModal

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | Applies open styling to the overlay and modal, and toggles `aria-hidden` |
| `fullWidth` | `boolean` | — | Stretches the modal to full width |
| `as` | `"div" \| "section"` | `"div"` | Rendered element for the modal |
| `id` | `string` | — | Element ID for the modal |
| `aria-label` | `string` | — | Accessible label for the modal |
| `aria-labelledby` | `string` | — | Associates a title element |
| `aria-describedby` | `string` | — | Associates a description element |
| `class` | `string` | — | Additional CSS classes for the modal |

`SpModal` renders an overlay element (`getModalOverlayClasses`) wrapping the
modal element (`getModalClasses`), with `role="dialog"` and
`aria-modal="true"`. Toggling `open` is consumer-driven (no client-side JS is
included).

```astro
<SpModal open aria-labelledby="modal-title">
  <h2 id="modal-title">Confirm deletion</h2>
  <p>This action cannot be undone.</p>
</SpModal>
```

## SpNav

| Prop | Type | Default | Description |
|---|---|---|---|
| `bordered` | `boolean` | — | Applies a border |
| `sticky` | `boolean` | — | Applies sticky positioning |
| `fullWidth` | `boolean` | — | Stretches to full width |
| `as` | `"nav" \| "div" \| "header" \| "section"` | `"nav"` | Rendered element |
| `id` | `string` | — | Element ID |
| `aria-label` | `string` | — | Accessible label for the nav landmark |
| `class` | `string` | — | Additional CSS classes |

`SpNav` renders the nav container only. Build links in the default slot using
the re-exported `getNavLinksClasses` and `getNavLinkClasses` helpers, since
per-link active/disabled/hover/focus state is consumer-driven.

```astro
---
import { SpNav, getNavLinksClasses, getNavLinkClasses } from '@phcdevworks/spectre-ui-astro'

const linksClass = getNavLinksClasses()
const activeLinkClass = getNavLinkClasses({ active: true })
const linkClass = getNavLinkClasses()
---

<SpNav bordered sticky aria-label="Main">
  <div class={linksClass}>
    <a class={activeLinkClass} href="/" aria-current="page">Home</a>
    <a class={linkClass} href="/about">About</a>
  </div>
</SpNav>
```

## SpToast

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `ToastVariant` | `"info"` | Visual style: `"info"` `"success"` `"warning"` `"danger"` |
| `dismissed` | `boolean` | — | Applies dismissed state styling |
| `fullWidth` | `boolean` | — | Stretches to full width |
| `as` | `"div" \| "li" \| "section"` | `"div"` | Rendered element |
| `id` | `string` | — | Element ID |
| `aria-label` | `string` | — | Accessible label |
| `class` | `string` | — | Additional CSS classes |

`SpToast` renders `role="status"`, `aria-live="polite"`, and
`aria-atomic="true"` by default. Pass content to a named `icon` slot to wrap
it in `getToastIconClasses` styling; the wrapper is only rendered when the
slot is used.

```astro
<SpToast variant="success">Changes saved.</SpToast>
<SpToast variant="danger">
  <Fragment slot="icon"><svg aria-hidden="true">...</svg></Fragment>
  Something went wrong.
</SpToast>
```

## SpTooltip

| Prop | Type | Default | Description |
|---|---|---|---|
| `placement` | `TooltipPlacement` | `"top"` | Placement: `"top"` `"bottom"` `"left"` `"right"` |
| `visible` | `boolean` | — | Applies visible state styling |
| `as` | `"div" \| "span"` | `"div"` | Rendered element |
| `id` | `string` | — | Element ID |
| `role` | `string` | `"tooltip"` | ARIA role |
| `class` | `string` | — | Additional CSS classes |

```astro
<SpTooltip placement="bottom" visible>Save your changes</SpTooltip>
```

## SpContainer

| Prop | Type | Default | Description |
|---|---|---|---|
| `maxWidth` | `ContainerMaxWidth` | — | Max-width variant: `"prose"` (omit for the default page max-width) |
| `as` | `"div" \| "section" \| "main" \| "article" \| "aside"` | `"div"` | Rendered element |
| `id` | `string` | — | Element ID |
| `aria-label` | `string` | — | Accessible label |
| `aria-describedby` | `string` | — | Associates a description element |
| `class` | `string` | — | Additional CSS classes |

```astro
<SpContainer>
  <p>Default page-width container.</p>
</SpContainer>

<SpContainer maxWidth="prose" as="article">
  <p>Readable prose-width column.</p>
</SpContainer>
```

## SpStack

| Prop | Type | Default | Description |
|---|---|---|---|
| `direction` | `StackDirection` | `"vertical"` | Layout direction: `"vertical"` `"horizontal"` |
| `basis` | `StackBasis` | — | Fixed flex-child width: `"sidebar"` (omit for `flex: 1` auto-sizing) |
| `align` | `StackAlign` | `"center"` | Cross-axis alignment: `"center"` `"stretch"` |
| `as` | `"div" \| "section" \| "ul" \| "ol" \| "nav"` | `"div"` | Rendered element |
| `id` | `string` | — | Element ID |
| `aria-label` | `string` | — | Accessible label |
| `aria-describedby` | `string` | — | Associates a description element |
| `class` | `string` | — | Additional CSS classes |

```astro
<!-- Vertical stack (default) -->
<SpStack>
  <h2>Title</h2>
  <p>Body content</p>
</SpStack>

<!-- Horizontal app-shell row: fixed-width sidebar stretched to match main content height -->
<SpStack direction="horizontal" align="stretch" as="div">
  <SpStack basis="sidebar" as="div">
    <SpSidebar>...</SpSidebar>
  </SpStack>
  <SpContainer as="main">...</SpContainer>
</SpStack>
```

## SpSection

`SpSection` accepts no recipe options — it renders the `sp-section` class with
no variants.

| Prop | Type | Default | Description |
|---|---|---|---|
| `as` | `"section" \| "div" \| "article" \| "aside" \| "main"` | `"section"` | Rendered element |
| `id` | `string` | — | Element ID |
| `aria-label` | `string` | — | Accessible label |
| `aria-describedby` | `string` | — | Associates a description element |
| `class` | `string` | — | Additional CSS classes |

```astro
<SpSection as="main">
  <h1>Page title</h1>
  <p>Page content.</p>
</SpSection>
```

## SpGrid

| Prop | Type | Default | Description |
|---|---|---|---|
| `columns` | `1 \| 2 \| 3 \| 4 \| 6 \| 12` | `1` | Target column count at `breakpoints.lg`+ |
| `gap` | `GridGap` | `"md"` | Gap size: `"sm"` `"md"` `"lg"` |
| `as` | `"div" \| "section" \| "ul" \| "ol"` | `"div"` | Rendered element |
| `id` | `string` | — | Element ID |
| `aria-label` | `string` | — | Accessible label |
| `aria-describedby` | `string` | — | Associates a description element |
| `class` | `string` | — | Additional CSS classes |

Column count is responsive by convention: 1 column below `breakpoints.md`,
half the target count at `md`, full target count at `breakpoints.lg`+.

```astro
<SpGrid columns={3} gap="lg">
  <SpCard>Item 1</SpCard>
  <SpCard>Item 2</SpCard>
  <SpCard>Item 3</SpCard>
</SpGrid>
```

## SpSidebar

`SpSidebar` is the first component in this adapter to own interactive client
state. It renders a wrapper element carrying `data-sidebar-open` (closed by
default, SSR-safe with no layout shift on hydration), a hamburger toggle
button, and a backdrop element. An inline `<script>` binds the toggle click
handler and backdrop-tap-to-close behavior, scoped per-instance via a
`data-sidebar-bound` guard — no framework hydration directive is required.

| Prop | Type | Default | Description |
|---|---|---|---|
| `bordered` | `boolean` | — | Applies a border |
| `as` | `"aside" \| "div" \| "nav"` | `"aside"` | Rendered element for the sidebar content |
| `id` | `string` | — | Element ID |
| `aria-label` | `string` | — | Accessible label for the sidebar landmark |
| `toggleLabel` | `string` | `"Toggle sidebar"` | Accessible label for the hamburger toggle button |
| `class` | `string` | — | Additional CSS classes |

| Slot | Description |
|---|---|
| `toggle-icon` | Custom toggle icon markup. Defaults to `&#9776;` (☰). Pass an empty `<Fragment slot="toggle-icon" />` to suppress the icon entirely. |
| *(default)* | Sidebar content (typically nav links) |

```astro
<SpStack direction="horizontal" align="stretch" as="div">
  <SpStack basis="sidebar" as="div">
    <SpSidebar bordered aria-label="Documentation navigation" toggleLabel="Toggle docs nav">
      <nav>
        <a href="/">Introduction</a>
      </nav>
    </SpSidebar>
  </SpStack>
  <SpContainer as="main">...</SpContainer>
</SpStack>
```

Use `getSidebarLinkClasses` (re-exported, see below) for individual nav links
inside the default slot, with an `active` option for the current route.

## SpFooter

| Prop | Type | Default | Description |
|---|---|---|---|
| `bordered` | `boolean` | — | Applies a border |
| `fullWidth` | `boolean` | — | Stretches to full width |
| `as` | `"footer" \| "div" \| "section"` | `"footer"` | Rendered element |
| `id` | `string` | — | Element ID |
| `aria-label` | `string` | — | Accessible label |
| `class` | `string` | — | Additional CSS classes |

```astro
<SpFooter bordered fullWidth>
  <p>&copy; 2026 PHCDevworks.</p>
</SpFooter>
```

## Recipe helpers reference

The package re-exports class recipe functions from [Spectre UI](/design/ui):

| Helper | For |
|---|---|
| `getAlertClasses` | Alert class generation |
| `getAvatarClasses` | Avatar class generation |
| `getButtonClasses` | Button class generation |
| `getCardClasses` | Card class generation |
| `getBadgeClasses` | Badge class generation |
| `getContainerClasses` | Container class generation |
| `getDropdownClasses` | Dropdown root classes |
| `getDropdownMenuClasses` | Dropdown menu container |
| `getDropdownItemClasses` | Individual dropdown item |
| `getFooterClasses` | Footer class generation |
| `getGridClasses` | Grid class generation |
| `getIconBoxClasses` | Icon box class generation |
| `getInputClasses` | Input class generation |
| `getModalClasses` | Modal root classes |
| `getModalOverlayClasses` | Modal overlay/backdrop classes |
| `getNavClasses` | Nav root classes |
| `getNavLinksClasses` | Nav links container |
| `getNavLinkClasses` | Individual nav link |
| `getPricingCardClasses` | Pricing card root classes |
| `getPricingCardBadgeClasses` | Pricing card badge wrapper |
| `getPricingCardPriceContainerClasses` | Pricing card price container |
| `getPricingCardPriceClasses` | Pricing card price element |
| `getPricingCardDescriptionClasses` | Pricing card description |
| `getRatingClasses` | Rating root classes |
| `getRatingStarsClasses` | Rating star container |
| `getRatingStarClasses` | Individual star element |
| `getRatingTextClasses` | Rating text element |
| `getSectionClasses` | Section class generation |
| `getSidebarClasses` | Sidebar root classes |
| `getSidebarLinkClasses` | Individual sidebar link |
| `getSidebarBackdropClasses` | Sidebar backdrop classes |
| `getSidebarToggleClasses` | Sidebar toggle button classes |
| `getStackClasses` | Stack class generation |
| `getTestimonialClasses` | Testimonial root classes |
| `getTestimonialQuoteClasses` | Quote wrapper |
| `getTestimonialAuthorClasses` | Author section wrapper |
| `getTestimonialAuthorInfoClasses` | Author info wrapper |
| `getTestimonialAuthorNameClasses` | Author name element |
| `getTestimonialAuthorTitleClasses` | Author title element |
| `getToastClasses` | Toast root classes |
| `getToastIconClasses` | Toast icon wrapper |
| `getTooltipClasses` | Tooltip class generation |

Recipe option and variant types are also re-exported, including
`AlertRecipeOptions`, `AlertVariant`, `AlertSize`, `AvatarRecipeOptions`,
`AvatarShape`, `AvatarSize`, `BadgeRecipeOptions`, `BadgeVariant`,
`BadgeSize`, `ButtonRecipeOptions`, `ButtonVariant`, `ButtonSize`,
`CardRecipeOptions`, `CardVariant`, `ContainerRecipeOptions`,
`ContainerMaxWidth`, `DropdownRecipeOptions`,
`DropdownMenuRecipeOptions`, `DropdownItemRecipeOptions`,
`DropdownPlacement`, `FooterRecipeOptions`, `GridRecipeOptions`,
`GridColumns`, `GridGap`, `IconBoxRecipeOptions`, `IconBoxVariant`,
`IconBoxSize`, `InputRecipeOptions`, `InputState`, `InputSize`,
`ModalRecipeOptions`, `ModalOverlayRecipeOptions`, `NavRecipeOptions`,
`NavLinkRecipeOptions`, `PricingCardRecipeOptions`, `RatingRecipeOptions`,
`SectionRecipeOptions`, `SidebarRecipeOptions`, `SidebarLinkRecipeOptions`,
`StackRecipeOptions`, `StackDirection`, `StackBasis`, `StackAlign`,
`TestimonialRecipeOptions`, `ToastRecipeOptions`, `ToastIconRecipeOptions`,
`ToastVariant`, `TooltipRecipeOptions`, `TooltipPlacement`.

## Package exports

### Root imports

```ts
import {
  SpAlert, SpAvatar, SpBadge, SpButton, SpCard, SpContainer, SpDropdown,
  SpFooter, SpGrid, SpIconBox, SpInput, SpModal, SpNav, SpPricingCard,
  SpRating, SpSection, SpSidebar, SpSpinner, SpStack, SpTag,
  SpTestimonial, SpToast, SpTooltip,
} from '@phcdevworks/spectre-ui-astro'

import {
  getButtonClasses,
  getBadgeClasses,
  getCardClasses,
  // …all recipe helpers and types
} from '@phcdevworks/spectre-ui-astro'
```

### Direct component entry points

```ts
import SpAlert     from '@phcdevworks/spectre-ui-astro/components/SpAlert.astro'
import SpAvatar    from '@phcdevworks/spectre-ui-astro/components/SpAvatar.astro'
import SpBadge     from '@phcdevworks/spectre-ui-astro/components/SpBadge.astro'
import SpButton    from '@phcdevworks/spectre-ui-astro/components/SpButton.astro'
import SpCard      from '@phcdevworks/spectre-ui-astro/components/SpCard.astro'
import SpContainer from '@phcdevworks/spectre-ui-astro/components/SpContainer.astro'
import SpDropdown  from '@phcdevworks/spectre-ui-astro/components/SpDropdown.astro'
import SpFooter    from '@phcdevworks/spectre-ui-astro/components/SpFooter.astro'
import SpGrid      from '@phcdevworks/spectre-ui-astro/components/SpGrid.astro'
import SpIconBox   from '@phcdevworks/spectre-ui-astro/components/SpIconBox.astro'
import SpInput     from '@phcdevworks/spectre-ui-astro/components/SpInput.astro'
import SpModal     from '@phcdevworks/spectre-ui-astro/components/SpModal.astro'
import SpNav       from '@phcdevworks/spectre-ui-astro/components/SpNav.astro'
import SpPricingCard  from '@phcdevworks/spectre-ui-astro/components/SpPricingCard.astro'
import SpRating    from '@phcdevworks/spectre-ui-astro/components/SpRating.astro'
import SpSection   from '@phcdevworks/spectre-ui-astro/components/SpSection.astro'
import SpSidebar   from '@phcdevworks/spectre-ui-astro/components/SpSidebar.astro'
import SpSpinner   from '@phcdevworks/spectre-ui-astro/components/SpSpinner.astro'
import SpStack     from '@phcdevworks/spectre-ui-astro/components/SpStack.astro'
import SpTag       from '@phcdevworks/spectre-ui-astro/components/SpTag.astro'
import SpTestimonial from '@phcdevworks/spectre-ui-astro/components/SpTestimonial.astro'
import SpToast     from '@phcdevworks/spectre-ui-astro/components/SpToast.astro'
import SpTooltip   from '@phcdevworks/spectre-ui-astro/components/SpTooltip.astro'
```

The adapter does not export a CSS helper or path. Import the stylesheet
directly from `@phcdevworks/spectre-ui/index.css`.

## Component family stability

Each component family is classified by its support status in this adapter.
The machine-readable classification lives in `astro-adapter.contract.json`
under `componentFamilies`.

| Family | Status |
|---|---|
| alert | **stable** |
| avatar | **stable** |
| badge | **stable** |
| button | **stable** |
| card | **stable** |
| container | **stable** |
| dropdown | **stable** |
| footer | **stable** |
| grid | **stable** |
| icon-box | **stable** |
| input | **stable** |
| modal | **stable** |
| nav | **stable** |
| pricing-card | **stable** |
| rating | **stable** |
| section | **stable** |
| sidebar | **stable** |
| spinner | **stable** |
| stack | **stable** |
| tag | **stable** |
| testimonial | **stable** |
| toast | **stable** |
| tooltip | **stable** |

- **stable** — the component family is fully wired to upstream recipes,
  covered by SSR and unit tests, and declared in `astro-adapter.contract.json`.
  Breaking changes require a semver major bump.
- **provisional** — a family that is partially implemented or pending full
  test coverage. Not yet safe to depend on across minor releases.
- **not yet supported** — families present in the upstream Spectre UI surface
  that this adapter has not yet bound.

All 23 families in the current release are **stable**.
