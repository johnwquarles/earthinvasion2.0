var path = require('path'),
    userModel = require(path.join(__dirname, '/../models/userModel'))(),
    chalk = require('chalk');

module.exports.login = function (req, res) {
  var userData = makeUserDataObj(req);
  userModel.login(userData, function (err, userObj) {
    if (err) {
      return console.log(chalk.red.dim(
        `     = tried to log in user ${req.query.username} but got error: ${err}`
        )
      );
    }
    req.session.regenerate(function () {
      req.session.user = userObj;
      // req.session.save(function (err) {
      //   if (err) {console.log(err);}
      //   else {console.log(chalk.yellow(`      === saved user to session ID: ${req.sessionID}`));}
      // })
      console.log(chalk.yellow(`      === session ID is currently: ${req.sessionID}`));
      console.log(chalk.green.dim(`     = user ${userObj.username} logged in!`))
      res.end();
    })
  });
}

module.exports.register = function (req, res) {
  var userData = makeUserDataObj(req);
  userModel.createUser(userData, function (err) {
    if (err) {
      return console.log(chalk.red.dim(
        `     = tried to create user ${req.query.username} but got error: ${err}`
        )
      );
    }
    console.log(chalk.green.dim(`     = user ${req.query.username} created!`));
    module.exports.login(req, res);
  });
}

module.exports.logout = function (req, res) {
  req.session.regenerate(function () {
    console.log(chalk.red(`     = Logged out!`));
    res.end();
  });
}

function makeUserDataObj (req) {
  return {username: req.query.username, password: req.query.password};
}
