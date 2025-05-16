/// <reference types="vitest" />

import { resolve } from 'path'

import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve('', 'lib/main.ts'),
      name: '@getyoti/share-client-core',
      fileName: 'main',
    },
  },
  test: {
    environment: "jsdom"
  }
})
