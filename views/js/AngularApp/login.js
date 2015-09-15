angular.module('loginApp', [])
.controller('loginCtrl', function($http, $window) {
  var vm = this;

  vm.login = function () {
    $http.get('/loginReq', {params: {username: vm.username, password: vm.password} })
    .then(hardRedirect)
    .catch(function(err) {console.log(err);});
  }

  vm.register = function () {
    $http.get('/registerReq', {params: {username: vm.username, password: vm.password} })
    .then(hardRedirect)
    .catch(function(err) {console.log(err);});
  }

  function hardRedirect () {
    $window.location.href = `${$window.location.origin}/`;
  }
})
  // this is how the sockets workkkk:
  //
  // vm.register = function () {
  //   socket.emit('test', {email: vm.email, password: vm.password});
  // }
