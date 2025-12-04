import { type Server } from 'node:http';
import { type Express } from 'express';
import runApp from './app';

/**
 * Development setup - API server only (no Vite/frontend)
 * For full-stack dev with Vite, use the original index-dev.ts with Vite setup
 */
export async function setupApiOnly(app: Express, _server: Server): Promise<void> {
    // API routes are already registered in app.ts via registerRoutes()
    // This is just a placeholder setup function for API-only mode
}

(async () => {
    await runApp(setupApiOnly);
})();
