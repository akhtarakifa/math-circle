import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Optimasi untuk file size yang lebih kecil (gunakan default esbuild)
    // Tanpa terser untuk menghindari dependency tambahan
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Vendor chunks untuk dependency eksternal
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-motion';
            }
            if (id.includes('katex')) {
              return 'vendor-katex';
            }
            if (id.includes('lucide')) {
              return 'vendor-icons';
            }
            // Chunk terakhir untuk dependency lainnya
            return 'vendor-other';
          }

          // Split sections menjadi chunk terpisah untuk lazy loading
          if (id.includes('sections/')) {
            const match = id.match(/sections\/([^/]+)/);
            if (match) {
              return `section-${match[1]}`;
            }
          }

          // Components dan utilities
          if (id.includes('components/')) {
            return 'components';
          }
        },
      },
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Asset inline threshold (default 4kb)
    assetsInlineLimit: 4096,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'katex', 'lucide-react'],
  },
});
