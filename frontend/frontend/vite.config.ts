import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mdx from '@mdx-js/rollup'
import path from 'path'
import { exec } from 'child_process'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: '../server/frontend-dist'
  },
  plugins: [
    {
      name: 'mv-html-to-ejs',
      writeBundle() {
        exec('npm run mv-html-to-ejs')
      },
    },
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
