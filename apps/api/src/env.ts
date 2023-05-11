import dotenv from 'dotenv';

process.env.NODE_ENV !== 'production' && dotenv.config();

export const env = {
  IS_PROD: process.env.NODE_ENV === 'production',
  API_HOST: process.env.API_HOST ?? 'localhost',
  PORT: process.env.PORT ?? (3000 as const),
  WEB_URL: process.env.WEB_URL ?? 'http://localhost:5173',
};
