// refactor this as a proper router with a controller

var socketio = require('socket.io'),
    sharedsession = require('express-socket.io-session'),
    chalk = require('chalk'),
    path = require('path'),
    achievementModel = require(path.join(__dirname, '..', 'models', 'achievementModel'))(),
    leaderboardModel = require(path.join(__dirname, '..', 'models', 'leaderboardModel'))(),
    chatModel = require(path.join(__dirname, '..', 'models', 'chatModel'))();

module.exports = function Sockets (session, server) {
  console.log(chalk.blue(`== socket handler listening! ==\n`));
  var io = socketio(server);
  io.use(sharedsession(session));

  io.on('connection', function (socket) {
    console.log(chalk.green(`== Client connected: ${socket.id}.`));
    // send leaderboard data
    leaderboardModel.getTopTenTimes(function (err, results) {
      socket.emit('timeLeaderboard', results);
    })
    leaderboardModel.getTopTenAccuracies(function (err, results) {
      socket.emit('accuracyLeaderboard', results);
    })
    chatModel.getMessages(function (err, results) {
      socket.emit('chatMessages', results);
    })
    // get & send user's achievements upon initial connection
    // y'know, shouldn't really need to check for username since, in theory, you shouldn't be able to get into
    // the app without one. Maybe I ran into an issue with the server restarting & the session data being gone,
    // prompting this conditional?
    if (socket.handshake.session.username) {
      achievementModel.getUserAchievements(socket.handshake.session.username, function (err, achievements) {
        console.log(`initial load of ${socket.handshake.session.username}'s achievements, of which there are ${achievements.length}`);
        // store this array to the session to check for duplicates
        socket.handshake.session.achievements = achievements.map(function (obj) {return obj.achievementid});
        console.log(`session achievement array: ${socket.handshake.session.achievements}`);
        achievements && achievements.forEach(function(achievement) {
          // need to add a boolean so that the angular app knows that this isn't a newly gained achievement,
          // so that it doesn't trigger a popup.
          achievement.initialLoad = true;
          emitAchievement(socket, achievement);
        });
      });
    }

    // socket sent from Unity via its external helper is the SAME as the one that the Angular
    // app receives! Just reuse it! Don't need to check for username on the cookie session either.
    socket.on('time', function (obj) {
      // save to DB if it's the final time
      if (obj.message === `Total: `) {
        leaderboardModel.saveTime(socket.handshake.session.username, obj.timeElapsed, function () {
          console.log(`saved ${socket.handshake.session.username}'s total time of ${obj.timeElapsed} to the database`);
          // now that a new time has been saved, update leaderboards for **everyone**.
          leaderboardModel.getTopTenTimes(function (err, results) {
            io.emit('timeLeaderboard', results);
          })
        });
      }
      // displayed time is rounded; don't round value in the database.
      var roundedTime = +(obj.timeElapsed).toFixed(2);
      socket.emit('time', {message: obj.message, timeElapsed: roundedTime});
    });

    socket.on('accuracy', function (obj) {
      // save to DB if it's the final accuracy
      if (obj.message === `Overall: `) {
        leaderboardModel.saveAccuracy(socket.handshake.session.username, obj.accuracy, function () {
          console.log(`saved ${socket.handshake.session.username}'s total accuracy of ${obj.accuracy} to the database`);
          // now that a new accuracy has been saved, update leaderboards for **everyone**.
          leaderboardModel.getTopTenAccuracies(function (err, results) {
            io.emit('accuracyLeaderboard', results);
          })
        })
      }
      var roundedAcc = +(obj.accuracy).toFixed(2);
      socket.emit('accuracy', {message: obj.message, accuracy: roundedAcc});
    });

    socket.on('achievement', function (achievementid) {
      // if the incoming achievementid isn't already in the session array
      if (socket.handshake.session.achievements.indexOf(achievementid) === -1) {
        achievementModel.saveUserAchievement(socket.handshake.session.username, achievementid, function () {
          console.log(`saved achievement ${achievementid} to ${socket.handshake.session.username}`)
          socket.handshake.session.achievements.push(achievementid);
          // make a proper achievement object!
          achievementModel(achievementid, function (err, obj) {
            emitAchievement(socket, obj);
          });
        });
      }
    });

    socket.on('chat', function (message) {
      chatModel.saveMessage(socket.handshake.session.username, message, function () {
        // connected users must update their messages!
        chatModel.getMessages(function (err, messageArr) {
          io.emit('chatMessages', messageArr);
        })
      })
    })

    socket.on('clearCards', function () {
      socket.emit('clearCards');
    });

    socket.on('disconnect', function () {
      console.log(chalk.red(`== Client disconnected: ${socket.id} ==`));
    });

    // function getUserSocket () {
    //   return socketsArr.filter(function(otherSocket) {
    //     return socket.handshake.session.username === otherSocket.handshake.session.username;
    //   })[0];
    // }
  });
}

function emitAchievement (socket, obj) {
  socket.emit('achievement', obj);
}
