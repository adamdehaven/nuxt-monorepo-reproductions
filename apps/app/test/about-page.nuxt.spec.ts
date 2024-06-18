import { setup, $fetch } from '@nuxt/test-utils/e2e'
import { describe, test, expect } from 'vitest'

describe('about page', async () => {
  await setup({
    nuxtConfig: {
      nitro: {
        preset: 'node-server',
      },
    }
  })

  test('contains about page text', async () => {
    const html = await $fetch('/about')
    expect(html).toContain('This is the about page.')
  })
})
