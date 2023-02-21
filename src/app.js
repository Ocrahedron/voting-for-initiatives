require('@babel/register');
require('dotenv').config();
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const express = require('express');
const logger = require('morgan');
const path = require('path');

const app = express();

const sessionConfig = {
  name: 'kyk',
  store: new FileStore({}),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  httpOnly: true,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 1000 * 60 * 60 * 24 * 10,
  },
};

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

app.use((req, res, next) => {
  console.log('\n\x1b[33m', 'req.session.user :', req.session?.user);
  res.locals.user = req.session?.user;
  next();
});

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
