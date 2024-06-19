# nuxt-monorepo-reproductions

**Monorepo** reproductions for Nuxt

## Steps to reproduce

1. Clone this repo
2. Install dependencies with `pnpm install`
3. Open the `layers/core/components/HelloThere.vue` file and notice that the `$hello` helper provided by `layers/core/plugins/hello.ts` does not infer its type.

In addition, manually declaring the types of the plugin _also does not work_ as [outlined by the docs](https://nuxt.com/docs/guide/directory-structure/plugins#typing-plugins) and shown below does not work without adding the additional interface shown in the middle.

```typescript
declare module '#app' {
  interface NuxtApp {
    $hello (msg: string): string
  }
}

// This interface appears to be **required** for mono repo + layers support
declare module 'nuxt/app' {
  interface NuxtApp {
    $hello (msg: string): string
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $hello (msg: string): string
  }
}

export {}
```
