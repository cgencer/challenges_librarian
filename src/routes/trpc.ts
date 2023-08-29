import * as trpc from '@trpc/server';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
import * as trpcExpress from '@trpc/server/adapters/express';
import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import { contentRoutes } from './content.js';

// https://dev.to/alousilva/vue3-typescript-express-trpc-setup-example-2mlh#server-script

export const createContext = ({req, res}: trpcExpress.CreateExpressContextOptions) => ({ req, res });
export type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();
export const trpcRouter = t.router({
	sayHello: t.procedure.query(async () => {
		const message = '';	//await redisClient.get("tRPC");
		return { message };
	}),
});
export type TrpcRouter = typeof trpcRouter;
