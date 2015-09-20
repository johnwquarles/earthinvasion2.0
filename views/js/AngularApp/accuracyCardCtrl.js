angular.module('app.controllers')
.controller('accuracyCardCtrl', function($scope, accuracyCard) {
  var vm = this;
  $scope.$on('accuracyReceived', function () {
    $scope.$apply();
  })
  vm.getAccuracies = function () {
    return accuracyCard.getAccuracies();
  }
})
