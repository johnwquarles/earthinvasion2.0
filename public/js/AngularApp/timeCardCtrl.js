'use strict';

angular.module('app.controllers').controller('timeCardCtrl', function ($scope, timeCard) {
  var vm = this;
  $scope.$on('refresh', function () {
    $scope.$apply();
  });
  vm.getTimes = function () {
    return timeCard.getTimes();
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFuZ3VsYXJBcHAvdGltZUNhcmRDdHJsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUNoQyxVQUFVLENBQUMsY0FBYyxFQUFFLFVBQVMsTUFBTSxFQUFFLFFBQVEsRUFBRTtBQUNyRCxNQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDZCxRQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxZQUFZO0FBQ2hDLFVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztHQUNqQixDQUFDLENBQUM7QUFDSCxJQUFFLENBQUMsUUFBUSxHQUFHLFlBQVk7QUFDeEIsV0FBTyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7R0FDNUIsQ0FBQTtDQUNGLENBQUMsQ0FBQSIsImZpbGUiOiJBbmd1bGFyQXBwL3RpbWVDYXJkQ3RybC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAuY29udHJvbGxlcnMnKVxuLmNvbnRyb2xsZXIoJ3RpbWVDYXJkQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgdGltZUNhcmQpIHtcbiAgdmFyIHZtID0gdGhpcztcbiAgJHNjb3BlLiRvbigncmVmcmVzaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAkc2NvcGUuJGFwcGx5KCk7XG4gIH0pO1xuICB2bS5nZXRUaW1lcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGltZUNhcmQuZ2V0VGltZXMoKTtcbiAgfVxufSlcbiJdfQ==
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJBbmd1bGFyQXBwL3RpbWVDYXJkQ3RybC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnYXBwLmNvbnRyb2xsZXJzJylcbi5jb250cm9sbGVyKCd0aW1lQ2FyZEN0cmwnLCBmdW5jdGlvbigkc2NvcGUsIHRpbWVDYXJkKSB7XG4gIHZhciB2bSA9IHRoaXM7XG4gICRzY29wZS4kb24oJ3JlZnJlc2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLiRhcHBseSgpO1xuICB9KTtcbiAgdm0uZ2V0VGltZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRpbWVDYXJkLmdldFRpbWVzKCk7XG4gIH1cbn0pXG4iXSwiZmlsZSI6IkFuZ3VsYXJBcHAvdGltZUNhcmRDdHJsLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=