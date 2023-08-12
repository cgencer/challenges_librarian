const router = require('express').Router();

import AuthController from '../controllers/AuthController';

// @ts-ignore
router.post('/register', AuthController.create_user);
// @ts-ignore
router.post('/login', AuthController.login_user);

export default router;