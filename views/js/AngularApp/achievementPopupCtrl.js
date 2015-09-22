angular.module('app.controllers')
.controller('achievementPopupCtrl', function($scope, $timeout) {
  var vm = this;
  var audio = new Audio('sound/achievement.mp3');
  var displayPopup = false;
  vm.displayPopup = function () {
    return displayPopup;
  }
  $scope.$on('achievementPopup', function (event, achievementObj) {
    // Make this into a queue? Doesn't show both achievements if they hit simultaneously
    vm.title = achievementObj.title;
    displayPopup = true;
    audio.play();
    $scope.$apply();
    $timeout(function () {
      displayPopup = false;
    }, 4000);
  })
})
