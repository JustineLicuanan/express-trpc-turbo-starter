import { t } from '../utils/trpc.util';

export const exampleRouter = t.router({
  // Link: http://localhost:3000/trpc/example.hello
  hello: t.procedure.query(() => ({ hello: 'world!' })),
});
