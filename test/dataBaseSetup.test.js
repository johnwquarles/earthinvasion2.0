require('babel/register');

var should = require('chai').should(),
    pg = require('pg'),
    path = require('path');

var url = 'postgres://localhost:5432/earthinvasion';

describe('Tests', function () {
  it ('are working', function () {
    true.should.equal(true);
  });
});

describe('Database', function () {
  it ('should be open', function (done) {
    pg.connect(url, function (err, db, close) {
      err && err.message.should.not.equal("connect ECONNREFUSED");
      close();
      done();
    })
  })

  it ('should have a main DB with the appropriate name', function (done) {
    pg.connect(url, function (err, db, close) {
      db.should.not.equal(null);
      close();
      done();
    })
  })
})
