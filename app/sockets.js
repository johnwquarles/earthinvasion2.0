var socketio = require('socket.io'),
    sharedsession = require('express-socket.io-session'),
    chalk = require('chalk');

module.exports = function (session, server) {
  console.log(chalk.blue(`== socket handler listening! ==\n`));
  var io = socketio(server);

  io.use(sharedsession(session, {
    autoSave: true
  }));

  io.on('connection', function (socket) {
    console.log(chalk.green(`== Client connected: ${socket.id} ==`));

    socket.on('test', function (obj) {
      // test out socket.handshake.session !
      console.log(`test msg received. Email: ${obj.email}, Password: ${obj.password}`)
    })

    socket.on('disconnect', function () {
      console.log(chalk.red(`== Client disconnected: ${socket.id} ==`));
    })
  });
}
