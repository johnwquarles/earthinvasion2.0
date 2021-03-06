'use strict';

angular.module('app.factories').factory('chat', function () {
  var returnObj = {};
  returnObj.messages = [];
  returnObj.updateMessages = function (arr) {
    this.messages = arr;
  };
  returnObj.getMessages = function () {
    return this.messages;
  };
  return returnObj;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFuZ3VsYXJBcHAvY2hhdEZhYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQzlCLE9BQU8sQ0FBQyxNQUFNLEVBQUUsWUFBWTtBQUMzQixNQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDbkIsV0FBUyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDeEIsV0FBUyxDQUFDLGNBQWMsR0FBRyxVQUFVLEdBQUcsRUFBRTtBQUN4QyxRQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztHQUNyQixDQUFBO0FBQ0QsV0FBUyxDQUFDLFdBQVcsR0FBRyxZQUFZO0FBQ2xDLFdBQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztHQUN0QixDQUFBO0FBQ0QsU0FBTyxTQUFTLENBQUM7Q0FDbEIsQ0FBQyxDQUFBIiwiZmlsZSI6IkFuZ3VsYXJBcHAvY2hhdEZhYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAuZmFjdG9yaWVzJylcbi5mYWN0b3J5KCdjaGF0JywgZnVuY3Rpb24gKCkge1xuICB2YXIgcmV0dXJuT2JqID0ge307XG4gIHJldHVybk9iai5tZXNzYWdlcyA9IFtdO1xuICByZXR1cm5PYmoudXBkYXRlTWVzc2FnZXMgPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgdGhpcy5tZXNzYWdlcyA9IGFycjtcbiAgfVxuICByZXR1cm5PYmouZ2V0TWVzc2FnZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZXM7XG4gIH1cbiAgcmV0dXJuIHJldHVybk9iajtcbn0pXG4iXX0=
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJBbmd1bGFyQXBwL2NoYXRGYWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2FwcC5mYWN0b3JpZXMnKVxuLmZhY3RvcnkoJ2NoYXQnLCBmdW5jdGlvbiAoKSB7XG4gIHZhciByZXR1cm5PYmogPSB7fTtcbiAgcmV0dXJuT2JqLm1lc3NhZ2VzID0gW107XG4gIHJldHVybk9iai51cGRhdGVNZXNzYWdlcyA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICB0aGlzLm1lc3NhZ2VzID0gYXJyO1xuICB9XG4gIHJldHVybk9iai5nZXRNZXNzYWdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlcztcbiAgfVxuICByZXR1cm4gcmV0dXJuT2JqO1xufSlcbiJdLCJmaWxlIjoiQW5ndWxhckFwcC9jaGF0RmFjLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=