const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define schema
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: String,
    password: String
});

// Compile model from schema
var UserModel = mongoose.model('users', UserSchema );

router.post('/register', function(req, res) {
    let email = req.body.email;
    let pw = req.body.password;

    let user = new UserModel({
        email: email,
        password: pw
    });

    user.save(function(err) {
        if(err) {
            console.log(err);
        }
        else {
            console.log('Insertion of user successful!');
        }
        res.redirect("/");
    });
});

router.post('/login', function(req, res) {
    UserModel.findOne({ email: req.body.email }).select('email password').exec((err, user) => {
        if(err) {
            console.log("authentication error");
        }
        else if(!user) {
            res.redirect('/');
        }
        else if(user.password == req.body.password) {
            res.redirect('/home');
        }
    });
});

router.post('/logout', function(req, res) {
    res.redirect('/');
});

module.exports = router;