angular.module('app.controllers')
.controller('loginCtrl', function($http, $window) {
  var vm = this;

  vm.login = function () {
    $http.get('/loginReq', {params: {username: vm.username, password: vm.password} })
    .then(hardRedirect)
    .catch(errHandle);
  }

  vm.register = function () {
    $http.get('/registerReq', {params: {username: vm.username, password: vm.password} })
    .then(hardRedirect)
    .catch(errHandle);
  }

  vm.guest = function () {
    $http.get('/guestReq')
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
  // this is how the sockets workkkk:
  //
  // vm.register = function () {
  //   socket.emit('test', {email: vm.email, password: vm.password});
  // }
