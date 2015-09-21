angular.module('app.controllers')
.controller('chatCtrl', function($rootScope, $scope, chat) {
  var vm = this;
  $scope.$on('refresh', function () {
    $scope.$apply();
  })
  vm.getMessages = function () {
    return chat.getMessages();
  }
  vm.sendMessage = function () {
    $rootScope.socket.emit('chat', this.messageEntry);
    this.messageEntry = '';
  }
})
