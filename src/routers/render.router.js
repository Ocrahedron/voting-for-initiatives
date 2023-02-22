const router = require('express').Router();
const renderComponent = require('../utils/render');
const Home = require('../views/Home');
const Login = require('../views/Login');
const Registration = require('../views/Registration');

router.get('/', (req, res) => {
  const { user } = req;

  console.log(user);

  renderComponent(Home, { user: user?.name || 'no user' }, res);
});
router.get('/login', (req, res) => {
  renderComponent(Login, { user: false }, res);
});
router.get('/register', (req, res) => {
  renderComponent(Registration, { user: false }, res);
});
module.exports = router;
