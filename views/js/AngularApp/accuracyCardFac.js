angular.module('app.factories')
.factory('accuracyCard', function () {
  var returnObj = {};
  returnObj.accuracies = [];
  returnObj.addAccuracy = function (obj) {
    this.accuracies.push(obj);
  }
  returnObj.getAccuracies = function () {
    return this.accuracies;
  }
  returnObj.clear = function () {
    this.accuracies = [];
  }
  return returnObj;
})
