angular.module('app.controllers')
.controller('appCtrl', function($http, $window) {
  var vm = this;
  var socket = io();

  vm.logout = function () {
    $http.get('/logoutReq')
    .then(hardRedirect)
    .catch(errHandle);
  }

  function hardRedirect () {
    $window.location.href = `${$window.location.origin}/`;
  }

  function errHandle (err) {
    console.log(err);
  }
})
