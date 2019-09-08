const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/users');
const { validateBody, schemas } = require('../helpers/routeHelpers');

router.post(
  '/signup',
  validateBody(schemas.authSchema),
  UsersController.signUp
);
router.post('/signin', UsersController.signIn);
router.get('/secret', UsersController.secret);

module.exports = router;
