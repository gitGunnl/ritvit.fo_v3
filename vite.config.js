import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ritvit.fo_v3/', // Correctly set for deployment on GitHub Pages for the 'ritvit.fo_v3' project
  plugins: [
    react(), 
    VitePWA()
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/assets/[name]-[hash].[ext]',
      },
    },
    brotliSize: false, // Disable brotli size display to speed up the build process
  },
})