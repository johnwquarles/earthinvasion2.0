angular.module('app.run', [])
.run(function ($rootScope, timeCard, accuracyCard, achievement) {
  $rootScope.socket = io();
  $rootScope.socket.on('time', function (data) {
    timeCard.addTime(data);
    $rootScope.$broadcast('refresh');
  })
  $rootScope.socket.on('accuracy', function (data) {
    accuracyCard.addAccuracy(data);
    $rootScope.$broadcast('refresh');
  })
  $rootScope.socket.on('achievement', function (data) {
    achievement.addAchievement(data);
    $rootScope.$broadcast('refresh');
  })
  $rootScope.socket.on('clearCards', function () {
    timeCard.clear();
    accuracyCard.clear();
    $rootScope.$broadcast('refresh');
  })
});
