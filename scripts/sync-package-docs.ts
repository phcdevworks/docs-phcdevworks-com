import { mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

interface PackageSource {
  /** GitHub repo name under github.com/phcdevworks */
  repo: string;
  /** Sidebar/page label */
  label: string;
  /** Project area grouping shown in frontmatter */
  area: string;
}

const PACKAGES: PackageSource[] = [
  { repo: 'spectre-tokens', label: 'Spectre Tokens', area: 'project-design' },
  { repo: 'spectre-ui', label: 'Spectre UI', area: 'project-design' },
  { repo: 'spectre-ui-astro', label: 'Spectre UI Astro', area: 'project-design' },
  { repo: 'spectre-components', label: 'Spectre Components', area: 'project-design' },
  { repo: 'spectre-base', label: 'Spectre Base', area: 'project-design' },
  { repo: 'spectre-shell', label: 'Spectre Shell', area: 'project-shell' },
  { repo: 'spectre-shell-router', label: 'Spectre Shell Router', area: 'project-shell' },
  { repo: 'spectre-shell-signals', label: 'Spectre Shell Signals', area: 'project-shell' },
  { repo: 'spectre-init', label: 'Spectre Init', area: 'project-shell' },
  { repo: 'spectre-manifest', label: 'Spectre Manifest', area: 'project-shell' },
  { repo: 'spectre-icons', label: 'Spectre Icons', area: 'project-plugins' },
];

const GITHUB_ORG = 'phcdevworks';
const GITHUB_BRANCH = 'main';
const REPO_ROOT = resolve(import.meta.dirname, '..');
const OUTPUT_DIR = resolve(REPO_ROOT, 'src/content/docs/packages');

function rawUrl(repo: string, file: string): string {
  return `https://raw.githubusercontent.com/${GITHUB_ORG}/${repo}/${GITHUB_BRANCH}/${file}`;
}

async function fetchText(url: string): Promise<string> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }
  return res.text();
}

function escapeYamlString(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function isProseBlock(block: string): boolean {
  if (block.length === 0) return false;
  if (block.startsWith('#') || block.startsWith('|')) return false;
  if (/^[-*\d]/.test(block)) return false;
  if (/^\[!\[/.test(block)) return false;
  return true;
}

function extractDescription(readme: string, label: string): string {
  const firstParagraph = readme
    .split(/\r?\n\r?\n/)
    .map((block) => block.trim())
    .find(isProseBlock);

  return firstParagraph ? firstParagraph.replace(/\s+/g, ' ').slice(0, 300) : `${label} package documentation.`;
}

async function buildPage(pkg: PackageSource): Promise<string> {
  const [readme, roadmap] = await Promise.all([
    fetchText(rawUrl(pkg.repo, 'README.md')),
    fetchText(rawUrl(pkg.repo, 'ROADMAP.md')),
  ]);

  const description = extractDescription(readme, pkg.label);

  const frontmatter = [
    '---',
    `title: ${pkg.label}`,
    `description: "${escapeYamlString(description)}"`,
    `area: ${pkg.area}`,
    `sourceRepo: https://github.com/${GITHUB_ORG}/${pkg.repo}`,
    'generated: true',
    '---',
    '',
    '> This page is generated from the source repository\'s README and ROADMAP',
    '> on every build. Edit the source repository, not this file.',
    '',
  ].join('\n');

  return [
    frontmatter,
    '## README',
    '',
    readme.trim(),
    '',
    '## Roadmap',
    '',
    roadmap.trim(),
    '',
  ].join('\n');
}

async function main(): Promise<void> {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  for (const entry of readdirSync(OUTPUT_DIR)) {
    rmSync(resolve(OUTPUT_DIR, entry));
  }

  const results = await Promise.allSettled(
    PACKAGES.map(async (pkg) => {
      const page = await buildPage(pkg);
      writeFileSync(resolve(OUTPUT_DIR, `${pkg.repo}.md`), page, 'utf-8');
      console.log(`synced ${pkg.repo}`);
    }),
  );

  const failures = results.filter((r): r is PromiseRejectedResult => r.status === 'rejected');
  if (failures.length > 0) {
    for (const failure of failures) {
      console.error(failure.reason);
    }
    throw new Error(`Failed to sync ${failures.length} of ${PACKAGES.length} package docs.`);
  }
}

await main();
