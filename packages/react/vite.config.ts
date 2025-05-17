import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
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
      name: '@getyoti/share-client-react',
      fileName: 'main',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
  },
})
