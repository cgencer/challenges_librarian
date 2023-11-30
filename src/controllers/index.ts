import { AuthController } from './AuthController.js'
import { UserController } from './UserController.js'
import { ArticleController, ProductController, 
		 BookController, CommentController, ContentController } from './ContentController.js'

const authController = new AuthController();
const userController = new UserController();
const articleController = new ArticleController();
const productController = new ProductController();
const bookController = new BookController();
const contentController = new ContentController();
const commentController = new CommentController();

export {
	authController,
    userController,
    articleController,
    productController,
    bookController,
    contentController,
    commentController,
}