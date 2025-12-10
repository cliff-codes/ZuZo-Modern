import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
            '@shared': resolve(__dirname, '../shared'),
            '@assets': resolve(__dirname, './attached_assets'),
        },
    },
    root: '.',
    build: {
        outDir: resolve(__dirname, 'dist'),
        emptyOutDir: true,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    // Node modules go into vendor chunks
                    if (id.includes('node_modules')) {
                        // React and React DOM
                        if (id.includes('react') || id.includes('react-dom') || id.includes('react-router') || id.includes('wouter')) {
                            return 'react-vendor';
                        }
                        // Radix UI components
                        if (id.includes('@radix-ui')) {
                            return 'ui-vendor';
                        }
                        // Framer Motion
                        if (id.includes('framer-motion')) {
                            return 'animation-vendor';
                        }
                        // TanStack Query
                        if (id.includes('@tanstack/react-query')) {
                            return 'query-vendor';
                        }
                        // Calendar/Date libraries
                        if (id.includes('react-day-picker') || id.includes('date-fns')) {
                            return 'calendar-vendor';
                        }
                        // Other large vendor libraries
                        if (id.includes('react-helmet') || id.includes('cmdk')) {
                            return 'misc-vendor';
                        }
                        // All other node_modules
                        return 'vendor';
                    }
                    // Partner portal pages and components (large bundle)
                    if (id.includes('partner-portal') || id.includes('partner-portal.tsx')) {
                        return 'partner-portal';
                    }
                },
            },
        },
        chunkSizeWarningLimit: 1000, // Increase limit to 1MB to reduce warnings for reasonable chunks
    },
    server: {
        port: 3000,
        open: true,
        fs: {
            strict: true,
        },
    },
});
