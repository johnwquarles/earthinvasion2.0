'use strict';

angular.module('app.controllers').controller('loginCtrl', function ($http, $window) {
  var vm = this;

  vm.login = function () {
    $http.get('/loginReq', { params: { username: vm.username, password: vm.password } }).then(hardRedirect)['catch'](errHandle);
  };

  vm.register = function () {
    $http.get('/registerReq', { params: { username: vm.username, password: vm.password } }).then(hardRedirect)['catch'](errHandle);
  };

  vm.guest = function () {
    $http.get('/guestReq').then(hardRedirect)['catch'](errHandle);
  };

  function hardRedirect() {
    $window.location.href = $window.location.origin + '/';
  }

  function errHandle(err) {
    console.log('got an error: ');
    console.log(err);
  }
});
// this is how the sockets workkkk:
//
// vm.register = function () {
//   socket.emit('test', {email: vm.email, password: vm.password});
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFuZ3VsYXJBcHAvbG9naW5DdHJsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUNoQyxVQUFVLENBQUMsV0FBVyxFQUFFLFVBQVMsS0FBSyxFQUFFLE9BQU8sRUFBRTtBQUNoRCxNQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7O0FBRWQsSUFBRSxDQUFDLEtBQUssR0FBRyxZQUFZO0FBQ3JCLFNBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUMsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUMsRUFBRSxDQUFDLENBQ2hGLElBQUksQ0FBQyxZQUFZLENBQUMsU0FDYixDQUFDLFNBQVMsQ0FBQyxDQUFDO0dBQ25CLENBQUE7O0FBRUQsSUFBRSxDQUFDLFFBQVEsR0FBRyxZQUFZO0FBQ3hCLFNBQUssQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEVBQUMsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUMsRUFBRSxDQUFDLENBQ25GLElBQUksQ0FBQyxZQUFZLENBQUMsU0FDYixDQUFDLFNBQVMsQ0FBQyxDQUFDO0dBQ25CLENBQUE7O0FBRUQsSUFBRSxDQUFDLEtBQUssR0FBRyxZQUFZO0FBQ3JCLFNBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FDYixDQUFDLFNBQVMsQ0FBQyxDQUFDO0dBQ25CLENBQUE7O0FBRUQsV0FBUyxZQUFZLEdBQUk7QUFDdkIsV0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQU0sT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLE1BQUcsQ0FBQztHQUN2RDs7QUFFRCxXQUFTLFNBQVMsQ0FBRSxHQUFHLEVBQUU7QUFDdkIsV0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdCLFdBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDbEI7Q0FDRixDQUFDLENBQUEiLCJmaWxlIjoiQW5ndWxhckFwcC9sb2dpbkN0cmwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnYXBwLmNvbnRyb2xsZXJzJylcbi5jb250cm9sbGVyKCdsb2dpbkN0cmwnLCBmdW5jdGlvbigkaHR0cCwgJHdpbmRvdykge1xuICB2YXIgdm0gPSB0aGlzO1xuXG4gIHZtLmxvZ2luID0gZnVuY3Rpb24gKCkge1xuICAgICRodHRwLmdldCgnL2xvZ2luUmVxJywge3BhcmFtczoge3VzZXJuYW1lOiB2bS51c2VybmFtZSwgcGFzc3dvcmQ6IHZtLnBhc3N3b3JkfSB9KVxuICAgIC50aGVuKGhhcmRSZWRpcmVjdClcbiAgICAuY2F0Y2goZXJySGFuZGxlKTtcbiAgfVxuXG4gIHZtLnJlZ2lzdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICRodHRwLmdldCgnL3JlZ2lzdGVyUmVxJywge3BhcmFtczoge3VzZXJuYW1lOiB2bS51c2VybmFtZSwgcGFzc3dvcmQ6IHZtLnBhc3N3b3JkfSB9KVxuICAgIC50aGVuKGhhcmRSZWRpcmVjdClcbiAgICAuY2F0Y2goZXJySGFuZGxlKTtcbiAgfVxuXG4gIHZtLmd1ZXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICRodHRwLmdldCgnL2d1ZXN0UmVxJylcbiAgICAudGhlbihoYXJkUmVkaXJlY3QpXG4gICAgLmNhdGNoKGVyckhhbmRsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYXJkUmVkaXJlY3QgKCkge1xuICAgICR3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAkeyR3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9gO1xuICB9XG5cbiAgZnVuY3Rpb24gZXJySGFuZGxlIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZygnZ290IGFuIGVycm9yOiAnKVxuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH1cbn0pXG4gIC8vIHRoaXMgaXMgaG93IHRoZSBzb2NrZXRzIHdvcmtra2s6XG4gIC8vXG4gIC8vIHZtLnJlZ2lzdGVyID0gZnVuY3Rpb24gKCkge1xuICAvLyAgIHNvY2tldC5lbWl0KCd0ZXN0Jywge2VtYWlsOiB2bS5lbWFpbCwgcGFzc3dvcmQ6IHZtLnBhc3N3b3JkfSk7XG4gIC8vIH1cbiJdfQ==
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJBbmd1bGFyQXBwL2xvZ2luQ3RybC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnYXBwLmNvbnRyb2xsZXJzJylcbi5jb250cm9sbGVyKCdsb2dpbkN0cmwnLCBmdW5jdGlvbigkaHR0cCwgJHdpbmRvdykge1xuICB2YXIgdm0gPSB0aGlzO1xuXG4gIHZtLmxvZ2luID0gZnVuY3Rpb24gKCkge1xuICAgICRodHRwLmdldCgnL2xvZ2luUmVxJywge3BhcmFtczoge3VzZXJuYW1lOiB2bS51c2VybmFtZSwgcGFzc3dvcmQ6IHZtLnBhc3N3b3JkfSB9KVxuICAgIC50aGVuKGhhcmRSZWRpcmVjdClcbiAgICAuY2F0Y2goZXJySGFuZGxlKTtcbiAgfVxuXG4gIHZtLnJlZ2lzdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICRodHRwLmdldCgnL3JlZ2lzdGVyUmVxJywge3BhcmFtczoge3VzZXJuYW1lOiB2bS51c2VybmFtZSwgcGFzc3dvcmQ6IHZtLnBhc3N3b3JkfSB9KVxuICAgIC50aGVuKGhhcmRSZWRpcmVjdClcbiAgICAuY2F0Y2goZXJySGFuZGxlKTtcbiAgfVxuXG4gIHZtLmd1ZXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICRodHRwLmdldCgnL2d1ZXN0UmVxJylcbiAgICAudGhlbihoYXJkUmVkaXJlY3QpXG4gICAgLmNhdGNoKGVyckhhbmRsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYXJkUmVkaXJlY3QgKCkge1xuICAgICR3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAkeyR3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9gO1xuICB9XG5cbiAgZnVuY3Rpb24gZXJySGFuZGxlIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZygnZ290IGFuIGVycm9yOiAnKVxuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH1cbn0pXG4gIC8vIHRoaXMgaXMgaG93IHRoZSBzb2NrZXRzIHdvcmtra2s6XG4gIC8vXG4gIC8vIHZtLnJlZ2lzdGVyID0gZnVuY3Rpb24gKCkge1xuICAvLyAgIHNvY2tldC5lbWl0KCd0ZXN0Jywge2VtYWlsOiB2bS5lbWFpbCwgcGFzc3dvcmQ6IHZtLnBhc3N3b3JkfSk7XG4gIC8vIH1cbiJdLCJmaWxlIjoiQW5ndWxhckFwcC9sb2dpbkN0cmwuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==