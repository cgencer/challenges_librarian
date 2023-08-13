import { Router } from 'express';
import AuthController from '../controllers/AuthController';
const authRouter = Router();

// @ts-ignore
authRouter.post('/register', AuthController.create_user);
// @ts-ignore
authRouter.post('/login', AuthController.login_user);

export default authRouter;
