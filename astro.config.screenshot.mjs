// Temporary static build config used only by scripts/screenshot.js
// Bypasses the Cloudflare adapter (incompatible with Node 24 in dev mode)
import { defineConfig } from 'astro/config'

export default defineConfig({
  output: 'static',
})
