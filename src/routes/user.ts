import express from 'express';
import { UserController } from '../controllers/UserController.js';
import { accessVerifier } from '../helpers/auth.mw.js';
import { Router } from 'express';
const routes = Router();

const uc = new UserController();
// @ts-ignore
routes.get('/:id', uc.get_user);
// @ts-ignore
routes.put('/:id', accessVerifier, uc.update_user);
// @ts-ignore
routes.delete('/:id', accessVerifier, uc.delete_user);

export { routes as userRoutes };
