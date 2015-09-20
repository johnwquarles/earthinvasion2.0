angular.module('app.factories')
.factory('timeCard', function () {
  var returnObj = {};
  returnObj.times = [];
  returnObj.addTime = function (obj) {
    this.times.push(obj);
  }
  returnObj.getTimes = function () {
    return this.times;
  }
  return returnObj;
})
