import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { viteHealthPlugin } from './plugins/health-check/vite-health-plugin.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const enableHealthCheck = process.env.ENABLE_HEALTH_CHECK === 'true'
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const githubPagesBase = repositoryName ? `/${repositoryName}/` : '/'
const base =
  process.env.VITE_BASE_PATH ||
  (process.env.GITHUB_ACTIONS === 'true' ? githubPagesBase : '/')

export default defineConfig({
  base,
  plugins: [
    react({
      jsxRuntime: 'automatic',
      fastRefresh: true,
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
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  build: {
    outDir: 'build',
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          'radix-ui': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-dialog',
            '@radix-ui/react-tooltip',
            '@radix-ui/react-alert-dialog',
          ],
          'motion': ['framer-motion'],
          'charts': ['recharts'],
          'forms': ['react-hook-form', '@hookform/resolvers'],
        },
      },
    },
  },
  // Optimize dependencies for faster dev startup
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'framer-motion',
      '@radix-ui/react-dialog',
      'lucide-react',
    ],
  },
})
