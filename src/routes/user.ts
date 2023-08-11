const router = require('express').Router();

import { accessVerifier } from '../helpers/auth';
import { get_user, update_user, delete_user } from '../controllers/UserController';

router.get('/:id', get_user);
router.put('/:id', accessVerifier, update_user);
router.delete('/:id', accessVerifier, delete_user);

export default router;