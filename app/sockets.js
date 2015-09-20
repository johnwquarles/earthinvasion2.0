var socketio = require('socket.io'),
    sharedsession = require('express-socket.io-session'),
    chalk = require('chalk');

module.exports = function Sockets (session, server) {
  console.log(chalk.blue(`== socket handler listening! ==\n`));
  var io = socketio(server);

  io.on('connection', function (socket) {
    console.log(chalk.green(`== Client connected: ${socket.id}.`));

    // socket sent from Unity via its external helper is the SAME as the one that the Angular
    // app receives! Just reuse it! Don't need to check for username on the cookie session either.
    socket.on('time', function (obj) {
      // displayed time is rounded; don't round value in the database.
      var roundedTime = +(obj.timeElapsed).toFixed(2);
      socket.emit('time', {message: obj.message, timeElapsed: roundedTime});
    })

    socket.on('accuracy', function (obj) {
      var roundedAcc = +(obj.accuracy).toFixed(2);
      socket.emit('accuracy', {message: obj.message, accuracy: roundedAcc});
    })

    socket.on('achievement', function (achievementId) {
      console.log(`Received achievement ${achievementId}`);
      socket.emit('achievement', achievementId);
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
