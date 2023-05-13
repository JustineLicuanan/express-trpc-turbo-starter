import { createExpressMiddleware } from '@trpc/server/adapters/express';
import cors from 'cors';
import express from 'express';
import { env } from './env';
import { appRouter } from './routers';
import { createContext } from './utils/trpc.util';

const app = express();

// Middlewares
app.use(cors({ origin: env.WEB_URL, credentials: true }));
app.use(express.json());

// tRPC Middleware
app.use('/trpc', createExpressMiddleware({ router: appRouter, createContext }));

export { app };
