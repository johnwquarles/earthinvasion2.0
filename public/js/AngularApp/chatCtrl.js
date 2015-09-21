'use strict';

angular.module('app.controllers').controller('chatCtrl', function ($rootScope, $scope, chat) {
  var vm = this;
  $scope.$on('refresh', function () {
    $scope.$apply();
  });
  vm.getMessages = function () {
    return chat.getMessages();
  };
  vm.sendMessage = function () {
    $rootScope.socket.emit('chat', this.messageEntry);
    this.messageEntry = '';
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFuZ3VsYXJBcHAvY2hhdEN0cmwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQ2hDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsVUFBUyxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtBQUN6RCxNQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDZCxRQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxZQUFZO0FBQ2hDLFVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztHQUNqQixDQUFDLENBQUE7QUFDRixJQUFFLENBQUMsV0FBVyxHQUFHLFlBQVk7QUFDM0IsV0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7R0FDM0IsQ0FBQTtBQUNELElBQUUsQ0FBQyxXQUFXLEdBQUcsWUFBWTtBQUMzQixjQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2xELFFBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0dBQ3hCLENBQUE7Q0FDRixDQUFDLENBQUEiLCJmaWxlIjoiQW5ndWxhckFwcC9jaGF0Q3RybC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAuY29udHJvbGxlcnMnKVxuLmNvbnRyb2xsZXIoJ2NoYXRDdHJsJywgZnVuY3Rpb24oJHJvb3RTY29wZSwgJHNjb3BlLCBjaGF0KSB7XG4gIHZhciB2bSA9IHRoaXM7XG4gICRzY29wZS4kb24oJ3JlZnJlc2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLiRhcHBseSgpO1xuICB9KVxuICB2bS5nZXRNZXNzYWdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2hhdC5nZXRNZXNzYWdlcygpO1xuICB9XG4gIHZtLnNlbmRNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuICAgICRyb290U2NvcGUuc29ja2V0LmVtaXQoJ2NoYXQnLCB0aGlzLm1lc3NhZ2VFbnRyeSk7XG4gICAgdGhpcy5tZXNzYWdlRW50cnkgPSAnJztcbiAgfVxufSlcbiJdfQ==
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJBbmd1bGFyQXBwL2NoYXRDdHJsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAuY29udHJvbGxlcnMnKVxuLmNvbnRyb2xsZXIoJ2NoYXRDdHJsJywgZnVuY3Rpb24oJHJvb3RTY29wZSwgJHNjb3BlLCBjaGF0KSB7XG4gIHZhciB2bSA9IHRoaXM7XG4gICRzY29wZS4kb24oJ3JlZnJlc2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLiRhcHBseSgpO1xuICB9KVxuICB2bS5nZXRNZXNzYWdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2hhdC5nZXRNZXNzYWdlcygpO1xuICB9XG4gIHZtLnNlbmRNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuICAgICRyb290U2NvcGUuc29ja2V0LmVtaXQoJ2NoYXQnLCB0aGlzLm1lc3NhZ2VFbnRyeSk7XG4gICAgdGhpcy5tZXNzYWdlRW50cnkgPSAnJztcbiAgfVxufSlcbiJdLCJmaWxlIjoiQW5ndWxhckFwcC9jaGF0Q3RybC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9