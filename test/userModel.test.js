require('babel/register');

var should = require('chai').should(),
    pg = require('pg'),
    path = require('path'),
    testDbName = 'testDb',
    userModel = require(path.join(__dirname, '/../models/userModel'))(testDbName);

var url = `postgres://localhost:5432/${testDbName}`;

describe('User Model', function () {

  before(function (ready) {
    pg.connect(url, function (err, db, close) {
      db.query(`INSERT INTO users (username, passwordhash) VALUES
                ('QuackAttack', '12341234')`, function (err, result) {
                  if (err) console.log(err.message);
                });
      close();
    })
    ready();
  });

  it ('should retrieve users with findByUsername', function (done) {
    userModel.findByUsername(`QuackAttack`, function (err, result) {
      result.username.should.equal(`QuackAttack`);
      done();
    })
  })

  it ('findByUsername should return with null if I search for a nonexistent user', function (done) {
    userModel.findByUsername(`IMNOTREAL`, function (err, result) {
      should.not.exist(result);
      done();
    })
  })

  var mockUserData = {username: 'testGuy', password: 'myPassword'};

  it ('should create users with createUser', function (done) {
    userModel.createUser(mockUserData, function () {
      userModel.findByUsername(`testGuy`, function (err, result) {
        result.username.should.equal(`testGuy`);
        done();
      });
    });
  });

  it ('should error appropriately when told to create a preexisting user', function (done) {
    userModel.createUser(mockUserData, function (err) {
      err.should.equal('A user with this username already exists on the server!');
      done();
    });
  });

  it ('should login users with login', function (done) {
    userModel.login(mockUserData, function (err, result) {
      result.username.should.equal(`testGuy`);
      done();
    })
  })

  it ('should deny login when password is incorrect', function (done) {
    userModel.login({username: 'testGuy', password: 'incorrectPassword'}, function (err, result) {
      err.should.equal('Bad username or password!');
      done();
    })
  })

  it ('should error appropriately when I try to login with a nonexistent user', function (done) {
    userModel.login({username: 'realNowhereMan', password: 'noWherePlan'}, function (err, result) {
      err.should.equal('Bad username or password!');
      done();
    })
  })

  // delete the mock users
  after(function (allDone) {
    pg.connect(url, function (err, db, close) {
      db.query(`DELETE FROM users *`, function (err, result) {
                  if (err) console.log(err.message);
                })
      close();
    })
    allDone();
  });
});
