import express from 'express';
import { authController, userController, contentController } from '../controllers/index.js';
//const routes = Router();
const routes = express.Router();

routes.post('/register', authController.createUser);
routes.post('/login', authController.loginUser);

export { routes as authRoutes };