angular.module('iFrameApp', [])

.factory('$parentScope', function($window) {
  return $window.parent.angular.element($window.frameElement).scope();
})

.controller('achievementPopupCtrl', function($scope, $parentScope, $timeout) {
  var vm = this;
  var audio = new Audio('sound/achievement.mp3');
  var displayPopup = false;
  vm.displayPopup = function () {
    return displayPopup;
  }
  $parentScope.$on('achievementPopup', function (event, achievementObj) {
    // Make this into a queue? Doesn't show both achievements if they hit simultaneously
    vm.title = achievementObj.title;
    displayPopup = true;
    audio.play();
    $timeout(function () {
      displayPopup = false;
    }, 4000);
  })
  $parentScope.$on('refresh', function () {
    $scope.$apply();
  })
})


