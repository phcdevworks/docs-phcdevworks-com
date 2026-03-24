# docs-phcdevworks-com

[![GitHub issues](https://img.shields.io/github/issues/phcdevworks/docs-phcdevworks-com)](https://github.com/phcdevworks/docs-phcdevworks-com/issues)
[![GitHub pulls](https://img.shields.io/github/issues-pr/phcdevworks/docs-phcdevworks-com)](https://github.com/phcdevworks/docs-phcdevworks-com/pulls)
[![License](https://img.shields.io/github/license/phcdevworks/docs-phcdevworks-com)](LICENSE)

The official documentation portal for the PHCDevworks ecosystem. It provides
comprehensive guides, API references, and documentation for the Spectre suite of
tools.

🤝 **[Contributing Guide](CONTRIBUTING.md)** | 📝 **[Changelog](CHANGELOG.md)**
| 🛡️ **[Security Policy](SECURITY.md)**

## Overview

`docs-phcdevworks-com` is the documentation hub for the Coast AI and Spectre
project ecosystems. It is built with Astro and provides a centralized location
for searching and reading documentation across all repositories.

## Usage

### 1. Prerequisites

- Node.js (Latest LTS recommended)
- Git

### 2. Setup

```bash
git clone https://github.com/phcdevworks/docs-phcdevworks-com.git
cd docs-phcdevworks-com
npm install
```

### 3. Execution

1. Launch the documentation server:
   ```bash
   npm run dev
   ```

## Project Structure

| Path              | Responsibility                                  |
| ----------------- | ----------------------------------------------- |
| `src/pages/`      | Main documentation pages and routes             |
| `src/components/` | Shared UI components for the documentation site |
| `public/`         | Static assets and documentation source files    |

## Part of the PHCDevworks Suite

- **[Spectre Tokens](https://github.com/phcdevworks/spectre-tokens)** - Design
  token foundation
- **[Spectre UI](https://github.com/phcdevworks/spectre-ui)** - Core styling
  layer
- **[Spectre UI Astro](https://github.com/phcdevworks/spectre-ui-astro)** -
  Astro adapter
- **[Spectre Docs](https://github.com/phcdevworks/docs-phcdevworks-com)** -
  Documentation portal (this project)

## Contributing

We welcome contributions from the community. Please review our
**[CONTRIBUTING.md](CONTRIBUTING.md)** for details on our workflow and
standards.

## License

MIT © PHCDevworks — See **[LICENSE](LICENSE)** for details.
