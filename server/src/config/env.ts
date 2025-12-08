import { z } from 'zod';
import 'dotenv/config';

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    PORT: z.string().transform(Number).pipe(z.number().int().positive()).default('3000'),
    DATABASE_URL: z.string().url('DATABASE_URL must be a valid URL'),
    QCONTACT_ORG_ID: z.string().optional(),
    QCONTACT_EVENT_ID: z.string().optional(),
    QCONTACT_WEBHOOK_URL: z.string().url().optional(),
});

export type Env = z.infer<typeof envSchema>;

let env: Env;

export function validateEnv(): Env {
    try {
        env = envSchema.parse(process.env);
        return env;
    } catch (error) {
        if (error instanceof z.ZodError) {
            const missingVars = error.errors.map((e) => `${e.path.join('.')}: ${e.message}`).join('\n');
            throw new Error(`Environment validation failed:\n${missingVars}`);
        }
        throw error;
    }
}

export function getEnv(): Env {
    if (!env) {
        env = validateEnv();
    }
    return env;
}

