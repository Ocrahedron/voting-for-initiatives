const express = require('express');
const passport = require('passport');
const {
  register,
  renderLoginPage,
  login,
  logout,
  renderRegistrationPage,
} = require('../controllers/AuthContoller');

const router = express.Router();

router
  .get('/login', renderLoginPage)
  .post('/login', login)
  .get('/register', renderRegistrationPage)
  .post('/register', register)
  .get('/logout', logout);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login', successReturnToOrRedirect: '/' }));

module.exports = router;
