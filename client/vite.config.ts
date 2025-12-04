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
            '@assets': resolve(__dirname, '../attached_assets'),
        },
    },
    root: '.',
    build: {
        outDir: resolve(__dirname, '../dist/public'),
        emptyOutDir: true,
    },
    server: {
        port: 3000,
        open: true,
        fs: {
            strict: true,
        },
    },
});
