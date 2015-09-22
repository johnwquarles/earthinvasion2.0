// HEY, note: because this is a function that executes and RETURNS the User object,
// be sure to execute the require statement, ie userModel = require('userModel blah')();

module.exports = function (dbName) {

  var _ = require('lodash'),
      pg = require('pg'),
      db = dbName ? dbName : 'earthinvasion',
      url = process.env.DATABASE_URL ? DATABASE_URL : `postgres://localhost:5432/${db}`;

  var retObj = {};

  retObj.getTopTenTimes = function (cb) {
    makeQuery(`SELECT * FROM times ORDER BY time ASC LIMIT 10`, function (err, result) {
      if (err) throw err;
      cb(null, result.rows);
    });
  }

  retObj.saveTime = function (username, time, cb) {
    makeQuery(`INSERT INTO times (username, time) VALUES ('${username}', ${time})`, function (err, result) {
      if (err) throw err;
      cb();
    });
  }

  retObj.getTopTenAccuracies = function (cb) {
    makeQuery(`SELECT * FROM accuracies ORDER BY percentage DESC LIMIT 10`, function (err, result) {
      if (err) throw err;
      cb(null, result.rows);
    });
  }

  retObj.saveAccuracy = function (username, percentage, cb) {
    makeQuery(`INSERT INTO accuracies (username, percentage) VALUES ('${username}', ${percentage})`, function (err, result) {
      if (err) throw err;
      cb();
    });
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
