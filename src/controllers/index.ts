import { AuthController } from './AuthController.js'
import { UserController } from './UserController.js'
import { ArticleController, ProductController, 
		 GameController, CommentController, ContentController } from './ContentController.js'

const authController = new AuthController();
const userController = new UserController();
const articleController = new ArticleController();
const productController = new ProductController();
const gameController = new GameController();
const contentController = new ContentController();
const commentController = new GameController();

export {
	authController,
    userController,
    articleController,
    productController,
    gameController,
    contentController,
    commentController,
}