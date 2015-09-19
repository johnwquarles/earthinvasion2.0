angular.module('app.controllers')
.controller('appCtrl', function($http, $window, $scope, timeCard) {
  var vm = this;
  var socket = io();
  vm.getTimes = function () {
    return timeCard.getTimes();
  }
  socket.on('time', function (data) {
    timeCard.addTime(data);
    $scope.$apply();
    console.log(JSON.stringify(data));
  })
  socket.on('achievement', function (num) {
    console.log(`received achievement #${num}`);
  })
})
