import { resolve } from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve('', 'lib/main.ts'),
      name: '@getyoti/share-client-react',
      fileName: 'main',
    },
    rollupOptions:{
      external: ['react', 'react/jsx-runtime'],
    }
  },
})
