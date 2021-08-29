const express = require('express');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const { Users } = require('../../models');

const router = express.Router();

// --------------------------------------------------------
// --------------------- Google ---------------------------
// --------------------------------------------------------
// Sign in with Google
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL
},

async function(accessToken, refreshToken, profile, cb) {
  console.log("This is from google *******", JSON.stringify(profile));
  // console.log("Access Token" + accessToken);
  let user = await Users.findOrCreate({
    where: {
      loginStrategy: profile.provider,
      loginStrategyId: profile.id,
      firstName: profile.displayName
    }
  });

  cb(null, profile)
}
));

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// because this file is nested, this endpoint is really '/auth/facebook/callback'
router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    const id = req.user.id
    // console.log(">>>>>>>>>>>>>>");
    // console.log(req.user);
    // console.log("<<<<<<<<<<<<<<");
    res.redirect(`/profile/${id}`);
  }
);

// --------------------------------------------------------
// ----------------- Facebook -----------------------------
// --------------------------------------------------------

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
    const id = req.user.id;
    res.redirect(`/profile/:${id}`);
  }
);


module.exports = router;
