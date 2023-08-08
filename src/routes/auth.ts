const express = require('express');
const router = express.Router();

const { AuthController } = require('../controllers');

router.post('/register', AuthController.create_user);
router.post('/login', AuthController.login_user);

export {};				//FIXME: bypasses 'Cannot redeclare block-scoped variable' error of TypeScript
module.exports = router;