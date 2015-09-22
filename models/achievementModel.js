// HEY, note: because this is a function that executes and RETURNS the User object,
// be sure to execute the require statement, ie userModel = require('userModel blah')();

module.exports = function (dbName) {

  var _ = require('lodash'),
      pg = require('pg'),
      db = dbName ? dbName : 'earthinvasion',
      url = process.env.DATABASE_URL ? process.env.DATABASE_URL : `postgres://localhost:5432/${db}`;

  var Model = function (achievementid, cb) {
    makeQuery(`SELECT * FROM achievements WHERE achievementid = ${achievementid}`, function (err, result) {
      if (err) throw err;
      cb(null, result.rows[0]);
    });
  };

  Model.getUserAchievements = function (username, cb) {
    makeQuery(`SELECT userachievements.achievementid, title, description FROM userachievements JOIN achievements ON (userachievements.achievementid = achievements.achievementid) WHERE username = '${username}'`, function (err, result) {
      if (err) throw err;
      cb(null, result.rows);
    });
  }

  Model.saveUserAchievement = function (username, achievementid, cb) {
    makeQuery(`INSERT INTO userachievements (username, achievementid) VALUES ('${username}', ${achievementid})`, function (err, result) {
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

  return Model;
}
