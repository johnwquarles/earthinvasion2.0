var socket = io();

function sendTimeAjaxHelper (waveNum, timeElapsed) {
  socket.emit('time', {wave: waveNum, timeElapsed: timeElapsed});
}
