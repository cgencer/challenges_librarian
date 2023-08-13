import authRouter from './auth';
import usersRouter from './user';
import contentRouter from './content';

import { Router } from 'express';

const routes = Router();
routes.use('/users', authRouter);
routes.use('/users', usersRouter);
routes.use('/users', contentRouter);
export default routes;
