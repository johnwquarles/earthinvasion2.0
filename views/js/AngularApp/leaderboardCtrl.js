angular.module('app.controllers')
.controller('leaderboardCtrl', function($scope, leaderboard) {
  var vm = this;
  $scope.$on('refresh', function () {
    $scope.$apply();
  })
  vm.isTimes = true;
  vm.whichBoard = function () {
    return this.isTimes;
  }
  vm.setBoardToTimes = function () {
    this.isTimes = true;
  }
  vm.setBoardToAccuracies = function () {
    this.isTimes = false;
  }
  vm.getTimes = function () {
    return leaderboard.getTimes();
  }
  vm.getAccuracies = function () {
    return leaderboard.getAccuracies();
  }
  vm.formatTime = function (totalSeconds) {
    var minutes = parseInt (totalSeconds / 60) % 60;
    var seconds = Math.floor((totalSeconds % 60) * 100) / 100;
    return minutes + ":" + (seconds  < 10 ? "0" + seconds : seconds);
  }
  vm.formatPercentage = function (value) {
    return Math.floor(value * 100) / 100;
  }
})
