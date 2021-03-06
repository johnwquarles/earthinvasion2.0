'use strict';

angular.module('app.controllers').controller('leaderboardCtrl', function ($scope, leaderboard) {
  var vm = this;
  $scope.$on('refresh', function () {
    $scope.$apply();
  });
  vm.isTimes = true;
  vm.whichBoard = function () {
    return this.isTimes;
  };
  vm.setBoardToTimes = function () {
    this.isTimes = true;
  };
  vm.setBoardToAccuracies = function () {
    this.isTimes = false;
  };
  vm.getTimes = function () {
    return leaderboard.getTimes();
  };
  vm.getAccuracies = function () {
    return leaderboard.getAccuracies();
  };
  vm.formatTime = function (totalSeconds) {
    var minutes = parseInt(totalSeconds / 60) % 60;
    var seconds = Math.floor(totalSeconds % 60 * 100) / 100;
    return minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
  };
  vm.formatPercentage = function (value) {
    return Math.floor(value * 100) / 100;
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFuZ3VsYXJBcHAvbGVhZGVyYm9hcmRDdHJsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUNoQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsVUFBUyxNQUFNLEVBQUUsV0FBVyxFQUFFO0FBQzNELE1BQUksRUFBRSxHQUFHLElBQUksQ0FBQztBQUNkLFFBQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFlBQVk7QUFDaEMsVUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0dBQ2pCLENBQUMsQ0FBQTtBQUNGLElBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLElBQUUsQ0FBQyxVQUFVLEdBQUcsWUFBWTtBQUMxQixXQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7R0FDckIsQ0FBQTtBQUNELElBQUUsQ0FBQyxlQUFlLEdBQUcsWUFBWTtBQUMvQixRQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztHQUNyQixDQUFBO0FBQ0QsSUFBRSxDQUFDLG9CQUFvQixHQUFHLFlBQVk7QUFDcEMsUUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7R0FDdEIsQ0FBQTtBQUNELElBQUUsQ0FBQyxRQUFRLEdBQUcsWUFBWTtBQUN4QixXQUFPLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztHQUMvQixDQUFBO0FBQ0QsSUFBRSxDQUFDLGFBQWEsR0FBRyxZQUFZO0FBQzdCLFdBQU8sV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO0dBQ3BDLENBQUE7QUFDRCxJQUFFLENBQUMsVUFBVSxHQUFHLFVBQVUsWUFBWSxFQUFFO0FBQ3RDLFFBQUksT0FBTyxHQUFHLFFBQVEsQ0FBRSxZQUFZLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2hELFFBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQUFBQyxZQUFZLEdBQUcsRUFBRSxHQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUMxRCxXQUFPLE9BQU8sR0FBRyxHQUFHLElBQUksT0FBTyxHQUFJLEVBQUUsR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFHLE9BQU8sQ0FBQSxBQUFDLENBQUM7R0FDbEUsQ0FBQTtBQUNELElBQUUsQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLEtBQUssRUFBRTtBQUNyQyxXQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztHQUN0QyxDQUFBO0NBQ0YsQ0FBQyxDQUFBIiwiZmlsZSI6IkFuZ3VsYXJBcHAvbGVhZGVyYm9hcmRDdHJsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2FwcC5jb250cm9sbGVycycpXG4uY29udHJvbGxlcignbGVhZGVyYm9hcmRDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCBsZWFkZXJib2FyZCkge1xuICB2YXIgdm0gPSB0aGlzO1xuICAkc2NvcGUuJG9uKCdyZWZyZXNoJywgZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS4kYXBwbHkoKTtcbiAgfSlcbiAgdm0uaXNUaW1lcyA9IHRydWU7XG4gIHZtLndoaWNoQm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNUaW1lcztcbiAgfVxuICB2bS5zZXRCb2FyZFRvVGltZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pc1RpbWVzID0gdHJ1ZTtcbiAgfVxuICB2bS5zZXRCb2FyZFRvQWNjdXJhY2llcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlzVGltZXMgPSBmYWxzZTtcbiAgfVxuICB2bS5nZXRUaW1lcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbGVhZGVyYm9hcmQuZ2V0VGltZXMoKTtcbiAgfVxuICB2bS5nZXRBY2N1cmFjaWVzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBsZWFkZXJib2FyZC5nZXRBY2N1cmFjaWVzKCk7XG4gIH1cbiAgdm0uZm9ybWF0VGltZSA9IGZ1bmN0aW9uICh0b3RhbFNlY29uZHMpIHtcbiAgICB2YXIgbWludXRlcyA9IHBhcnNlSW50ICh0b3RhbFNlY29uZHMgLyA2MCkgJSA2MDtcbiAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRvdGFsU2Vjb25kcyAlIDYwKSAqIDEwMCkgLyAxMDA7XG4gICAgcmV0dXJuIG1pbnV0ZXMgKyBcIjpcIiArIChzZWNvbmRzICA8IDEwID8gXCIwXCIgKyBzZWNvbmRzIDogc2Vjb25kcyk7XG4gIH1cbiAgdm0uZm9ybWF0UGVyY2VudGFnZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKHZhbHVlICogMTAwKSAvIDEwMDtcbiAgfVxufSlcbiJdfQ==
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJBbmd1bGFyQXBwL2xlYWRlcmJvYXJkQ3RybC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnYXBwLmNvbnRyb2xsZXJzJylcbi5jb250cm9sbGVyKCdsZWFkZXJib2FyZEN0cmwnLCBmdW5jdGlvbigkc2NvcGUsIGxlYWRlcmJvYXJkKSB7XG4gIHZhciB2bSA9IHRoaXM7XG4gICRzY29wZS4kb24oJ3JlZnJlc2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLiRhcHBseSgpO1xuICB9KVxuICB2bS5pc1RpbWVzID0gdHJ1ZTtcbiAgdm0ud2hpY2hCb2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1RpbWVzO1xuICB9XG4gIHZtLnNldEJvYXJkVG9UaW1lcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlzVGltZXMgPSB0cnVlO1xuICB9XG4gIHZtLnNldEJvYXJkVG9BY2N1cmFjaWVzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaXNUaW1lcyA9IGZhbHNlO1xuICB9XG4gIHZtLmdldFRpbWVzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBsZWFkZXJib2FyZC5nZXRUaW1lcygpO1xuICB9XG4gIHZtLmdldEFjY3VyYWNpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGxlYWRlcmJvYXJkLmdldEFjY3VyYWNpZXMoKTtcbiAgfVxuICB2bS5mb3JtYXRUaW1lID0gZnVuY3Rpb24gKHRvdGFsU2Vjb25kcykge1xuICAgIHZhciBtaW51dGVzID0gcGFyc2VJbnQgKHRvdGFsU2Vjb25kcyAvIDYwKSAlIDYwO1xuICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigodG90YWxTZWNvbmRzICUgNjApICogMTAwKSAvIDEwMDtcbiAgICByZXR1cm4gbWludXRlcyArIFwiOlwiICsgKHNlY29uZHMgIDwgMTAgPyBcIjBcIiArIHNlY29uZHMgOiBzZWNvbmRzKTtcbiAgfVxuICB2bS5mb3JtYXRQZXJjZW50YWdlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IodmFsdWUgKiAxMDApIC8gMTAwO1xuICB9XG59KVxuIl0sImZpbGUiOiJBbmd1bGFyQXBwL2xlYWRlcmJvYXJkQ3RybC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9