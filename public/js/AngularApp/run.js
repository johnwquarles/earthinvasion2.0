'use strict';

angular.module('app.run', []).run(function ($rootScope, timeCard, accuracyCard, achievement, leaderboard, chat) {
  $rootScope.socket = io();
  $rootScope.socket.on('time', function (data) {
    timeCard.addTime(data);
    $rootScope.$broadcast('refresh');
  });
  $rootScope.socket.on('accuracy', function (data) {
    accuracyCard.addAccuracy(data);
    $rootScope.$broadcast('refresh');
  });
  $rootScope.socket.on('achievement', function (data) {
    achievement.addAchievement(data);
    if (!data.initialLoad) $rootScope.$broadcast('achievementPopup', data);
    $rootScope.$broadcast('refresh');
  });
  $rootScope.socket.on('clearCards', function () {
    timeCard.clear();
    accuracyCard.clear();
    $rootScope.$broadcast('refresh');
  });
  $rootScope.socket.on('timeLeaderboard', function (arr) {
    leaderboard.updateTimes(arr);
    $rootScope.$broadcast('refresh');
  });
  $rootScope.socket.on('accuracyLeaderboard', function (arr) {
    leaderboard.updateAccuracies(arr);
    $rootScope.$broadcast('refresh');
  });
  $rootScope.socket.on('chatMessages', function (arr) {
    chat.updateMessages(arr);
    $rootScope.$broadcast('refresh');
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFuZ3VsYXJBcHAvcnVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQzVCLEdBQUcsQ0FBQyxVQUFVLFVBQVUsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO0FBQ2pGLFlBQVUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFLENBQUM7QUFDekIsWUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsSUFBSSxFQUFFO0FBQzNDLFlBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkIsY0FBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztHQUNsQyxDQUFDLENBQUE7QUFDRixZQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxJQUFJLEVBQUU7QUFDL0MsZ0JBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDL0IsY0FBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztHQUNsQyxDQUFDLENBQUE7QUFDRixZQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxJQUFJLEVBQUU7QUFDbEQsZUFBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqQyxRQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3ZFLGNBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7R0FDbEMsQ0FBQyxDQUFBO0FBQ0YsWUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVk7QUFDN0MsWUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2pCLGdCQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDckIsY0FBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztHQUNsQyxDQUFDLENBQUE7QUFDRixZQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLEdBQUcsRUFBRTtBQUNyRCxlQUFXLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLGNBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7R0FDbEMsQ0FBQyxDQUFBO0FBQ0YsWUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMscUJBQXFCLEVBQUUsVUFBVSxHQUFHLEVBQUU7QUFDekQsZUFBVyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2xDLGNBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7R0FDbEMsQ0FBQyxDQUFBO0FBQ0YsWUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLFVBQVUsR0FBRyxFQUFFO0FBQ2xELFFBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekIsY0FBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztHQUNsQyxDQUFDLENBQUE7Q0FDSCxDQUFDLENBQUMiLCJmaWxlIjoiQW5ndWxhckFwcC9ydW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnYXBwLnJ1bicsIFtdKVxuLnJ1bihmdW5jdGlvbiAoJHJvb3RTY29wZSwgdGltZUNhcmQsIGFjY3VyYWN5Q2FyZCwgYWNoaWV2ZW1lbnQsIGxlYWRlcmJvYXJkLCBjaGF0KSB7XG4gICRyb290U2NvcGUuc29ja2V0ID0gaW8oKTtcbiAgJHJvb3RTY29wZS5zb2NrZXQub24oJ3RpbWUnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHRpbWVDYXJkLmFkZFRpbWUoZGF0YSk7XG4gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdyZWZyZXNoJyk7XG4gIH0pXG4gICRyb290U2NvcGUuc29ja2V0Lm9uKCdhY2N1cmFjeScsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgYWNjdXJhY3lDYXJkLmFkZEFjY3VyYWN5KGRhdGEpO1xuICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgncmVmcmVzaCcpO1xuICB9KVxuICAkcm9vdFNjb3BlLnNvY2tldC5vbignYWNoaWV2ZW1lbnQnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGFjaGlldmVtZW50LmFkZEFjaGlldmVtZW50KGRhdGEpO1xuICAgIGlmICghZGF0YS5pbml0aWFsTG9hZCkgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdhY2hpZXZlbWVudFBvcHVwJywgZGF0YSk7XG4gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdyZWZyZXNoJyk7XG4gIH0pXG4gICRyb290U2NvcGUuc29ja2V0Lm9uKCdjbGVhckNhcmRzJywgZnVuY3Rpb24gKCkge1xuICAgIHRpbWVDYXJkLmNsZWFyKCk7XG4gICAgYWNjdXJhY3lDYXJkLmNsZWFyKCk7XG4gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdyZWZyZXNoJyk7XG4gIH0pXG4gICRyb290U2NvcGUuc29ja2V0Lm9uKCd0aW1lTGVhZGVyYm9hcmQnLCBmdW5jdGlvbiAoYXJyKSB7XG4gICAgbGVhZGVyYm9hcmQudXBkYXRlVGltZXMoYXJyKTtcbiAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3JlZnJlc2gnKTtcbiAgfSlcbiAgJHJvb3RTY29wZS5zb2NrZXQub24oJ2FjY3VyYWN5TGVhZGVyYm9hcmQnLCBmdW5jdGlvbiAoYXJyKSB7XG4gICAgbGVhZGVyYm9hcmQudXBkYXRlQWNjdXJhY2llcyhhcnIpO1xuICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgncmVmcmVzaCcpO1xuICB9KVxuICAkcm9vdFNjb3BlLnNvY2tldC5vbignY2hhdE1lc3NhZ2VzJywgZnVuY3Rpb24gKGFycikge1xuICAgIGNoYXQudXBkYXRlTWVzc2FnZXMoYXJyKTtcbiAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3JlZnJlc2gnKTtcbiAgfSlcbn0pO1xuIl19
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJBbmd1bGFyQXBwL3J1bi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnYXBwLnJ1bicsIFtdKVxuLnJ1bihmdW5jdGlvbiAoJHJvb3RTY29wZSwgdGltZUNhcmQsIGFjY3VyYWN5Q2FyZCwgYWNoaWV2ZW1lbnQsIGxlYWRlcmJvYXJkLCBjaGF0KSB7XG4gICRyb290U2NvcGUuc29ja2V0ID0gaW8oKTtcbiAgJHJvb3RTY29wZS5zb2NrZXQub24oJ3RpbWUnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHRpbWVDYXJkLmFkZFRpbWUoZGF0YSk7XG4gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdyZWZyZXNoJyk7XG4gIH0pXG4gICRyb290U2NvcGUuc29ja2V0Lm9uKCdhY2N1cmFjeScsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgYWNjdXJhY3lDYXJkLmFkZEFjY3VyYWN5KGRhdGEpO1xuICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgncmVmcmVzaCcpO1xuICB9KVxuICAkcm9vdFNjb3BlLnNvY2tldC5vbignYWNoaWV2ZW1lbnQnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGFjaGlldmVtZW50LmFkZEFjaGlldmVtZW50KGRhdGEpO1xuICAgIGlmICghZGF0YS5pbml0aWFsTG9hZCkgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdhY2hpZXZlbWVudFBvcHVwJywgZGF0YSk7XG4gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdyZWZyZXNoJyk7XG4gIH0pXG4gICRyb290U2NvcGUuc29ja2V0Lm9uKCdjbGVhckNhcmRzJywgZnVuY3Rpb24gKCkge1xuICAgIHRpbWVDYXJkLmNsZWFyKCk7XG4gICAgYWNjdXJhY3lDYXJkLmNsZWFyKCk7XG4gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdyZWZyZXNoJyk7XG4gIH0pXG4gICRyb290U2NvcGUuc29ja2V0Lm9uKCd0aW1lTGVhZGVyYm9hcmQnLCBmdW5jdGlvbiAoYXJyKSB7XG4gICAgbGVhZGVyYm9hcmQudXBkYXRlVGltZXMoYXJyKTtcbiAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3JlZnJlc2gnKTtcbiAgfSlcbiAgJHJvb3RTY29wZS5zb2NrZXQub24oJ2FjY3VyYWN5TGVhZGVyYm9hcmQnLCBmdW5jdGlvbiAoYXJyKSB7XG4gICAgbGVhZGVyYm9hcmQudXBkYXRlQWNjdXJhY2llcyhhcnIpO1xuICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgncmVmcmVzaCcpO1xuICB9KVxuICAkcm9vdFNjb3BlLnNvY2tldC5vbignY2hhdE1lc3NhZ2VzJywgZnVuY3Rpb24gKGFycikge1xuICAgIGNoYXQudXBkYXRlTWVzc2FnZXMoYXJyKTtcbiAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3JlZnJlc2gnKTtcbiAgfSlcbn0pO1xuIl0sImZpbGUiOiJBbmd1bGFyQXBwL3J1bi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9