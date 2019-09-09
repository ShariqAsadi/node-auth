const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/users');
const { validateBody, schemas } = require('../helpers/routeHelpers');
const passport = require('passport');
require('../passport');

router.post(
  '/signup',
  validateBody(schemas.authSchema),
  UsersController.signUp
);
router.post('/signin', 
  validateBody(schemas.authSchema), 
  passport.authenticate('local', { session: false }), 
  UsersController.signIn);

router.get('/secret', passport.authenticate('jwt', { session: false }), UsersController.secret);

router.post('/oauth/google', passport.authenticate('googleToken', { session: false }), UsersController.googleOauth);

module.exports = router;
