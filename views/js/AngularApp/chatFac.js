angular.module('app.factories')
.factory('chat', function () {
  var returnObj = {};
  returnObj.messages = [];
  returnObj.updateMessages = function (arr) {
    this.messages = arr;
  }
  returnObj.getMessages = function () {
    return this.messages;
  }
  return returnObj;
})
