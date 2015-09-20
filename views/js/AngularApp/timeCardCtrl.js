angular.module('app.controllers')
.controller('timeCardCtrl', function($scope, timeCard) {
  var vm = this;
  $scope.$on('refresh', function () {
    $scope.$apply();
  });
  vm.getTimes = function () {
    return timeCard.getTimes();
  }
})
