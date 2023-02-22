const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
passport.use(new GoogleStrategy(
  {
    clientID:'1007111337210-89o0qp272euj5bvt2u8ps1i3oeb7bdk1.apps.googleusercontent.com',
    clientSecret:'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',
    callbackURL:'http://localhost:3000/auth/google/callback',
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
