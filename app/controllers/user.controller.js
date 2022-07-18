const User = require('../models/User')
const bcrypt = require('bcrypt')

function userAdd(data, cb) {
  let newUser = new User(data)

  newUser.save(function (err, user) {
    if (err) {
      cb(err)
    } else {
      cb(null, user)
    }
  })
}

function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated()) {
    return next()
  }
  // if they aren't redirect them to the login page
  res.redirect('/login')
}

function isLoggedOut(req, res, next) {
  if (!req.isAuthenticated()) {
    return next()
  }
  res.redirect('/')
}

module.exports = {
  add: userAdd,
  isLoggedIn: isLoggedIn,
  isLoggedOut: isLoggedOut
}
