const router = require('express').Router();

import ContentController from '../controllers/ContentController';

// @ts-ignore
router.get('/', ContentController.get_posts);
// @ts-ignore
router.get('/:id', ContentController.get_post);
// @ts-ignore
router.post('/', ContentController.create_post);
// @ts-ignore
router.put('/:id', ContentController.update_post);
// @ts-ignore
router.delete('/:id', ContentController.delete_post);

export default router;
