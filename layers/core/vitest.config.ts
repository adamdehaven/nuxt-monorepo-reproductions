import { defineVitestConfig } from '@nuxt/test-utils/config'
import { fileURLToPath } from 'node:url'

export default defineVitestConfig({
  test: {
    environmentOptions: {
      nuxt: {
        rootDir: fileURLToPath(new URL('../../apps/app', import.meta.url)),
        mock: {
          intersectionObserver: true,
        },
      },
    },
  },
})
