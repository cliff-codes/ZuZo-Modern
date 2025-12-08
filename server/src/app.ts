import { createServer, type Server } from 'node:http';
import express, { type Express } from 'express';
import cors from 'cors';
import { registerRoutes } from './routes';
import { errorHandler } from './middleware/error-handler';
import { requestLogger } from './middleware/request-logger';
import { securityHeaders } from './middleware/security';
import { logger } from './utils/logger';
import { getEnv } from './config/env';

declare module 'http' {
    interface IncomingMessage {
        rawBody: unknown;
    }
}

export const app = express();

// Trust proxy (for accurate IP addresses behind reverse proxies)
app.set('trust proxy', 1);

// Security headers
app.use(securityHeaders);

// CORS configuration
const corsOptions = {
    origin: process.env.CORS_ORIGIN || '*',
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

// Body parsing middleware
app.use(
    express.json({
        limit: '10mb',
        verify: (req, _res, buf) => {
            req.rawBody = buf;
        },
    }),
);
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request logging middleware
app.use(requestLogger);

// Register API routes
registerRoutes(app);

// 404 handler for API routes
app.use('/api/*', (_req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware (must be last)
app.use(errorHandler);

export default async function runApp(
    setup: (app: Express, server: Server) => Promise<void>,
): Promise<void> {
    // Validate environment variables
    const env = getEnv();
    logger.info('Environment validated successfully', 'app');

    const server = createServer(app);

    await setup(app, server);

    const port = env.PORT;

    server.on('error', (error: NodeJS.ErrnoException) => {
        if (error.syscall !== 'listen') {
            throw error;
        }

        switch (error.code) {
            case 'EACCES':
                logger.error(`Port ${port} requires elevated privileges`, error, 'app');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                logger.error(`Port ${port} is already in use`, error, 'app');
                process.exit(1);
                break;
            case 'ENOTSUP':
                logger.warn(
                    `Port ${port} is not supported on this system. Trying alternative port 3001...`,
                    'app',
                );
                server.listen(3001, '0.0.0.0');
                return;
            default:
                throw error;
        }
    });

    server.on('listening', () => {
        const addr = server.address();
        const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr?.port}`;
        logger.info(`Server is running on ${bind}`, 'app');
    });

    // Graceful shutdown handling
    const gracefulShutdown = (signal: string) => {
        logger.info(`Received ${signal}, shutting down gracefully...`, 'app');
        server.close(() => {
            logger.info('Server closed', 'app');
            process.exit(0);
        });

        // Force close after 10 seconds
        setTimeout(() => {
            logger.error('Forced shutdown after timeout', undefined, 'app');
            process.exit(1);
        }, 10000);
    };

    process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
    process.on('SIGINT', () => gracefulShutdown('SIGINT'));

    // Start the server
    server.listen(port, '0.0.0.0');
}
