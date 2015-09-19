var socketio = require('socket.io'),
    sharedsession = require('express-socket.io-session'),
    chalk = require('chalk');

module.exports = function Sockets (session, server) {
  console.log(chalk.blue(`== socket handler listening! ==\n`));
  var io = socketio(server);

  io.on('connection', function (socket) {
    console.log(chalk.green(`== Client connected: ${socket.id}. User is: ${socket.handshake.session.username} ==`));

    // socket sent from Unity via its external helper is the SAME as the one that the Angular
    // app receives! Just reuse it! Don't need to check for username on the cookie session either.
    socket.on('time', function (obj) {
      socket.emit('time', {wave: obj.wave, timeElapsed: obj.timeElapsed});
    })

    socket.on('disconnect', function () {
      console.log(chalk.red(`== Client disconnected: ${socket.id} ==`));
    })

    // function getUserSocket () {
    //   return socketsArr.filter(function(otherSocket) {
    //     return socket.handshake.session.username === otherSocket.handshake.session.username;
    //   })[0];
    // }
  });
}
