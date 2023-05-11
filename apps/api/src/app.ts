import { createExpressMiddleware } from '@trpc/server/adapters/express';
import cors from 'cors';
import express from 'express';
import { createContext } from './configs/context.config';
import { env } from './env';
import { appRouter } from './routers';

const app = express();

// Middlewares
app.use(cors({ origin: env.WEB_URL, credentials: true }));
app.use(express.json());

// tRPC Middleware
app.use('/trpc', createExpressMiddleware({ router: appRouter, createContext }));

export { app };
