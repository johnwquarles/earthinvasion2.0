var express = require('express'),
    router = express.Router(),
    path = require('path'),
    ctrl = require(path.join(__dirname, '/../controllers/userController'));

router
  .get('/login', function (req, res) {
    req.session.user ? res.redirect('/'): res.render('login', {title: "Earth Invasion | Login or Register"});
  })
  .get('/loginReq', ctrl.login)
  .get('/registerReq', ctrl.register)
  .get('/guestReq', ctrl.guest)
  .get('/logoutReq', ctrl.logout)
  .get('/usernameReq', ctrl.username);

module.exports = router;
