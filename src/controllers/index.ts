import { AuthController } from './AuthController.js'
import { UserController } from './UserController.js'
import { ContentController } from './ContentController.js'

const authController = new AuthController();
const userController = new UserController();
const contentController = new ContentController();

export {
	authController,
    userController,
    contentController
}