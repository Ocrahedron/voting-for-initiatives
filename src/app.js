require('@babel/register');
require('dotenv').config();

const express = require('express');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const bcrypt = require('bcrypt');

const morgan = require('morgan');
const FileStore = require('session-file-store')(session);

const mainRouter = require('./routes/main.routes');
const initRouter = require('./routes/init.routes');
const profileRouter = require('./routes/profile.routes');
const addInitRouter = require('./routes/addInit.routes');
const authRouter = require('./routes/auth.routes');

const { User } = require('../db/models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sessionConfig = {
  name: 'sid',
  store: new FileStore({}),
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  httpOnly: true,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 * 24 * 10,
  },
};

// Local Strategy
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return done(null, false, { message: 'Incorect email' });
      }
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return done(null, false, { message: 'Incorrect password' });
      }
      const { id, firstName, lastName } = user;
      return done(null, {
        id, firstName, lastName, email,
      });
    },
  ),
);

// Google strategy
passport.use(new GoogleStrategy(
  {
    clientID: '1007111337210-89o0qp272euj5bvt2u8ps1i3oeb7bdk1.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:3000/auth/google/callback',
  },
  (accessToken, refreshToken, profile, done) => {
    console.log('======================');
    console.log({ profile });
    console.log('======================');

    done(null, profile);
  },
));

passport.serializeUser((user, done) => {
  console.log('serializeUser=====================');
  console.log({ user });
  console.log('serializeUser=====================');

  done(null, { userId: user.id, name: user.displayName });
});

passport.deserializeUser((user, done) => {
  console.log('deserializeUser=====================');
  console.log({ user });
  console.log('deserializeUser=====================');

  done(null, user);
});

app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', mainRouter);
app.use('/', profileRouter);
app.use('/', addInitRouter);
app.use('/', initRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log('server running');
});
