import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from 'ws';
import * as schema from './schema/schema';
import { logger } from './utils/logger';
import 'dotenv/config';

neonConfig.webSocketConstructor = ws;

if (!process.env.DATABASE_URL) {
    throw new Error(
        'DATABASE_URL must be set. Did you forget to provision a database?',
    );
}

// Create connection pool with proper configuration
export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 20, // Maximum number of clients in the pool
    idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
    connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection cannot be established
});

// Handle pool errors
pool.on('error', (err) => {
    logger.error('Unexpected database pool error', err, 'db');
});

// Test database connection on startup
pool.query('SELECT 1')
    .then(() => {
        logger.info('Database connection established successfully', 'db');
    })
    .catch((error) => {
        logger.error('Failed to establish database connection', error, 'db');
    });

export const db = drizzle({ client: pool, schema });
