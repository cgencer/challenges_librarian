import { Router } from 'express';
import UserController from '../controllers/UserController';
import { accessVerifier } from '../helpers/auth.mw';
const usersRouter = Router();


// @ts-ignore
router.get('/:id', UserController.get_user);
// @ts-ignore
router.put('/:id', accessVerifier, UserController.update_user);
// @ts-ignore
router.delete('/:id', accessVerifier, UserController.delete_user);

export default usersRouter;
