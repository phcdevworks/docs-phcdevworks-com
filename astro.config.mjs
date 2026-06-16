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
});
