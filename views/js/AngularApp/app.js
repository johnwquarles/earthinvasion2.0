angular.module('app', ['app.controllers', 'app.factories', 'ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'loginCtrl',
      controllerAs: 'login'
    })
    .otherwise({redirectTo: '/login'})
})
