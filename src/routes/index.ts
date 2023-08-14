import express from 'express';

import { authRoutes } from './auth.js';
import { userRoutes } from './user.js';
import { contentRoutes } from './content.js';

const routes = express.Router();

routes.use(authRoutes);
routes.use(userRoutes);
routes.use(contentRoutes);

export default routes;
