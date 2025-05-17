/// <reference types="vitest" />

import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      rollupTypes: true,
      afterBuild: () => {
        const globalsDefPath = 'lib/globals.d.ts'
        const mainDefPath = 'dist/main.d.ts'
        const globalsDFileContent = readFileSync(globalsDefPath, 'utf-8')
        const mainDFileContent = readFileSync(mainDefPath, 'utf-8')
        writeFileSync(mainDefPath, globalsDFileContent + '\n' + mainDFileContent)
      },
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
    environment: 'jsdom',
  },
})
