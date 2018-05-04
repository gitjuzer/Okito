"use strict";
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://okito:5nu89nfdNHbexj0z@okitodb-llffi.mongodb.net/okito');

const UserSchema = require("./user");

module.exports = function() {
    mongoose.model('users', UserSchema);
};
