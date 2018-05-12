const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const User = mongoose.model('users');

module.exports = function (app, passport) {
  router.post('/register', function (req, res) {
    let email = req.body.email;
    let pw = req.body.password;

    crypto.randomBytes(32, function (ex, buf) {
      let token = buf.toString('hex');
      User.register(new User({
        username: email,
        token: token,
        isAdmin: false
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
      User.update({
        _id: req.user._id
      }, {
        token: token
      }, function (err, affected, resp) {
        console.log(resp);
      })
      res.json({
        token: token,
        auth: true
      }).end();
    });

  });

  router.post('/logout', function (req, res) {
    res.redirect('/');
  });

  router.post('/auth', passport.authenticate('bearer', {
      session: false
    }),
    function (req, res) {
      res.send(200, {
        "result": true
      })
    });

  router.post('/admin', passport.authenticate('bearer', {
    session: false
  }), (req, res) => {
    User.findOne({
      _id: req.user._id,
      isAdmin: true
    }, (err, user) => {
      res.status(user ? 200 : 403).send().end();
    })
  });

  app.use("/rest/users", router);
};
