angular.module('app.factories')
.factory('leaderboard', function () {
  var returnObj = {};
  returnObj.times = [];
  returnObj.accuracies = [];
  returnObj.updateTimes = function (arr) {
    this.times = arr;
  }
  returnObj.updateAccuracies = function (arr) {
    this.accuracies = arr;
  }
  returnObj.getTimes = function () {
    return this.times;
  }
  returnObj.getAccuracies = function () {
    return this.accuracies;
  }
  return returnObj;
})
