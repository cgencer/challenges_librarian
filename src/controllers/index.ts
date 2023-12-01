import { AuthController } from './AuthController.js'
import { UserController } from './UserController.js'
import { BookController, CommentController, ContentController } from './ContentController.js'

const authController = new AuthController();
const userController = new UserController();
const bookController = new BookController();
const contentController = new ContentController();
const commentController = new CommentController();

export {
	authController,
    userController,
    contentController,
    bookController,
    commentController,
}