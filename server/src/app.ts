import { createServer, type Server } from 'node:http';
import express, { type Express, type Request, Response, NextFunction } from 'express';

import { registerRoutes } from 'routes';

export function log(message: string, source = 'express') {
    const formattedTime = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
    });

    console.log(`${formattedTime} [${source}] ${message}`);
}

export const app = express();

declare module 'http' {
    interface IncomingMessage {
        rawBody: unknown;
    }
}
app.use(
    express.json({
        verify: (req, _res, buf) => {
            req.rawBody = buf;
        },
    }),
);
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    const start = Date.now();
    const path = req.path;
    let capturedJsonResponse: Record<string, any> | undefined = undefined;

    const originalResJson = res.json;
    res.json = function (bodyJson, ...args) {
        capturedJsonResponse = bodyJson;
        return originalResJson.apply(res, [bodyJson, ...args]);
    };

    res.on('finish', () => {
        const duration = Date.now() - start;
        if (path.startsWith('/api')) {
            let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
            if (capturedJsonResponse) {
                logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
            }

            if (logLine.length > 80) {
                logLine = logLine.slice(0, 79) + '…';
            }

            log(logLine);
        }
    });

    next();
});

export default async function runApp(setup: (app: Express, server: Server) => Promise<void>) {
    const server = createServer(app);

    await setup(app, server);

    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
        const status = err.status || err.statusCode || 500;
        const message = err.message || 'Internal Server Error';

        res.status(status).json({ message });
        throw err;
    });

    // Use a different port and add error handling
    const port = parseInt(process.env.PORT || '3000', 10);

    server.on('error', (error: NodeJS.ErrnoException) => {
        if (error.syscall !== 'listen') {
            throw error;
        }

        switch (error.code) {
            case 'EACCES':
                console.error(`Port ${port} requires elevated privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(`Port ${port} is already in use`);
                process.exit(1);
                break;
            case 'ENOTSUP':
                console.error(`Port ${port} is not supported on this system`);
                console.error('Trying alternative port 3001...');
                // Try an alternative port
                server.listen(3001, '0.0.0.0');
                return;
            default:
                throw error;
        }
    });

    server.on('listening', () => {
        const addr = server.address();
        const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr?.port}`;
        log(`Server is running on ${bind}`);
    });

    // Start the server
    server.listen(port, '0.0.0.0');
}
