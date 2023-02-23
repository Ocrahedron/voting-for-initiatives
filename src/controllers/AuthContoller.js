const bcrypt = require('bcrypt');
const passport = require('passport');
const renderTemplate = require('../utils/render');
const LoginPage = require('../views/auth/LoginPage');
const RegistrationPage = require('../views/auth/RegistrationPage');

const { User } = require('../../db/models');

const renderLoginPage = (req, res) => {
  try {
    renderTemplate(LoginPage, {}, res);
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return res.status(500).json({ err });
    if (!user) return res.status(401).json({ message: info.message });
    req.session.user = user;
    return res.status(200).json({ user: req.session.user, message: 'OK' });
  })(req, res, next);
};

const renderRegistrationPage = async (req, res) => {
  try {
    renderTemplate(RegistrationPage, {}, res);
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const {
      email, password, firstName, lastName,middleName
    } = req.body;
    if (email && password && firstName && lastName && middleName) {
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);
      const newUser = await User.create({
        email,
        password: hashPassword,
        firstName,
        lastName,
        middleName,

      });
      res.redirect(307, '/auth/login');
    } else throw new Error('All fields are required');
  } catch (error) {
    if (error.errors) { res.status(400).json({ message: error.errors[0].message }); } else res.status(400).json({ message: error.message });
  }
};

const logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
  res.send(200);
};

module.exports = {
  renderLoginPage, login, renderRegistrationPage, register, logout,
};
