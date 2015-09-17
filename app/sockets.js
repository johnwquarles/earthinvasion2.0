var socketio = require('socket.io'),
    sharedsession = require('express-socket.io-session'),
    chalk = require('chalk');

module.exports = function (session, server) {
  console.log(chalk.blue(`== socket handler listening! ==\n`));
  var io = socketio(server);

  // all incoming sockets are in here. Plan: When you get a message from Unity, deal with it on the server,
  // then go through the array looking for the socket with the same username but not === the socket that
  // fired the message. Then fire a message to it (because it has to be the corresponding Angular app).
  var socketsArr = [];

  io.use(sharedsession(session, {
    autoSave: true
  }));

  io.on('connection', function (socket) {
    console.log(chalk.green(`== Client connected: ${socket.id}. User is: ${socket.handshake.session.username} ==`));
    socketsArr.push(socket);
    console.log(`there are now ${socketsArr.length} elements in socketsArr`);
    socket.on('test', function (obj) {
      // test out socket.handshake.session !
      console.log(`test msg received. Email: ${obj.email}, Password: ${obj.password}`)
    })

    socket.on('disconnect', function () {
      console.log(chalk.red(`== Client disconnected: ${socket.id} ==`));
      var deletedSocketIndex = socketsArr.indexOf(socket);
      socketsArr.splice(deletedSocketIndex, 1);
      console.log(`there are ${socketsArr.length} elements left in socketsArr`);
    })
  });
}
