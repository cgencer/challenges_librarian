import express from 'express';
import { authRoutes } from './auth.js';
import { userRoutes } from './user.js';
import { contentRoutes } from './content.js';
import expressListRoutes from 'express-list-routes';

const routes = express.Router();

routes.use(authRoutes);
routes.use(userRoutes);
routes.use(contentRoutes);

/*
console.log(':::--------------------------------');
console.log('::: Available routes are:');
expressListRoutes(routes);
*/
export default routes;
