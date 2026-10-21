import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `base: './'` keeps the build portable (GitHub Pages, any static host).
export default defineConfig({
  base: './',
  plugins: [react()],
  // The bundle is mostly dish and recipe text (~250 KB gzipped), which is expected.
  build: { chunkSizeWarningLimit: 1500 },
});
