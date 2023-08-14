import express from 'express';
import { authController, userController, contentController } from '../controllers/index.js';
import { accessVerifier } from '../helpers/auth.mw.js';
import { Router } from 'express';
const routes = Router();

routes.get('/:id', userController.get_user);
routes.put('/:id', accessVerifier, userController.update_user);
routes.delete('/:id', accessVerifier, userController.delete_user);

export { routes as userRoutes };
