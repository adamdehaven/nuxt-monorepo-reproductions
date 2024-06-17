import { defineWorkspace } from 'vitest/config'

// https://vitest.dev/guide/#workspaces-support
export default defineWorkspace([
  // Use a list of glob patterns to define your workspaces or directories where there is a Vitest config file
  'layers/*/vitest.config.ts',
  'apps/*/vitest.config.ts',
])
