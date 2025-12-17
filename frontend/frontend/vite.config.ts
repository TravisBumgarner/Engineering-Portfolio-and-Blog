import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mdx from '@mdx-js/rollup'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    { 
      enforce: 'pre', 
      ...mdx({
        providerImportSource: '@mdx-js/react'
      }) 
    },
    react()
  ],
  resolve: {
    alias: {
      '@common/core': path.resolve(__dirname, '../common/dist/index.js')
    }
  }
})
