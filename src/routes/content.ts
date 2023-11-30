import express from 'express';

import { authController, userController, contentController, commentController,
		 articleController, bookController, productController } from '../controllers/index.js';

let routes = express.Router();
function subControllers(type: string, ctrl: any) {
	routes.get(`/${type}/`,  		ctrl.getContents);
	routes.get(`/${type}/:id`,  	ctrl.getContent);
	routes.post(`/${type}/`, 		ctrl.createContent);
	routes.put(`/${type}/`, 		ctrl.updateContent);
	routes.delete(`/${type}/:id`,	ctrl.deleteContent);
}
subControllers('articles', articleController);
subControllers('products', productController);
subControllers('books', bookController);
subControllers('comments', commentController);
export { routes as contentRoutes };
