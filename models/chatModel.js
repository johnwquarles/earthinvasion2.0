// HEY, note: because this is a function that executes and RETURNS the User object,
// be sure to execute the require statement, ie userModel = require('userModel blah')();

var messagesToPull = 22;

module.exports = function (dbName) {

  var _ = require('lodash'),
      pg = require('pg'),
      db = dbName ? dbName : 'earthinvasion',
      url = process.env.DATABASE_URL ? DATABASE_URL : `postgres://localhost:5432/${db}`;

  var retObj = {};

  retObj.getMessages = function (cb) {
    makeQuery(`SELECT * FROM chat ORDER BY id DESC LIMIT ${messagesToPull}`, function (err, result) {
      if (err) throw err;
      // reverse the array such that older messages display first:
      var result = result.rows.map(function (obj) {
        obj.message = _.unescape(obj.message);
        return obj;
      }).reverse();
      cb(null, result);
    });
  }

  retObj.saveMessage = function (username, message, cb) {
    if (message !== '') {
      message = _.escape(message);
      makeQuery(`INSERT INTO chat (username, message) VALUES ('${username}', '${message}')`, function (err, result) {
        if (err) throw err;
        cb();
      });
    }
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

  return retObj;
}
