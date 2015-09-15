angular.module('app', ['app.controllers', 'app.factories', 'ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/achievements.html',
      controller: 'appCtrl',
      controllerAs: 'app'
    })
    .otherwise({redirectTo: '/'})
})
