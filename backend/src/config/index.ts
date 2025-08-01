import dotenv from 'dotenv';
import { z } from 'zod';
import logger from '../utils/logger';

dotenv.config();

const envSchema = z.object({
  LINE_CLIENT_ID: z.string().min(1),
  LINE_CLIENT_SECRET: z.string().min(1),
  LINE_REDIRECT_URI: z.string().url(),
  SESSION_SECRET: z.string().min(10),
  PORT: z.string().default('5000'),
  FRONTEND_SUCCESS_URL: z.string().url().default('http://localhost:3000/success'),
  FRONTEND_ERROR_URL: z.string().url().default('http://localhost:3000/error'),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  logger.error('FATAL ERROR: Invalid environment variables:', parsed.error.format());
  process.exit(1);
}

const {
  LINE_CLIENT_ID,
  LINE_CLIENT_SECRET,
  LINE_REDIRECT_URI,
  SESSION_SECRET,
  PORT,
  FRONTEND_SUCCESS_URL,
  FRONTEND_ERROR_URL,
} = parsed.data;

const config = {
  port: PORT,
  sessionSecret: SESSION_SECRET,
  line: {
    clientId: LINE_CLIENT_ID,
    clientSecret: LINE_CLIENT_SECRET,
    redirectUri: LINE_REDIRECT_URI,
  },
  frontend: {
    successUrl: FRONTEND_SUCCESS_URL,
    errorUrl: FRONTEND_ERROR_URL,
  }
};

export default config;