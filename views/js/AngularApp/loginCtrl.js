angular.module('app.controllers')
.controller('loginCtrl', function($http) {
  var vm = this;
  var socket = io();

  vm.login = function () {
    $http.get('/user/login', {params: {username: vm.username, password: vm.password} });
  }

  vm.register = function () {
    $http.get('/user/register', {params: {username: vm.username, password: vm.password} });
  }
})

  // this is how the sockets workkkk:
  //
  // vm.register = function () {
  //   socket.emit('test', {email: vm.email, password: vm.password});
  // }
