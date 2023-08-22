import express from 'express';
import { authController, userController, contentController } from '../controllers/index.js';
//const routes = Router();
const routes = express.Router();

routes.get('/', contentController.get_contents);
routes.get('/:id', contentController.get_content);
routes.post('/', contentController.create_content);
routes.put('/:id', contentController.update_content);
routes.delete('/:id', contentController.delete_content);

export { routes as contentRoutes };
