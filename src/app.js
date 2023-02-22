require('@babel/register');
require('dotenv').config();

const express = require('express');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3000;

const morgan = require('morgan');
const FileStore = require('session-file-store')(session);

//todo  routers
const RenderRouter = require('./routers/render.router');
const ApiRouter = require('./routers/api.router');
const GoogleRouter = require('./routers/google.router');

require('./googleAuth');


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


app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('dev'));

app.use('/', RenderRouter);
app.use('/api', ApiRouter);
app.use('/auth', GoogleRouter);


app.listen(PORT, () => {
  console.log('server running');
});
