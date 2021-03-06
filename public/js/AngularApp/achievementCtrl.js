'use strict';

angular.module('app.controllers').controller('achievementCtrl', function ($scope, achievement) {
  var vm = this;
  $scope.$on('refresh', function () {
    $scope.$apply();
  });
  vm.getAchievements = function () {
    return achievement.getAchievements();
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFuZ3VsYXJBcHAvYWNoaWV2ZW1lbnRDdHJsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUNoQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsVUFBUyxNQUFNLEVBQUUsV0FBVyxFQUFFO0FBQzNELE1BQUksRUFBRSxHQUFHLElBQUksQ0FBQztBQUNkLFFBQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFlBQVk7QUFDaEMsVUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0dBQ2pCLENBQUMsQ0FBQTtBQUNGLElBQUUsQ0FBQyxlQUFlLEdBQUcsWUFBWTtBQUMvQixXQUFPLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztHQUN0QyxDQUFBO0NBQ0YsQ0FBQyxDQUFBIiwiZmlsZSI6IkFuZ3VsYXJBcHAvYWNoaWV2ZW1lbnRDdHJsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2FwcC5jb250cm9sbGVycycpXG4uY29udHJvbGxlcignYWNoaWV2ZW1lbnRDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCBhY2hpZXZlbWVudCkge1xuICB2YXIgdm0gPSB0aGlzO1xuICAkc2NvcGUuJG9uKCdyZWZyZXNoJywgZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS4kYXBwbHkoKTtcbiAgfSlcbiAgdm0uZ2V0QWNoaWV2ZW1lbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhY2hpZXZlbWVudC5nZXRBY2hpZXZlbWVudHMoKTtcbiAgfVxufSlcbiJdfQ==
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJBbmd1bGFyQXBwL2FjaGlldmVtZW50Q3RybC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnYXBwLmNvbnRyb2xsZXJzJylcbi5jb250cm9sbGVyKCdhY2hpZXZlbWVudEN0cmwnLCBmdW5jdGlvbigkc2NvcGUsIGFjaGlldmVtZW50KSB7XG4gIHZhciB2bSA9IHRoaXM7XG4gICRzY29wZS4kb24oJ3JlZnJlc2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLiRhcHBseSgpO1xuICB9KVxuICB2bS5nZXRBY2hpZXZlbWVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFjaGlldmVtZW50LmdldEFjaGlldmVtZW50cygpO1xuICB9XG59KVxuIl0sImZpbGUiOiJBbmd1bGFyQXBwL2FjaGlldmVtZW50Q3RybC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9