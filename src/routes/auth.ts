import express from 'express';
import { AuthController } from '../controllers/AuthController.js';
import { Router } from 'express';
const routes = Router();

const ac = new AuthController();

// @ts-ignore
routes.post('/register', ac.create_user);
// @ts-ignore
routes.post('/login', ac.login_user);

export { routes as authRoutes };