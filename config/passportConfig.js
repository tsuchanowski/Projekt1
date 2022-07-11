const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../app/models/User');

module.exports = () => {
    console.log('passportConfig');

    passport.use('local-login', new LocalStrategy(function (username, password, done) {
        User.findOne({ username: username }, function (err, user) {
            if (err) {
                return done(err)
            }
            
            console.log(user);
        })
    }
    ))
}