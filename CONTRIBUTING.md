# Contributing to docs.phcdevworks.com

Thanks for helping improve the Spectre documentation! This project is the **Consciousness** of the Spectre Arsenal, serving as the central hub for learning, reference, and component showcases.

## 🏛️ Spectre Design Philosophy

Spectre is a **specification-driven design system** built on a strict hierarchy:

### 1. @phcdevworks/spectre-tokens (Layer 1 - DNA)
- **Purpose**: Single source of truth for design values (colors, spacing, typography, semantic roles).
- **Rules**: Defines semantic meaning, not UI behavior. Designers own JSON; engineers maintain transforms.

### 2. @phcdevworks/spectre-ui (Layer 2 - The Blueprint)
- **Purpose**: Converts tokens into real CSS and class recipes.
- **Rules**: MUST consume tokens, MUST NOT redefine values. Every CSS selector has a matching recipe.

### 3. Framework Adapters (Layer 3 - Delivery)
- **Purpose**: Map Layer 2 to specific frameworks (WordPress, Astro, etc.).
- **Rules**: Adapters never define styles or duplicate CSS.

> **The Golden Rule**: Tokens define *meaning*. UI defines *structure*. Adapters define *delivery*.

---

## 🏗️ The Consciousness Role
As Layer 8, `docs.phcdevworks.com` is responsible for:
- **Clarity**: Explaining the concepts and rules of the Spectre ecosystem.
- **Showcase**: Demonstrating components in a high-fidelity environment.
- **Guidance**: Providing tutorials and best practices for developers.

## 🛠️ Development Setup

1. **Clone & Install**:
```bash
git clone https://github.com/phcdevworks/docs.phcdevworks.com.git
npm install
```

2. **Start Dev Server**:
```bash
npm run dev
```

3. **Build**:
```bash
npm run build
```

## ✅ Contribution Rules
1. **Accuracy First**: Ensure all technical explanations and code snippets are accurate and up-to-date with the latest Arsenal layers.
2. **Premium Design**: The documentation site itself must be a premium expression of the Spectre design system.
3. **Zero-Hex Enforcement**: Never use hardcoded visual values in documentation examples unless specifically explaining the token system.

## 🚀 Pull Request Process
1. **Branch**: Create a feature branch from `main`.
2. **Verify**: Ensure the site builds correctly and there are no broken links.
3. **Preview**: Provide a preview link or screenshots for UI changes.
4. **Content Review**: Ensure the tone is professional, clear, and consistent with the PHCDevworks brand.

## ⚖️ License
By contributing, you agree that your work will be licensed under the MIT License.
