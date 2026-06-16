---
title: Spectre Base — Reference
description: Template hierarchy, shell class reference, PHP hook API, child theme patterns, and Spectre Icons integration for Spectre Base.
---

Reference for `@phcdevworks/spectre-base` (current version **1.0.0**). For an
introduction, installation, quick start, and when-to-use guidance, see the
[Spectre Base overview](/design/base).

## Template hierarchy

The theme ships a complete WordPress template hierarchy. Each file handles a
specific route:

| Template file | WordPress route |
|---|---|
| `index.php` | Catch-all fallback for all unmatched routes |
| `home.php` | Blog posts index (when a static front page is set) |
| `front-page.php` | Static front page |
| `single.php` | Single post |
| `page.php` | Static page |
| `archive.php` | Date, category, tag, and author archives |
| `search.php` | Search results |
| `404.php` | Not found |
| `header.php` | Shared header — loaded via `get_header()` |
| `footer.php` | Shared footer — loaded via `get_footer()` |
| `sidebar.php` | Sidebar — loaded via `get_sidebar()` |
| `searchform.php` | Search form partial |
| `comments.php` | Comments section |

### Template parts

Files in `spectre-theme/template-parts/`:

| Part | Used by |
|---|---|
| `content-card.php` | `index.php`, `home.php`, `archive.php` |
| `content-single.php` | `single.php` |
| `content-page.php` | `page.php`, `front-page.php` |
| `content-none.php` | All list templates when no posts are found |

## Shell class reference

These CSS classes are defined in `src/styles/main.css` and are safe to use in
any PHP template. All values come from `var(--sp-*)` tokens.

| Class | Purpose |
|---|---|
| `spectre-site-container` | Centered, max-width container |
| `spectre-site-header` | Header shell with neutral background |
| `spectre-site-footer` | Footer shell with neutral background |
| `spectre-main` | Main content area with grid spacing |
| `spectre-main--spacious` | Variant with more block padding |
| `spectre-panel` | Bordered, padded surface (pages, 404) |
| `spectre-panel--roomy` | Panel with extra padding |
| `spectre-panel--centered` | Center-aligned panel |
| `spectre-panel--dashed` | Panel with dashed border (empty states) |
| `spectre-card` | Post card with hover shadow |
| `spectre-card__media` | Image area of a card |
| `spectre-card__body` | Content area of a card |
| `spectre-card__title` | Card headline |
| `spectre-card__excerpt` | Card excerpt text |
| `spectre-card__readmore` | Card "Read more" anchor |
| `spectre-post-grid` | Responsive auto-fit grid for cards |
| `spectre-section` | Content section with gap |
| `spectre-content` | Post body content area |
| `spectre-entry-meta` | Date and author metadata row |
| `spectre-eyebrow` | Small uppercase label |
| `spectre-title-lg` | Large heading |
| `spectre-title-xl` | Extra-large heading |
| `spectre-title-2xl` | 2× extra-large heading |
| `spectre-muted` | Muted text color |
| `spectre-button` | Base anchor-as-button shell |
| `spectre-button--primary` | Primary filled button variant |
| `spectre-widget` | Sidebar widget wrapper |
| `spectre-widget-title` | Sidebar widget heading |

## PHP hook API

The theme exposes action and filter hooks so a child theme or site plugin can
customize header, footer, navigation, and sidebar behavior without copying
parent template files. Place `add_action` / `add_filter` calls in your child
theme's `functions.php`.

### Action hooks

| Hook | Fires in | When |
|---|---|---|
| `spectre_base_before_header` | `header.php` | Immediately before the `<header>` element |
| `spectre_base_before_site_branding` | `header.php` | Inside `.spectre-site-branding`, before the logo/site title |
| `spectre_base_after_site_branding` | `header.php` | Inside `.spectre-site-branding`, after the logo/site title |
| `spectre_base_after_header` | `header.php` | Immediately after the `</header>` element |
| `spectre_base_before_footer` | `footer.php` | Immediately before the `<footer>` element |
| `spectre_base_after_footer` | `footer.php` | Immediately after the `</footer>` element |
| `spectre_base_before_sidebar($sidebar_id)` | `sidebar.php` | Before the `<aside>` wrapper, only when the sidebar is active |
| `spectre_base_after_sidebar($sidebar_id)` | `sidebar.php` | After the `<aside>` wrapper, only when the sidebar is active |

```php
// Inject a promo banner just inside the header, in your child theme's functions.php:
add_action('spectre_base_before_site_branding', function () {
    echo '<p class="spectre-eyebrow">'
        . esc_html__('Now booking 2026 projects', 'your-child-theme')
        . '</p>';
});
```

These complement the core WordPress template-loading hooks that already fire
around these files: `get_header`, `get_footer`, and `get_sidebar`, plus
`wp_head`, `wp_body_open`, and `wp_footer` inside `header.php`/`footer.php`.

### Filter hooks

| Hook | Declared in | Purpose |
|---|---|---|
| `spectre_base_primary_nav_args` | `header.php` | Filters the `wp_nav_menu()` args array for the primary navigation |
| `spectre_base_footer_nav_args` | `footer.php` | Filters the `wp_nav_menu()` args array for the footer navigation |
| `spectre_base_footer_social_icons` | `footer.php` | Filters the array of social icon entries rendered in the footer |
| `spectre_base_sidebar_id` | `sidebar.php` | Filters which registered sidebar ID `sidebar.php` renders (default `sidebar-main`) |

```php
// Swap the registered sidebar that sidebar.php renders:
add_filter('spectre_base_sidebar_id', fn () => 'sidebar-shop');

// Add a custom menu class to the primary navigation:
add_filter('spectre_base_primary_nav_args', function (array $args) {
    $args['menu_class'] .= ' my-client-nav';
    return $args;
});
```

### Footer social icons

Add site-specific social icon links without modifying the theme directly:

```php
// In your child theme's functions.php or a site plugin:
add_filter('spectre_base_footer_social_icons', function () {
    return [
        ['name' => 'github',   'size' => '20', 'url' => 'https://github.com/yourorg'],
        ['name' => 'linkedin', 'size' => '20', 'url' => 'https://linkedin.com/company/yourco'],
    ];
});
```

This requires the spectre-icons plugin to be active. If the plugin is not
active, the social row is not rendered regardless of the filter output.

### Swapping templates entirely

For changes too large for a hook, WordPress's standard child theme lookup
applies: any file a child theme provides under the same name (`header.php`,
`footer.php`, `sidebar.php`, files in `template-parts/`, etc.) takes priority
over the parent theme's copy. No filter is required. Prefer the hooks above
when possible — they keep the child theme on the parent theme's update path.

## CSS custom property namespace

Every `--sp-*` custom property consumed by this theme is owned and defined by
[Spectre Tokens](/design/tokens) (via [Spectre UI](/design/ui)). The theme
itself never declares a `--sp-*` custom property — it only reads them with
`var()`.

**Safe to consume (read-only):** any `--sp-*` variable, in any child theme
stylesheet or `theme.json`, via `var(--sp-...)`.

**Not safe to declare:** do not define or redeclare a `--sp-*` custom property
in a child theme, site plugin, or `theme.json`. The `--sp-*` namespace is
reserved for the upstream Spectre token contract; locally redefining one of
these variables creates drift and will be flagged by `npm run check:drift`.

To change a token's *value* for a client brand, override the relevant entries
in the child theme's `theme.json` `settings.color`, `settings.typography`, and
`settings.spacing` palettes/presets (which already reference `var(--sp-*)`),
or configure `@phcdevworks/spectre-tokens` upstream. Never hardcode hex, rem,
or px values in place of token references.

### Adding custom shell styles

Always use `var(--sp-*)` tokens in child theme or additional CSS:

```css
@layer components {
  .my-hero {
    background-color: var(--sp-surface-alternate);
    padding-block: var(--sp-space-64);
  }
}
```

## Child themes

### Generating a child theme

```bash
npm run create:child -- <client-name>
```

This scaffolds `spectre-child-<client-name>/` with:

- `style.css` — WordPress child theme header declaring `Template: spectre-theme`,
  GPL license, and WP.org standard tags
- `functions.php` — enqueues the child stylesheet with `spectre-base-style` as
  its dependency so it loads after the parent bundle
- `theme.json` — minimal, inherits the full parent token set and is ready for
  brand-specific overrides

The `Template: spectre-theme` header must match the parent theme's directory
name exactly.

### Overriding tokens via `theme.json`

Override color, typography, and spacing presets in the child theme's
`theme.json`. Keep every value as a `var(--sp-*)` reference. Do not introduce
hex codes, raw px/rem values, or new custom properties.

### Overriding templates

Provide a same-named file in the child theme directory — WordPress loads it
instead of the parent's copy. Prefer hook-based overrides for smaller
customizations (see [PHP hook API](#php-hook-api) above).

## Validation commands

| Command | What it does |
|---|---|
| `npm run build` | TypeScript check + Vite production build |
| `npm run check` | Full validation gate — must pass before any handoff |
| `npm run check:assets` | Validate Vite manifest and asset contract |
| `npm run check:drift` | Scan for hardcoded visual values and design-system drift |
| `npm run lint` | ESLint for TypeScript |
| `npm run lint:php` | PHP syntax validation |
| `npm run format` | Apply Prettier formatting |

`check:drift` expected output is empty or only token-backed references. Any
local visual value must be removed or justified before merging.

## Spectre Icons integration

This theme is compatible with the spectre-icons WordPress plugin. Once
installed and activated, the `[spectre-icon]` shortcode is available in any
template or content area.

The theme footer automatically renders icon links when the plugin is active.
To check availability before rendering icons in a custom template:

```php
<?php if (spectre_base_has_icons()) : ?>
    <?php echo do_shortcode('[spectre-icon name="arrow-right" size="16"]'); ?>
<?php endif; ?>
```

Standard icon shortcode usage:

```text
[spectre-icon name="github"   size="20"]
[spectre-icon name="twitter"  size="20"]
[spectre-icon name="linkedin" size="20"]
```

## Troubleshooting

| Failure | Cause | Fix |
|---|---|---|
| Blank page in production | Compiled manifest missing or stale | Run `npm run build` then `npm run check:assets`; confirm `spectre-theme/dist/.vite/manifest.json` lists `src/js/main.ts` as an entry |
| Styles not updating in development | Wrong environment or dev server not running | Confirm `WP_ENVIRONMENT_TYPE=development` in `wp-config.php` and `npm run dev` is running on the expected port |
| `check:drift` reports unexpected matches | Raw hex, pixel, rem, or Tailwind utility added to `src/` or PHP | Replace with a `var(--sp-*)` token or a Spectre component |
| PHP lint fails with syntax error | PHP syntax error in a template file | Fix the reported file, then rerun `npm run lint:php` (PHP 8.2 is the CI target) |
| `rg` not found | ripgrep not installed | Install ripgrep (`brew install ripgrep` on macOS, `apt install ripgrep` on Ubuntu) |
| Custom element not defined | CSS loaded but `defineSpectreComponents()` not called | Confirm `src/js/main.ts` imports and calls `defineSpectreComponents()`, and that `npm run build` completed without errors |
