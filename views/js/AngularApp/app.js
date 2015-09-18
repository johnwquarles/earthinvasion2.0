angular.module('app', ['app.run', 'app.controllers', 'app.factories', 'ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/achievements.html',
      controller: 'appCtrl',
      controllerAs: 'app'
    })
    .when('/leaderboards', {
      templateUrl: 'views/leaderboards.html',
      controller: 'appCtrl',
      controllerAs: 'app'
    })
    .when('/timeCard', {
      templateUrl: 'views/timeCard.html',
      controller: 'appCtrl',
      controllerAs: 'app'
    })
    .when('/accuracyCard', {
      templateUrl: 'views/accuracyCard.html',
      controller: 'appCtrl',
      controllerAs: 'app'
    })
    .when('/chat', {
      templateUrl: 'views/chat.html',
      controller: 'appCtrl',
      controllerAs: 'app'
    })
    .when('/credits', {
      templateUrl: 'views/credits.html',
      controller: 'appCtrl',
      controllerAs: 'app'
    })
    .when('/logout', {
      templateUrl: 'views/logout.html',
      controller: 'appCtrl',
      controllerAs: 'app'
    })
    .otherwise({redirectTo: '/'})
})
