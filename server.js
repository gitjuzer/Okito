// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://okito:5nu89nfdNHbexj0z@okitodb-llffi.mongodb.net/okito');

var db = mongoose.connection;

var users = require('./server/routes/users');

const api = require('./server/routes/api');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);
app.use('/users', users);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));
