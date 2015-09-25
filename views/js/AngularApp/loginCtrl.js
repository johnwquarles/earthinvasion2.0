angular.module('app.controllers')
.controller('loginCtrl', function($http, $window, $timeout) {
  var vm = this;
  var theresAnError = false;
  var events = [];
  vm.errorMsg = `placeholder so that it takes up space`;

  vm.login = function () {
    if (vm.username === (undefined || "") || vm.password === (undefined || "")) return errHandle({data: "Please enter a username and/or password!"});
    $http.get('/loginReq', {params: {username: vm.username, password: vm.password} })
    .then(hardRedirect)
    .catch(errHandle);
  }

  vm.register = function () {
    if (vm.username === (undefined || "") || vm.password === (undefined || "")) return errHandle({data: "Please enter a username and/or password!"});
    $http.get('/registerReq', {params: {username: vm.username, password: vm.password} })
    .then(hardRedirect)
    .catch(errHandle);
  }

  vm.guest = function () {
    $http.get('/guestReq')
    .then(hardRedirect)
    .catch(errHandle);
  }

  vm.displayError = function () {
    return theresAnError;
  }

  function hardRedirect () {
    $window.location.href = `${$window.location.origin}/`;
  }

  function errHandle (err) {
    events.forEach(function (event) {
      $timeout.cancel(event);
    });
    vm.errorMsg = err.data;
    theresAnError = true;
    events.push($timeout(function () {
      theresAnError = false;
    }, 3000));
  }
})
  // this is how the sockets workkkk:
  //
  // vm.register = function () {
  //   socket.emit('test', {email: vm.email, password: vm.password});
  // }
