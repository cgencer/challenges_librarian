const router = require('express').Router();

import { create_user, login_user } from '../controllers/AuthController';

router.post('/register', create_user);
router.post('/login', login_user);

export default router;