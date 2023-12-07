import { AuthController } from './AuthController.js'
import { UserController } from './UserController.js'
import { ArticleController, BookController, ProductController, CommentController, ContentController, GameController, ReviewController } from './ContentController.js'

const authController = new AuthController();
const userController = new UserController();
const contentController = new ContentController();

const bookController = new BookController();
const gameController = new GameController();
const articleController = new ArticleController();
const productController = new ProductController();
const commentController = new CommentController();
const reviewController = new ReviewController();

export {
	authController,
    userController,
    contentController,
    bookController,
    gameController,
    articleController,
    productController,
    commentController,
    reviewController,
}
