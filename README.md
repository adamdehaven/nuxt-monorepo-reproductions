# nuxt-monorepo-reproductions

**Monorepo** reproductions for Nuxt

## Steps to reproduce

1. Clone this repo
2. Install dependencies with `pnpm install`
3. `pnpm -F core test` - run the tests contained in the `/layers/core/*` directory, utilizing the `/apps/app` Nuxt application.

You should see the following error:

```shell
Error: Cannot find module '/{your-local-path}/nuxt-monorepo-reproductions/apps/app/.nuxt/test/uj5gwt/output/server/index.mjs'
```

If you inspect the files in the `/apps/app/.nuxt/test/{hash}/output` you will notice there is no `server` directory.
