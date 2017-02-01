// helps authenticate user when they visit routes which require AUTH

var passport = require('passport');
var User = require('../models/user.js');

var config = require('../../config'); //app config file, gitignored

var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var LocalStrategy = require('passport-local');

// **note: 'done' callback provided by passport

//Create local strategy
var localOptions = {usernameField: 'email'};
var localLogin = new LocalStrategy(localOptions, function(email, password, done){
  //verify username and PW, call callback with user if it is correct username/PW, otherwise
  //callback w/ false
  User.findOne({ email: email }, function(err, user) {
    if(err){ return done(err); }
    if(!user){ return done(null, false); }

    user.comparePassword(password, function(err, isMatch){
      if(err){ return done(err); }
      if(!isMatch) { return done(null, false); }

      return done(null, user);
    });
  });
});

//Setup options for JWT Strategy
var jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

//Create JWT Strategy
var jwtLogin = new JwtStrategy(jwtOptions, function(payload, callback){
//see if user ID in payload exists in DB, if it does, calls 'callback' with
//that user, otherwise call callback without a user object
  User.findById(payload.sub, function(err, user){
    if(err){ return callback(err, false); }

    if(user){
      callback(null, user);
    }else{
      callback(null, false);
    }
  });
});

//tell passport to use this strat
passport.use(jwtLogin);
passport.use(localLogin);
