import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { viteHealthPlugin } from './plugins/health-check/vite-health-plugin.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const enableHealthCheck = process.env.ENABLE_HEALTH_CHECK === 'true'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
    ...(enableHealthCheck ? [viteHealthPlugin()] : []),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
    sourcemap: false,
  },
})
