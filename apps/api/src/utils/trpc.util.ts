import { initTRPC } from '@trpc/server';
import { Context } from '../configs/context.config';

export const t = initTRPC.context<Context>().create();
