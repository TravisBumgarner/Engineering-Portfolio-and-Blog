import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mdx from '@mdx-js/rollup'
import path from 'path'
import { exec } from 'child_process'
import { blurhashPlugin } from './scripts/vite-plugin-blurhash'
import { rssPlugin } from './scripts/vite-plugin-rss'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: '../server/src/frontend-dist',
  },
  plugins: [
    rssPlugin(),
    blurhashPlugin(
      path.resolve(__dirname, 'public'),
      path.resolve(__dirname, 'src/content/blurhashes/index.json'),
    ),
    {
      name: 'mv-html-to-ejs',
      writeBundle() {
        exec('npm run mv-html-to-ejs')
      },
    },
    {
      enforce: 'pre',
      ...mdx({
        providerImportSource: '@mdx-js/react',
      }),
    },
    react(),
  ],
  resolve: {
    alias: {
      '@common/core': path.resolve(__dirname, '../common/dist/index.js'),
    },
  },
})
