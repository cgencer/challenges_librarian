const router = require('express').Router();

import { accessVerifier } from '../helpers/auth.mw';
import UserController from '../controllers/UserController';

// @ts-ignore
router.get('/:id', UserController.get_user);
// @ts-ignore
router.put('/:id', accessVerifier, UserController.update_user);
// @ts-ignore
router.delete('/:id', accessVerifier, UserController.delete_user);

export default router;