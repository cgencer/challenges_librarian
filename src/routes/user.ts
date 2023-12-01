import express from 'express';
import { authController, userController } from '../controllers/index.js';
import { accessVerifier } from '../helpers/auth.mw.js';
//const routes = Router();
const routes = express.Router();

routes.get('/', userController.getUsers);
routes.get('/:id', userController.getUser);
routes.put('/:id', accessVerifier, userController.updateUser);
routes.delete('/:id', accessVerifier, userController.deleteUser);

export { routes as userRoutes };
