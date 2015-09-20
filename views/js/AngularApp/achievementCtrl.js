angular.module('app.controllers')
.controller('achievementCtrl', function($scope, achievement) {
  var vm = this;
  $scope.$on('achievementReceived', function () {
    $scope.$apply();
  })
  vm.getAchievements = function () {
    return achievement.getAchievements();
  }
})
