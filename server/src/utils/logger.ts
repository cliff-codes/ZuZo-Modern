type LogLevel = 'info' | 'warn' | 'error' | 'debug';

interface LogEntry {
    timestamp: string;
    level: LogLevel;
    message: string;
    source?: string;
    error?: Error;
    metadata?: Record<string, unknown>;
}

class Logger {
    private formatTime(): string {
        return new Date().toISOString();
    }

    private formatLog(level: LogLevel, message: string, source?: string, error?: Error, metadata?: Record<string, unknown>): string {
        const entry: LogEntry = {
            timestamp: this.formatTime(),
            level,
            message,
            ...(source && { source }),
            ...(error && { error: { name: error.name, message: error.message, stack: error.stack } }),
            ...(metadata && { metadata }),
        };

        const prefix = `[${entry.timestamp}] [${level.toUpperCase()}]${source ? ` [${source}]` : ''}`;
        return `${prefix} ${message}${error ? `\n${error.stack}` : ''}${metadata ? `\n${JSON.stringify(metadata, null, 2)}` : ''}`;
    }

    info(message: string, source?: string, metadata?: Record<string, unknown>): void {
        console.log(this.formatLog('info', message, source, undefined, metadata));
    }

    warn(message: string, source?: string, metadata?: Record<string, unknown>): void {
        console.warn(this.formatLog('warn', message, source, undefined, metadata));
    }

    error(message: string, error?: Error, source?: string, metadata?: Record<string, unknown>): void {
        console.error(this.formatLog('error', message, source, error, metadata));
    }

    debug(message: string, source?: string, metadata?: Record<string, unknown>): void {
        if (process.env.NODE_ENV === 'development') {
            console.debug(this.formatLog('debug', message, source, undefined, metadata));
        }
    }
}

export const logger = new Logger();

