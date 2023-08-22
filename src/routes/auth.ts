import express from 'express';
import { authController, userController, contentController } from '../controllers/index.js';
//const routes = Router();
const routes = express.Router();

routes.post('/register', authController.create_user);
routes.post('/login', authController.login_user);

export { routes as authRoutes };