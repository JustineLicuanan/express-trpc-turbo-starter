import { inferAsyncReturnType } from '@trpc/server';
import { CreateExpressContextOptions } from '@trpc/server/adapters/express';
import { prisma } from './prisma.config';

export const createContext = ({ req, res }: CreateExpressContextOptions) => ({ req, res, prisma });
export type Context = inferAsyncReturnType<typeof createContext>;
