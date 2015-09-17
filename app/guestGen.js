module.exports = function () {
  var randomNum = Math.floor(Math.random() * 1000000);
  return `Guest${randomNum}`;
}
