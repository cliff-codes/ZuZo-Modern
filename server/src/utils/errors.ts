export class AppError extends Error {
    constructor(
        public statusCode: number,
        message: string,
        public isOperational = true,
    ) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

export class ValidationError extends AppError {
    constructor(message: string, public errors?: unknown) {
        super(400, message);
    }
}

export class NotFoundError extends AppError {
    constructor(resource: string) {
        super(404, `${resource} not found`);
    }
}

export class DatabaseError extends AppError {
    constructor(message: string, originalError?: Error) {
        super(500, message);
        if (originalError) {
            this.cause = originalError;
        }
    }
}

