const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

module.exports = function (app, passport) {
  router.post('/register', function (req, res) {
    let email = req.body.email;
    let pw = req.body.password;

    const User = mongoose.model('users');
    crypto.randomBytes(32, function (ex, buf) {
      let token = buf.toString('hex');
      User.register(new User({
        username: email,
        token: token
      }), pw, function (err, usr) {
        res.json({
          auth: true,
          token: token
        });
      });
    });


  });

  router.post('/login', passport.authenticate('local', {
    session: false
  }), function (req, res) {
    crypto.randomBytes(32, function (ex, buf) {
      let token = buf.toString('hex');
      res.json({
        token: token,
        auth: true
      }).end();
    });

  });

  router.post('/logout', function (req, res) {
    res.redirect('/');
  });

  router.get('/profile',
    passport.authenticate('bearer', {
      session: false
    }),
    function (req, res) {
      res.json(req.user);
    });

  app.use("/rest/users", router);
};
