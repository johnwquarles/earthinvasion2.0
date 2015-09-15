angular.module('app.controllers')
.controller('appCtrl', function($http, $window) {
  var vm = this;
  var socket = io();

  vm.logout = function () {
    $http.get('/logoutReq')
    .then(hardRedirect)
    .catch(function(err) {if (err) console.log(err);});
  }

  function hardRedirect () {
    $window.location.href = `${$window.location.origin}/`;
  }
})
