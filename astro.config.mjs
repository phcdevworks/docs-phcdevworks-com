// @ts-check
import { defineConfig, sessionDrivers } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  // Prevent the Cloudflare adapter from auto-provisioning a SESSION KV namespace.
  // This is a static docs site — sessions are not used.
  session: {
    driver: sessionDrivers.lruCache(),
  },
  vite: {
    ssr: {
      // Mid-session re-optimize of these invalidates deps_ssr chunk hashes workerd
      // already loaded, and workerd has no `process` global to report the error — white screen.
      optimizeDeps: {
        exclude: [
          '@phcdevworks/spectre-tokens',
          '@phcdevworks/spectre-ui',
          '@phcdevworks/spectre-ui-astro',
          '@phcdevworks/spectre-components',
        ],
      },
    },
  },
});
