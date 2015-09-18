angular.module('app.controllers')
.controller('tabsCtrl', function($window, $http, activeTab) {
  var vm = this;

  vm.tabs = [
    {name: 'achievements', link: 'achievements'},
    {name: 'leaderboards', link: 'leaderboards'},
    {name: 'timeCard', link: 'timeCard'},
    {name: 'accuracy card', link: 'accuracyCard'},
    {name: 'chat', link: 'chat'},
    {name: 'logout', link: 'logout'}
  ];

  vm.isSelected = function (tabLink) {
    return activeTab.getActive() === tabLink;
  }

  vm.setActive = function (tabLink) {
    activeTab.setActive(tabLink);
  }

  vm.logout = function () {
    $http.get('/logoutReq')
    .then(hardRedirect)
    .catch(errHandle);
  }

  function hardRedirect () {
    $window.location.href = `${$window.location.origin}/`;
  }

  function errHandle (err) {
    console.log(err);
  }
});
