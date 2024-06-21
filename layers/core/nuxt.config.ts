// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-open-fetch',
    '@nuxtjs/mdc',
    '@nuxt/test-utils/module',
  ],
  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      autoSubfolderIndex: false // Set to false to match Cloudflare route matching rules: https://nuxt.com/deploy/cloudflare
    },
  },
  vite: {
    build: {
      rollupOptions: {
        external: [
          'shiki/onig.wasm', // !Important: externalize the wasm import
        ],
      },
    },
  },
  openFetch: {
    clients: {
      // Accessible via `useMyApi`, `useLazyMyApi`, and `$myApi`.
      myApi: {
        baseURL: '/',
      },
    },
    // Since we need to add custom fetch options, e.g. `onRequest` and `onRequestError`, we need to disable the default Nuxt plugin so we can create our own.
    disableNuxtPlugin: true,
    openAPITS: {
      additionalProperties: true,
    },
  },
  mdc: {
    headings: {
      anchorLinks: {
        h1: false,
      },
    },
    highlight: {
      highlighter: 'shiki',
      theme: {
        default: 'material-theme-lighter',
      }
    },
  },
  typescript: {
    includeWorkspace: true,
  },
})
