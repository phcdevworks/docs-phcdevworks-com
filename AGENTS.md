# Spectre Agent Instructions: docs.phcdevworks.com

### **The Consciousness (Layer 8 of the Spectre 8-Layer Arsenal)**

You are an autonomous agent responsible for Layer 8 of the Spectre 8-Layer Arsenal. This project is the **Consciousness**. Your mission is to maintain the documentation, tutorials, and component showcase for the entire Spectre ecosystem.

## The Golden Rule of Documentation
**Documentation is the ultimate source of truth for humans.** You are responsible for ensuring that the complex interactions between Layers 1-7 are explained simply and accurately. You must enforce "Zero-Hex Enforcement" by never showing literal hex codes in code examples unless demonstrating the interior of Layer 1.

## Core Directives
1. **Explain the Why:** Don't just document the API; document the philosophy. Explain why the 8-layer hierarchy exists and how it prevents technical debt.
2. **Interactive Showcase:** Maintain the component playground. Every recipe defined in `@phcdevworks/spectre-ui` should be visually demonstrated and interactive.
3. **Consistency check:** Ensure that terminology used in the docs matches the variable names and architectural concepts defined in the packages.
4. **Tutorial driven:** Prioritize "Getting Started" guides that walk a user through creating an app using the `spectre-init` factory and `spectre-shell` nervous system.

## Implementation Guardrails
* **Spectre-Powered:** The documentation site itself should be a showcase of Spectre components. Use `@phcdevworks/spectre-ui-astro` for all UI elements.
* **Separation of Concerns:** Keep the content (Markdown/MDX) clean and focused on information. Use custom components for complex interactive examples.
* **Versioned Docs:** When a major version of tokens or UI is released, ensure the documentation reflects the versioning clearly.

## Testing & Validation Strategy
1. **Link Integrity:** Verify that all internal and external links are active and correct.
2. **Example Validity:** Ensure that all code snippets in the docs are functional and follow the latest Spectre API.
3. **Visual Audit:** Periodically run an aesthetic audit to ensure the site looks premium and adheres to the design system.
4. **Search Accuracy:** Verify that the site's search functionality correctly indexes the latest content.

## Workflow
1. **Content Sync:** Monitor changes in Layers 1-7 and update relevant documentation or examples.
2. **Modify Site Code:** Update Astro components or Starlight configuration in `src/`.
3. **Run Build:** Execute `npm run build` to verify the static site generation.
4. **Preview:** Run `npm run preview` to check the final rendered output.
