var express = require('express'),
    router = express.Router(),
    path = require('path'),
    ctrl = require(path.join(__dirname, '/../controllers/userController'));

router
  .get('/login', ctrl.login)
  .get('/register', ctrl.register);

module.exports = router;
