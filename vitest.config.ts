import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [vue()], // Add Vue support
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './app/'),
      '@': path.resolve(__dirname, './app/'),
      '@nuxt/ui': path.resolve(__dirname, 'node_modules/@nuxt/ui'),
    },
  },
})
