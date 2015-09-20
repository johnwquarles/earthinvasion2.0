angular.module('app', ['app.run', 'app.controllers', 'app.factories', 'ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/achievements.html',
    })
    .when('/leaderboards', {
      templateUrl: 'views/leaderboards.html',
    })
    .when('/timeCard', {
      templateUrl: 'views/timeCard.html',
    })
    .when('/accuracyCard', {
      templateUrl: 'views/accuracyCard.html',
    })
    .when('/chat', {
      templateUrl: 'views/chat.html',
    })
    .when('/credits', {
      templateUrl: 'views/credits.html',
    })
    .when('/logout', {
      templateUrl: 'views/logout.html',
    })
    .otherwise({redirectTo: '/'})
})
