require('dotenv').config();

const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const passport = require('passport');
const passportConfig = require('./config/passportConfig');


const eventRouter = require('./app/routes/eventRouter');

const userRouter = require('./app/routes/userRouter');

app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('public'));
app.engine('hbs', hbs.engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));

// passport.use(new JsonCustomStrategy(
//     function(credentials, done) {
//       User.findOne({ username: credentials.username }, function (err, user) {


//         if (err) { return done(err); }
//         if (!user) { return done(null, false); }
//         if (!user.verifyPassword(credentials.password)) { return done(null, false); }
//         if (!user.verifyMfaCode(credentials.mfaCode)) { return done(null, false); }
//         return done(null, user);
//       });
//     }
//   ));

//   passport.use(new JsonStrategy(
//     function(username, password, done) {
//       Users.findOne({ username: username }, function (err, user) {
//         if (err) { return done(err); }
//         if (!user) { return done(null, false); }
//         if (!user.verifyPassword(password)) { return done(null, false); }
//         return done(null, user);
//       });
//     }
//   ));

//passport/
passportConfig();
app.use(passport.initialize());


app.use('/', userRouter);

app.use('/', eventRouter);

// app.use('/', eventApiRouter);


app.listen(process.env.PORT || 8080, function () {
  console.log('Serwer Node.js działa');
});