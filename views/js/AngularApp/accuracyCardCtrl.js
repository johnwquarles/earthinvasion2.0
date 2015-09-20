angular.module('app.controllers')
.controller('accuracyCardCtrl', function($scope, accuracyCard) {
  var vm = this;
  $scope.$on('refresh', function () {
    $scope.$apply();
  });
  vm.getAccuracies = function () {
    return accuracyCard.getAccuracies();
  }
})
