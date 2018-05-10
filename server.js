// Schema first
require('./server/schema/registerschema')();
// Get dependencies
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = mongoose.model('users');

var users = require('./server/routes/users');

const api = require('./server/routes/api');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(passport.initialize());

passport.use(new LocalStrategy({
  session: false,
  usernameField: 'email'
}, User.authenticate()));

passport.use(new BearerStrategy(
  function (token, done) {
    console.log(token);
    User.findOne({
      token: token
    }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      return done(null, user, {
        scope: 'all'
      });
    });
  }
));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);
users(app, passport);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));
