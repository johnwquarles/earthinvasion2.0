angular.module('app.factories')
.factory('achievement', function () {
  var returnObj = {};
  returnObj.achievements = [];
  returnObj.addAchievement = function (obj) {
    this.achievements.push(obj);
  }
  returnObj.getAchievements = function () {
    return this.achievements;
  }
  return returnObj;
})
