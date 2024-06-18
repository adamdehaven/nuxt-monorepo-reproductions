import { defineVitestConfig } from '@nuxt/test-utils/config'
import { fileURLToPath } from 'node:url'

export default defineVitestConfig({
  test: {
    environmentOptions: {
      nuxt: {
        overrides: {
          nitro: {
            preset: 'node-server',
          },
          experimental: {
            clientNodeCompat: false,
          },
        },
        rootDir: fileURLToPath(new URL('.', import.meta.url)),
        mock: {
          intersectionObserver: true,
        },
      },
    },
  },
})
