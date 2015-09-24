angular.module('app.controllers')
.controller('achievementPopupCtrl', function($scope, $timeout, $window) {
  var vm = this;
  var audio = new Audio('sound/achievement.mp3');
  var displayPopup = false;
  vm.displayPopup = function () {
    return displayPopup;
  }
  vm.isMac = function () {
    return $window.navigator.platform === 'MacIntel';
  }
  $scope.$on('achievementPopup', function (event, achievementObj) {
    // Make this into a queue? Doesn't show both achievements if they hit simultaneously
    vm.title = achievementObj.title;
    displayPopup = true;
    audio.play();
    $timeout(function () {
      displayPopup = false;
    }, 4000);
  })
})
