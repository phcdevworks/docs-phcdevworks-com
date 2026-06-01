/**
 * Builds the site in static mode (bypassing the Cloudflare adapter),
 * serves it via Vite preview, captures screenshots of all pages at desktop
 * and mobile viewports, then shuts down.
 *
 * Usage: npm run screenshot
 */

import { chromium } from 'playwright'
import { spawn } from 'child_process'
import { mkdir, rm } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const OUT_DIR = path.join(ROOT, 'screenshots')
const BUILD_DIR = path.join(ROOT, '.screenshot-build')

const PAGES = [
  { name: 'home', path: '/' },
]

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
]

const PREVIEW_PORT = 4323
const BASE_URL = `http://localhost:${PREVIEW_PORT}`

function run(cmd, args, opts = {}) {
  return new Promise((resolve, reject) => {
    const proc = spawn(cmd, args, { cwd: ROOT, stdio: 'pipe', ...opts })
    let stdout = ''
    let stderr = ''
    proc.stdout?.on('data', (d) => { stdout += d; process.stdout.write(d) })
    proc.stderr?.on('data', (d) => { stderr += d; process.stderr.write(d) })
    proc.on('close', (code) => {
      if (code === 0) resolve(stdout)
      else reject(new Error(`${cmd} ${args.join(' ')} exited ${code}\n${stderr}`))
    })
    proc.on('error', reject)
  })
}

function startPreviewServer() {
  return new Promise((resolve, reject) => {
    const server = spawn(
      'npx',
      ['astro', 'preview', '--config', 'astro.config.screenshot.mjs', '--outDir', BUILD_DIR, '--port', String(PREVIEW_PORT), '--host'],
      { cwd: ROOT, stdio: 'pipe' }
    )

    let ready = false
    const onData = (data) => {
      const line = data.toString()
      process.stdout.write(`  [preview] ${line}`)
      if (!ready && (line.includes(String(PREVIEW_PORT)) || line.includes('preview') || line.includes('localhost'))) {
        ready = true
        setTimeout(() => resolve(server), 1000)
      }
    }

    server.stdout.on('data', onData)
    server.stderr.on('data', onData)
    server.on('error', reject)

    setTimeout(() => {
      if (!ready) { ready = true; resolve(server) }
    }, 6000)
  })
}

async function capture() {
  if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true })

  console.log('\nBuilding site (static mode)...')
  await run('npx', [
    'astro', 'build',
    '--config', 'astro.config.screenshot.mjs',
    '--outDir', BUILD_DIR,
  ])

  console.log('\nStarting preview server...')
  const server = await startPreviewServer()

  const browser = await chromium.launch()

  try {
    for (const vp of VIEWPORTS) {
      const ctx = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
      })
      const page = await ctx.newPage()

      for (const pg of PAGES) {
        const url = `${BASE_URL}${pg.path}`
        console.log(`  Capturing ${pg.name} @ ${vp.name} (${vp.width}x${vp.height})`)
        await page.goto(url, { waitUntil: 'networkidle' })
        await page.waitForTimeout(500)

        const file = path.join(OUT_DIR, `${pg.name}--${vp.name}.png`)
        await page.screenshot({ path: file, fullPage: true })
      }

      await ctx.close()
    }
  } finally {
    await browser.close()
    server.kill()
  }

  await rm(BUILD_DIR, { recursive: true, force: true })

  console.log(`\nScreenshots saved to screenshots/`)
  for (const vp of VIEWPORTS) {
    for (const pg of PAGES) {
      console.log(`  screenshots/${pg.name}--${vp.name}.png`)
    }
  }
}

capture().catch((err) => {
  console.error(err)
  process.exit(1)
})
