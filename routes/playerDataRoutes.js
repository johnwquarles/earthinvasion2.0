var express = require('express'),
    router = express.Router(),
    path = require('path'),
    ctrl = require(path.join(__dirname, '/../controllers/userController'));

router
  .get('/times', function (req, res) {
    console.log(`Time for ${req.query.wave === 12 ? "victory": req.query.wave} was ${req.query.timeElapsed} seconds`)
  })

module.exports = router;
