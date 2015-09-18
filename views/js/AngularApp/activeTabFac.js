angular.module('app.factories')
.factory('activeTab', function () {
  var returnObj = {};
  var active = 'achievements';
  returnObj.setActive = function (tab) {
    active = tab;
  }
  returnObj.getActive = function () {
    return active;
  }
  return returnObj;
})
