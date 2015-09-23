'use strict';

angular.module('iFrameApp', []).factory('$parentScope', function ($window) {
  return $window.parent.angular.element($window.frameElement).scope();
}).controller('achievementPopupCtrl', function ($scope, $parentScope, $timeout) {
  var vm = this;
  var audio = new Audio('sound/achievement.mp3');
  var displayPopup = false;
  vm.displayPopup = function () {
    return displayPopup;
  };
  $parentScope.$on('achievementPopup', function (event, achievementObj) {
    // Make this into a queue? Doesn't show both achievements if they hit simultaneously
    vm.title = achievementObj.title;
    displayPopup = true;
    audio.play();
    $timeout(function () {
      displayPopup = false;
    }, 4000);
  });
  $parentScope.$on('refresh', function () {
    $scope.$apply();
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFuZ3VsYXJBcHAvaUZyYW1lQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBRTlCLE9BQU8sQ0FBQyxjQUFjLEVBQUUsVUFBUyxPQUFPLEVBQUU7QUFDekMsU0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0NBQ3JFLENBQUMsQ0FFRCxVQUFVLENBQUMsc0JBQXNCLEVBQUUsVUFBUyxNQUFNLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRTtBQUMzRSxNQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDZCxNQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQy9DLE1BQUksWUFBWSxHQUFHLEtBQUssQ0FBQztBQUN6QixJQUFFLENBQUMsWUFBWSxHQUFHLFlBQVk7QUFDNUIsV0FBTyxZQUFZLENBQUM7R0FDckIsQ0FBQTtBQUNELGNBQVksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxLQUFLLEVBQUUsY0FBYyxFQUFFOztBQUVwRSxNQUFFLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEMsZ0JBQVksR0FBRyxJQUFJLENBQUM7QUFDcEIsU0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2IsWUFBUSxDQUFDLFlBQVk7QUFDbkIsa0JBQVksR0FBRyxLQUFLLENBQUM7S0FDdEIsRUFBRSxJQUFJLENBQUMsQ0FBQztHQUNWLENBQUMsQ0FBQTtBQUNGLGNBQVksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFlBQVk7QUFDdEMsVUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0dBQ2pCLENBQUMsQ0FBQTtDQUNILENBQUMsQ0FBQSIsImZpbGUiOiJBbmd1bGFyQXBwL2lGcmFtZUFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdpRnJhbWVBcHAnLCBbXSlcblxuLmZhY3RvcnkoJyRwYXJlbnRTY29wZScsIGZ1bmN0aW9uKCR3aW5kb3cpIHtcbiAgcmV0dXJuICR3aW5kb3cucGFyZW50LmFuZ3VsYXIuZWxlbWVudCgkd2luZG93LmZyYW1lRWxlbWVudCkuc2NvcGUoKTtcbn0pXG5cbi5jb250cm9sbGVyKCdhY2hpZXZlbWVudFBvcHVwQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHBhcmVudFNjb3BlLCAkdGltZW91dCkge1xuICB2YXIgdm0gPSB0aGlzO1xuICB2YXIgYXVkaW8gPSBuZXcgQXVkaW8oJ3NvdW5kL2FjaGlldmVtZW50Lm1wMycpO1xuICB2YXIgZGlzcGxheVBvcHVwID0gZmFsc2U7XG4gIHZtLmRpc3BsYXlQb3B1cCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZGlzcGxheVBvcHVwO1xuICB9XG4gICRwYXJlbnRTY29wZS4kb24oJ2FjaGlldmVtZW50UG9wdXAnLCBmdW5jdGlvbiAoZXZlbnQsIGFjaGlldmVtZW50T2JqKSB7XG4gICAgLy8gTWFrZSB0aGlzIGludG8gYSBxdWV1ZT8gRG9lc24ndCBzaG93IGJvdGggYWNoaWV2ZW1lbnRzIGlmIHRoZXkgaGl0IHNpbXVsdGFuZW91c2x5XG4gICAgdm0udGl0bGUgPSBhY2hpZXZlbWVudE9iai50aXRsZTtcbiAgICBkaXNwbGF5UG9wdXAgPSB0cnVlO1xuICAgIGF1ZGlvLnBsYXkoKTtcbiAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBkaXNwbGF5UG9wdXAgPSBmYWxzZTtcbiAgICB9LCA0MDAwKTtcbiAgfSlcbiAgJHBhcmVudFNjb3BlLiRvbigncmVmcmVzaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAkc2NvcGUuJGFwcGx5KCk7XG4gIH0pXG59KVxuXG5cbiJdfQ==
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJBbmd1bGFyQXBwL2lGcmFtZUFwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnaUZyYW1lQXBwJywgW10pXG5cbi5mYWN0b3J5KCckcGFyZW50U2NvcGUnLCBmdW5jdGlvbigkd2luZG93KSB7XG4gIHJldHVybiAkd2luZG93LnBhcmVudC5hbmd1bGFyLmVsZW1lbnQoJHdpbmRvdy5mcmFtZUVsZW1lbnQpLnNjb3BlKCk7XG59KVxuXG4uY29udHJvbGxlcignYWNoaWV2ZW1lbnRQb3B1cEN0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRwYXJlbnRTY29wZSwgJHRpbWVvdXQpIHtcbiAgdmFyIHZtID0gdGhpcztcbiAgdmFyIGF1ZGlvID0gbmV3IEF1ZGlvKCdzb3VuZC9hY2hpZXZlbWVudC5tcDMnKTtcbiAgdmFyIGRpc3BsYXlQb3B1cCA9IGZhbHNlO1xuICB2bS5kaXNwbGF5UG9wdXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRpc3BsYXlQb3B1cDtcbiAgfVxuICAkcGFyZW50U2NvcGUuJG9uKCdhY2hpZXZlbWVudFBvcHVwJywgZnVuY3Rpb24gKGV2ZW50LCBhY2hpZXZlbWVudE9iaikge1xuICAgIC8vIE1ha2UgdGhpcyBpbnRvIGEgcXVldWU/IERvZXNuJ3Qgc2hvdyBib3RoIGFjaGlldmVtZW50cyBpZiB0aGV5IGhpdCBzaW11bHRhbmVvdXNseVxuICAgIHZtLnRpdGxlID0gYWNoaWV2ZW1lbnRPYmoudGl0bGU7XG4gICAgZGlzcGxheVBvcHVwID0gdHJ1ZTtcbiAgICBhdWRpby5wbGF5KCk7XG4gICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgZGlzcGxheVBvcHVwID0gZmFsc2U7XG4gICAgfSwgNDAwMCk7XG4gIH0pXG4gICRwYXJlbnRTY29wZS4kb24oJ3JlZnJlc2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLiRhcHBseSgpO1xuICB9KVxufSlcblxuXG4iXSwiZmlsZSI6IkFuZ3VsYXJBcHAvaUZyYW1lQXBwLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=