angular.module('app.factories')
.factory('timeCard', function () {
  var returnObj = {};
  returnObj.times = [];
  returnObj.addTime = function (obj) {
    var notInArr = this.times.reduce(function(time, acc) {
      return (obj.wave !== time.wave) && acc;
    }, true)
    if (notInArr) {
      this.times.push(obj);
    }
  }
  returnObj.getTimes = function () {
    return this.times;
  }
  return returnObj;
})
