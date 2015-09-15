var express = require('express'),
    router = express.Router(),
    path = require('path'),
    userModel = require(path.join(__dirname, "/../models/userModel"));

router
  .get('/login', function(req, res) {
    console.log(`received login request. email: ${req.query.email}, pass: ${req.query.password}`)
    res.end();
  })
  .get('/register', function(req, res) {
    console.log(`received registration request. email: ${req.query.email}, pass: ${req.query.password}`)
    res.end();
  });

module.exports = router;
