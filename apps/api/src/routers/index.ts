import { t } from '../utils/trpc.util';
import { exampleRouter } from './example.router';

export const appRouter = t.router({ example: exampleRouter });
export type AppRouter = typeof appRouter;
