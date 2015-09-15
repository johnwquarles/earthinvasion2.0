module.exports = function (dbName) {

  var _ = require('lodash'),
      bcrypt = require('bcrypt'),
      pg = require('pg'),
      db = dbName ? dbName : 'earthinvasion',
      url = `postgres://localhost:5432/${db}`;

  // ========== Constructor ==========

  // apply this when you pull data out of the database
  // hence you'll have a hash, not a password.
  function User(obj) {
    this.username = obj.username;
    this.passwordhash = obj.passwordhash;
  }

  // ========== Class methods ==========

  // returns the user object with username and passwordhash attributes.
  User.findByUsername = function (username, cb) {
    makeQuery(`SELECT * FROM users WHERE username = '${username}'`, function (err, result) {
      if (err) throw err;
      cb(null, result.rows[0]);
    });
  }

  User.login = function (userData, cb) {
    User.findByUsername(userData.username, function (err, result) {
      if (result) {
        bcrypt.compare(userData.password, result.passwordhash, function (err, match) {
          match ? cb(null, setPrototype(result)) : cb('Bad username or password!');
        });
      } else {
        cb('Bad username or password!');
      }
    });
  }

  // userData is an object of the data the user input into the registration form.
  // it isn't in the database yet and has .password, not .passwordhash
  User.createUser = function (userData, cb) {
    User.findByUsername(userData.username, function (err, result) {
      if (result) {
        cb('A user with this username already exists on the server!');
      } else {
        bcrypt.hash(userData.password, 8, function(err, hash) {
          userData.passwordhash = hash;
          var user = new User(userData);
          user.save(cb);
        });
      }
    });
  }

  // ========== Instance methods ==========

  User.prototype.save = function (cb) {
    pg.connect(url, function (err, db, close) {
      db.query(`INSERT INTO users (username, passwordhash) VALUES
               ('${this.username}', '${this.passwordhash}')`, function (err, result) {
        if (err) console.log(err);
        cb();
      })
    }.bind(this));
  }

  // ========== Utility ==========

  function makeQuery (query, cb) {
    pg.connect(url, function (err, db, done) {
      if (err) throw err;
      db.query(query, function (err, result) {
        cb(err, result);
      })
      done();
    })
  }

  function setPrototype (pojo) {
    return _.create(User.prototype, pojo);
  }

  return User;
}
