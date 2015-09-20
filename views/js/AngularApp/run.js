angular.module('app.run', [])
.run(function ($rootScope, timeCard, accuracyCard, achievement) {
  $rootScope.socket = io();
  $rootScope.socket.on('time', function (data) {
    timeCard.addTime(data);
    $rootScope.$broadcast('timeReceived');
  })
  $rootScope.socket.on('accuracy', function (data) {
    accuracyCard.addAccuracy(data);
    $rootScope.$broadcast('accuracyReceived');
  })
  $rootScope.socket.on('achievement', function (num) {
    achievement.addAchievement(num);
    $rootScope.$broadcast('achievementReceived');
  })
});
