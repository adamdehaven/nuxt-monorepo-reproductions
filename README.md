# @nuxjs/mdc wasm error repro

**Monorepo** reproduction for https://github.com/nuxt-modules/mdc/issues/159

Non-monorepo reproduction: is fixed on the `fix/dependencies-wasm` branch, here: <https://github.com/adamdehaven/mdc-wasm-repro/pull/1>

## Steps to reproduce

1. Clone this repo
2. Install dependencies with `pnpm install`
3. Try running the test app (`/apps/app`) dev server with `pnpm -F app dev`

    You will see that syntax highlighting is not functional on the dev server, and you'll see the following error in your console:

    ```bash
    [nuxt] [request error] [unhandled] [500] Unknown file extension ".wasm" for /Users/adam.dehaven/Dev/mdc-wasm-monorepo/node_modules/.pnpm/shiki@1.1.7/node_modules/shiki/dist/onig.wasm
    at __node_internal_captureLargerStackTrace (node:internal/errors:490:5)
    at new NodeError (node:internal/errors:399:5)
    at Object.getFileProtocolModuleFormat [as file:] (node:internal/modules/esm/get_format:79:11)
    at defaultGetFormat (node:internal/modules/esm/get_format:121:38)
    at defaultLoad (node:internal/modules/esm/load:81:20)
    at nextLoad (node:internal/modules/esm/loader:163:28)
    at ESMLoader.load (node:internal/modules/esm/loader:605:26)
    at ESMLoader.moduleProvider (node:internal/modules/esm/loader:457:22)
    at new ModuleJob (node:internal/modules/esm/module_job:64:26)
    at #createModuleJob (node:internal/modules/esm/loader:480:17)
    at ESMLoader.getModuleJob (node:internal/modules/esm/loader:434:34)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    ```

4. Try building the test app (`/apps/app`) with `pnpm -F app wranger:dev`
 and you'll see everything _here_ actually compiles correctly, but in my other project, I see this error:

    ![vite wasm error](./vite-wasm-error.png)

I'm going to try getting this last error to be reproduced here as well.
