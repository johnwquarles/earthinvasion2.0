module.exports = function () {
  var randomNum = Math.floor(Math.random() * 100000);
  return `Guest${randomNum}`;
}
