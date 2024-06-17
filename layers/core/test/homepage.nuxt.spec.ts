import { setup, $fetch } from '@nuxt/test-utils/e2e'
import { describe, test, expect } from 'vitest'
import { fileURLToPath } from 'node:url'

describe('homepage', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('../../../apps/app', import.meta.url)),
  })

  test('contains homepage text', async () => {
    const html = await $fetch('/')
    expect(html).toContain('homepage')
  })
})
