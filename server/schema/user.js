"use strict";

const Schema = require('mongoose').Schema;
const passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
  email: String,
  token: String,
  isAdmin: Boolean
});

UserSchema.plugin(passportLocalMongoose, {
  usernameLowerCase: true
});

// Compile model from schema
module.exports = UserSchema;
