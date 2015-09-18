'use strict';

angular.module('app.controllers').controller('tabsCtrl', function ($window, $http, activeTab) {
  var vm = this;

  vm.tabs = [{ name: 'achievements', link: 'achievements' }, { name: 'leaderboards', link: 'leaderboards' }, { name: 'timeCard', link: 'timeCard' }, { name: 'accuracy card', link: 'accuracyCard' }, { name: 'chat', link: 'chat' }, { name: 'logout', link: 'logout' }];

  vm.isSelected = function (tabLink) {
    return activeTab.getActive() === tabLink;
  };

  vm.setActive = function (tabLink) {
    activeTab.setActive(tabLink);
  };

  vm.logout = function () {
    $http.get('/logoutReq').then(hardRedirect)['catch'](errHandle);
  };

  function hardRedirect() {
    $window.location.href = $window.location.origin + '/';
  }

  function errHandle(err) {
    console.log(err);
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFuZ3VsYXJBcHAvdGFic0N0cmwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQ2hDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsVUFBUyxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtBQUMxRCxNQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7O0FBRWQsSUFBRSxDQUFDLElBQUksR0FBRyxDQUNSLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFDLEVBQzVDLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFDLEVBQzVDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDLEVBQ3BDLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFDLEVBQzdDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFDLEVBQzVCLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDLENBQ2pDLENBQUM7O0FBRUYsSUFBRSxDQUFDLFVBQVUsR0FBRyxVQUFVLE9BQU8sRUFBRTtBQUNqQyxXQUFPLFNBQVMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxPQUFPLENBQUM7R0FDMUMsQ0FBQTs7QUFFRCxJQUFFLENBQUMsU0FBUyxHQUFHLFVBQVUsT0FBTyxFQUFFO0FBQ2hDLGFBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7R0FDOUIsQ0FBQTs7QUFFRCxJQUFFLENBQUMsTUFBTSxHQUFHLFlBQVk7QUFDdEIsU0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUNiLENBQUMsU0FBUyxDQUFDLENBQUM7R0FDbkIsQ0FBQTs7QUFFRCxXQUFTLFlBQVksR0FBSTtBQUN2QixXQUFPLENBQUMsUUFBUSxDQUFDLElBQUksR0FBTSxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sTUFBRyxDQUFDO0dBQ3ZEOztBQUVELFdBQVMsU0FBUyxDQUFFLEdBQUcsRUFBRTtBQUN2QixXQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0dBQ2xCO0NBQ0YsQ0FBQyxDQUFDIiwiZmlsZSI6IkFuZ3VsYXJBcHAvdGFic0N0cmwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnYXBwLmNvbnRyb2xsZXJzJylcbi5jb250cm9sbGVyKCd0YWJzQ3RybCcsIGZ1bmN0aW9uKCR3aW5kb3csICRodHRwLCBhY3RpdmVUYWIpIHtcbiAgdmFyIHZtID0gdGhpcztcblxuICB2bS50YWJzID0gW1xuICAgIHtuYW1lOiAnYWNoaWV2ZW1lbnRzJywgbGluazogJ2FjaGlldmVtZW50cyd9LFxuICAgIHtuYW1lOiAnbGVhZGVyYm9hcmRzJywgbGluazogJ2xlYWRlcmJvYXJkcyd9LFxuICAgIHtuYW1lOiAndGltZUNhcmQnLCBsaW5rOiAndGltZUNhcmQnfSxcbiAgICB7bmFtZTogJ2FjY3VyYWN5IGNhcmQnLCBsaW5rOiAnYWNjdXJhY3lDYXJkJ30sXG4gICAge25hbWU6ICdjaGF0JywgbGluazogJ2NoYXQnfSxcbiAgICB7bmFtZTogJ2xvZ291dCcsIGxpbms6ICdsb2dvdXQnfVxuICBdO1xuXG4gIHZtLmlzU2VsZWN0ZWQgPSBmdW5jdGlvbiAodGFiTGluaykge1xuICAgIHJldHVybiBhY3RpdmVUYWIuZ2V0QWN0aXZlKCkgPT09IHRhYkxpbms7XG4gIH1cblxuICB2bS5zZXRBY3RpdmUgPSBmdW5jdGlvbiAodGFiTGluaykge1xuICAgIGFjdGl2ZVRhYi5zZXRBY3RpdmUodGFiTGluayk7XG4gIH1cblxuICB2bS5sb2dvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGh0dHAuZ2V0KCcvbG9nb3V0UmVxJylcbiAgICAudGhlbihoYXJkUmVkaXJlY3QpXG4gICAgLmNhdGNoKGVyckhhbmRsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYXJkUmVkaXJlY3QgKCkge1xuICAgICR3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAkeyR3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9gO1xuICB9XG5cbiAgZnVuY3Rpb24gZXJySGFuZGxlIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9XG59KTtcbiJdfQ==
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJBbmd1bGFyQXBwL3RhYnNDdHJsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAuY29udHJvbGxlcnMnKVxuLmNvbnRyb2xsZXIoJ3RhYnNDdHJsJywgZnVuY3Rpb24oJHdpbmRvdywgJGh0dHAsIGFjdGl2ZVRhYikge1xuICB2YXIgdm0gPSB0aGlzO1xuXG4gIHZtLnRhYnMgPSBbXG4gICAge25hbWU6ICdhY2hpZXZlbWVudHMnLCBsaW5rOiAnYWNoaWV2ZW1lbnRzJ30sXG4gICAge25hbWU6ICdsZWFkZXJib2FyZHMnLCBsaW5rOiAnbGVhZGVyYm9hcmRzJ30sXG4gICAge25hbWU6ICd0aW1lQ2FyZCcsIGxpbms6ICd0aW1lQ2FyZCd9LFxuICAgIHtuYW1lOiAnYWNjdXJhY3kgY2FyZCcsIGxpbms6ICdhY2N1cmFjeUNhcmQnfSxcbiAgICB7bmFtZTogJ2NoYXQnLCBsaW5rOiAnY2hhdCd9LFxuICAgIHtuYW1lOiAnbG9nb3V0JywgbGluazogJ2xvZ291dCd9XG4gIF07XG5cbiAgdm0uaXNTZWxlY3RlZCA9IGZ1bmN0aW9uICh0YWJMaW5rKSB7XG4gICAgcmV0dXJuIGFjdGl2ZVRhYi5nZXRBY3RpdmUoKSA9PT0gdGFiTGluaztcbiAgfVxuXG4gIHZtLnNldEFjdGl2ZSA9IGZ1bmN0aW9uICh0YWJMaW5rKSB7XG4gICAgYWN0aXZlVGFiLnNldEFjdGl2ZSh0YWJMaW5rKTtcbiAgfVxuXG4gIHZtLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkaHR0cC5nZXQoJy9sb2dvdXRSZXEnKVxuICAgIC50aGVuKGhhcmRSZWRpcmVjdClcbiAgICAuY2F0Y2goZXJySGFuZGxlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhcmRSZWRpcmVjdCAoKSB7XG4gICAgJHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7JHdpbmRvdy5sb2NhdGlvbi5vcmlnaW59L2A7XG4gIH1cblxuICBmdW5jdGlvbiBlcnJIYW5kbGUgKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH1cbn0pO1xuIl0sImZpbGUiOiJBbmd1bGFyQXBwL3RhYnNDdHJsLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=