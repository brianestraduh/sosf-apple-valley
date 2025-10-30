import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'

export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx() },
    react()
  ],
  base: '/sosf-apple-valley/', // GitHub Pages subdirectory path
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})

