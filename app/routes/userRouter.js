const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const passport = require('passport')


router.get('/signup', function (req, res) {
  res.render('add_user')
})

router.post('/signup', function (req, res) {
  userController.add(req.body, function (err, user) {
    if (err) {
      res.status(404)
      res.render('add_user', { message: 'nie udało się dodać użytkownika' })
    } else {
      req.flash('message', 'Dodano użytkownika')
      res.redirect('/login')
    }
  })

})

router.get('/logout', function (req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err)
    }
    res.redirect('/login')
  })

})

router.get('/login', userController.isLoggedOut, function (req, res) {
  res.render('login_user', { message: req.flash('message') })
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local-login', function (err, user, info) {
    console.log('post.login passport.authenticate')
    console.log(user.username)

    if (err) {
      return next(err)
    }

    if (!user) {
      console.log('NOT user')
      // req.session.msgCssClass = 'alert-danger'
      return res.redirect('/login')
    }

    req.logIn(user, (err) => {
      if (err) {
        return next(err)
      }

      console.log('passportCallBack')
      // req.session.msgCssClass = 'alert-success'
      return res.redirect('/addcustom')
    })
  })(req, res, next)
})

module.exports = router
