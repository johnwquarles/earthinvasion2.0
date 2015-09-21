angular.module('app.run', [])
.run(function ($rootScope, timeCard, accuracyCard, achievement, leaderboard, chat) {
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
    if (!data.initialLoad) $rootScope.$broadcast('achievementPopup', data);
    $rootScope.$broadcast('refresh');
  })
  $rootScope.socket.on('clearCards', function () {
    timeCard.clear();
    accuracyCard.clear();
    $rootScope.$broadcast('refresh');
  })
  $rootScope.socket.on('timeLeaderboard', function (arr) {
    leaderboard.updateTimes(arr);
    $rootScope.$broadcast('refresh');
  })
  $rootScope.socket.on('accuracyLeaderboard', function (arr) {
    leaderboard.updateAccuracies(arr);
    $rootScope.$broadcast('refresh');
  })
  $rootScope.socket.on('chatMessages', function (arr) {
    chat.updateMessages(arr);
    $rootScope.$broadcast('refresh');
  })
});
