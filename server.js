require('dotenv').config();
const express = require('express');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const { Cases } = require('./models')
const { PORT } = process.env;
const news = require('./articles/articles');

// changed from app to server
const server = express();

// session middleware
const sess = {
    secret: 'keyboard cat',
    cookie: {
      maxAge: 24 * 60 * 60 * 1000
    },
    resave: false,
    saveUninitialized: true
}
server.use(session(sess));
server.use(passport.initialize());
server.use(passport.session());


// Serving up the static build file for React
server.use(express.static(path.resolve(__dirname + '/react-ui/build')));
server.use(express.json());

// to see if server is running
server.get('/heartbeat', (req, res) => {
    res.json({
        "is": "working"
    });
});



// getting Cases table from DB
server.get('/api/cases', async (req, res) => {
    const cases = await Cases.findAll();
    res.json(cases);
});

// getting cases from Cases table from DB by id
server.get('/api/cases/:id', async (req, res) => {
    const caseId = req.params.id;
    const caseDataById = await Cases.findAll({
        where: {
            id: caseId
        }
    });
    res.json(caseDataById);
});

// posting cases to Cases table in DB
server.post('/api/cases', async (req, res) => {
    console.log(req.body)   //empty object
    const { name, race, sex, age, height, location,
            year, images, body_condition,
            description, characteristics, agencies, cod } = req.body;
            console.log("name:",name)
            const newCase = await Cases.create({
                name, 
                race,
                sex,
                age,
                height,
                location,
                year,
                images,
                body_condition,
                description,
                characteristics,
                agencies,
                cod
            });
        console.log('new case entered successfuly', req.body);
        res.send({
            "message": "new case created successfully",
            "id": newCase.id
        });
});

server.get('/api/news', (req, res) => {
    res.send(news)
})

// Facebook Auth
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    profileFields: ['id', 'displayName', 'email', 'name', 'photos'],
    passReqToCallback: true,
  },
  async function(accessToken, refreshToken, profile, cb) {
    console.log("This is from facebook *******", JSON.stringify(profile));
    let user = await User.findOrCreate({
        where: {
            loginStrategy: profile.provider,
            loginStrategyId: profile.id,
            userName: profile.displayName
        }
    });
    cb(null, profile);
  }
));

// Sign in With Facebook Callback
server.get('/auth/facebook', passport.authenticate('facebook'));
// Sign in With Facebook Callback
server.get('/auth/facebook/callback',  // or callback
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

passport.serializeUser(function(user, cb) {
    cb(null, user);
});
passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});