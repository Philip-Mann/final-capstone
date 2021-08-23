const express = require('express');
const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport');

const { User } = require('../../models');

const router = express.Router();

// tell this strategy where to get the credentials it needs
passport.use(new FacebookStrategy({
  callbackURL: process.env.FACEBOOK_CALLBACK_URL,
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET
},
// this anonymous function fires after a successful login
async function(accessToken, refreshToken, profile, cb) {
	console.log("This is from facebook *******", JSON.stringify(profile));
  let user = await User.findOrCreate({
    where: {
      firstName: profile.displayName,
      loginStrategy:    profile.provider,
      loginStrategyId:  profile.id,
    }
  });
  cb(null, profile)
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  done(null, id);
});

// because this file is nested, this endpoint is really '/auth/facebook'
router.get('/facebook', passport.authenticate('facebook'));

// because this file is nested, this endpoint is really '/auth/facebook/callback'
router.get('/facebook/callback', 
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect(`/`);
  }
);

module.exports = router;
