const router = require('express').Router();

import { get_posts, get_post, create_post, update_post, delete_post } from '../controllers/ContentController';

router.get('/', get_posts);
router.get('/:id', get_post);
router.post('/', create_post);
router.put('/:id', update_post);
router.delete('/:id', delete_post);

export default router;
