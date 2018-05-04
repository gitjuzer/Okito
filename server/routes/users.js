const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

module.exports = function(app, passport) {
    router.post('/register', function (req, res) {
      let email = req.body.email;
      let pw = req.body.password;

      const User = mongoose.model('users');

      User.register(new User({email: email}), pwd, function(err) {
          console.log(err);
      });

    });

    router.post('/login', passport.authenticate('local', {
        session: false
    }), function (req, res) {
      console.log(req.user);
    });

    router.post('/logout', function (req, res) {
      res.redirect('/');
    });

    app.use("/rest/users", router);
};
