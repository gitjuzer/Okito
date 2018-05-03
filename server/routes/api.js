const express = require('express');
const path = require('path');
const http = require('http');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;