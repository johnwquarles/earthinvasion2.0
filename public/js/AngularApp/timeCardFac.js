'use strict';

angular.module('app.factories').factory('timeCard', function () {
  var returnObj = {};
  returnObj.times = [];
  returnObj.addTime = function (obj) {
    this.times.push(obj);
  };
  returnObj.getTimes = function () {
    return this.times;
  };
  return returnObj;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFuZ3VsYXJBcHAvdGltZUNhcmRGYWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUM5QixPQUFPLENBQUMsVUFBVSxFQUFFLFlBQVk7QUFDL0IsTUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ25CLFdBQVMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLFdBQVMsQ0FBQyxPQUFPLEdBQUcsVUFBVSxHQUFHLEVBQUU7QUFDakMsUUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDdEIsQ0FBQTtBQUNELFdBQVMsQ0FBQyxRQUFRLEdBQUcsWUFBWTtBQUMvQixXQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7R0FDbkIsQ0FBQTtBQUNELFNBQU8sU0FBUyxDQUFDO0NBQ2xCLENBQUMsQ0FBQSIsImZpbGUiOiJBbmd1bGFyQXBwL3RpbWVDYXJkRmFjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2FwcC5mYWN0b3JpZXMnKVxuLmZhY3RvcnkoJ3RpbWVDYXJkJywgZnVuY3Rpb24gKCkge1xuICB2YXIgcmV0dXJuT2JqID0ge307XG4gIHJldHVybk9iai50aW1lcyA9IFtdO1xuICByZXR1cm5PYmouYWRkVGltZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICB0aGlzLnRpbWVzLnB1c2gob2JqKTtcbiAgfVxuICByZXR1cm5PYmouZ2V0VGltZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMudGltZXM7XG4gIH1cbiAgcmV0dXJuIHJldHVybk9iajtcbn0pXG4iXX0=
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJBbmd1bGFyQXBwL3RpbWVDYXJkRmFjLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAuZmFjdG9yaWVzJylcbi5mYWN0b3J5KCd0aW1lQ2FyZCcsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJldHVybk9iaiA9IHt9O1xuICByZXR1cm5PYmoudGltZXMgPSBbXTtcbiAgcmV0dXJuT2JqLmFkZFRpbWUgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgdGhpcy50aW1lcy5wdXNoKG9iaik7XG4gIH1cbiAgcmV0dXJuT2JqLmdldFRpbWVzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnRpbWVzO1xuICB9XG4gIHJldHVybiByZXR1cm5PYmo7XG59KVxuIl0sImZpbGUiOiJBbmd1bGFyQXBwL3RpbWVDYXJkRmFjLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=