const express = require("express");
const router = express.Router();
const user = require('../controllers/user.controller');
const passport = require('passport');

router.get('/signup', function (req, res) {

  res.render('add_user');
});

router.post('/signup', function (req, res) {

  user.add(req.body, function (err, user) {
    if (err) {
      res.status(404);
      res.json({
        error: 'User not created'
      });

    } else {
      res.json({ signup: true, username: user })
    }
  })
  res.redirect('/login');
});



router.get('/login', function (req, res) {

  res.render('login_user');
})

router.post('/login', function (req, res, next) {
  passport.authenticate('local-login', { failureRedirect: '/login' }, function (req, res) {
    res.redirect('/');
    console.log('router.post/login');
  }) (req, res, next)
});

router.get('/login', function (req, res) {

  user.login(req.body, function (err, token) {
    if (err) {
      res.status(404);
      res.json({
        error: 'User not logged'
      });
    } else if (token) {
      res.json({ success: true, jwt: token });
      res.redirect('/');
    } else {
      res.json({ success: false, message: 'username or password do not match' });
    }
  })

});

// router.post('/login', passport.authenticate('json-custom', { failWithError: true }),
//     function(req, res) {
//       res.status(200).json({
//         authenticated: req.isAuthenticated()
//       });
//     },
//     function(err, req, res, next) {
//       res.status(400).json({
//         authenticated: req.isAuthenticated(),
//         err: err.message
//       });
//     }
//   );


module.exports = router;