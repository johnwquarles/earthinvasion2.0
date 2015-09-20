var socket = io();

function sendWaveTimeHelper (message, timeElapsed) {
  socket.emit('time', {message: message, timeElapsed: timeElapsed});
}

function sendAchievementHelper (achievementId) {
  socket.emit('achievement', achievementId);
}

function sendAccuracyHelper (message, accuracy) {
  socket.emit('accuracy', {message: message, accuracy: accuracy});
}

function clearCardsHelper () {
  socket.emit('clearCards');
}
