import express from 'express';
import { ContentController } from '../controllers/ContentController.js';
import { Router } from 'express';
const routes = Router();

const cc = new ContentController();

// @ts-ignore
routes.get('/', cc.get_posts);
// @ts-ignore
routes.get('/:id', cc.get_post);
// @ts-ignore
routes.post('/', cc.create_post);
// @ts-ignore
routes.put('/:id', cc.update_post);
// @ts-ignore
routes.delete('/:id', cc.delete_post);

export { routes as contentRoutes };
