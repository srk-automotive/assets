import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts({ insertTypesEntry: true })],
  build: {
    lib: {
      // Multiple entry points for structured imports
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        branding: resolve(__dirname, 'src/branding/index.ts'),
      },
      formats: ['es']
    },
    rollupOptions: {
      output: {
        // Keeps the dist folder organized
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: 'assets/[name][extname]'
      }
    }
  }
});