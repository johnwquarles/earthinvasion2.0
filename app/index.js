var app = require('express')(),
    chalk = require('chalk'),
    express = require('express'),
    redis = require('redis'),
    session = require('express-session'),
    redisStore = require('connect-redis')(session),
    redisClient = process.env.REDIS_URL ? redis.createClient(process.env.REDIS_URL) : redis.createClient(),
    path = require('path'),
    socketHandler = require(path.join(__dirname, '/sockets')),
    favicon = require('serve-favicon');

var userRoutes = require(path.join(__dirname, '..', 'routes', 'userRoutes'));

app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.png')))

// ========== Session ==========
var redisStoreOptions = process.env.REDIS_URL ?
                        {client: redisClient, ttl: 260} :
                        {client: redisClient, host: 'localhost', port: 6376, ttl: 260};
var newSession = require('express-session')({
  secret: 'iHopeDubstepNeverEnds',
  store: new redisStore(redisStoreOptions),
  resave: false,
  saveUninitialized: true
});

app.use(newSession);

app.use(function (req, res, next) {
  console.log(chalk.yellow(`      === session ID: ${req.sessionID}`));
  if (req.session.username) {
    console.log(`user ${req.session.username} is logged in`);
  } else {
    console.log(`user isn't logged in`);
  }
  next();
})

// ========== Routing ==========

app.get('/', function (req, res) {
  req.session.username ? res.render('index', { title: 'Unity Web Player | Earth Invasion' }) : res.redirect('/login');
});

app.use('/', userRoutes);

app.use('/usernameReq', function (req, res) {
  res.send(req.session.username);
});

// ========== Errors ==========

app
  .use(function (req, res, next) {
    res.status(404).send('This page does not exist');
  })
  .use(function (err, req, res, next) {
    console.log('error', err.stack);
    res.status(500).send('An error has occurred');
  });

// ========== Server ==========

function startNodeListener() {
  var port = process.env.PORT || 3000;
  var server = app.listen(port, function () {
    var port = server.address().port;
    var mode = app.get('env');

    console.log(chalk.blue(`\n=== === === `) + chalk.cyan(`Server listening on port ${port} in ${mode} mode...`) + chalk.blue(` === === ===\n`));
    // ========== Sockets ==========
    socketHandler(newSession, server);
  })
}

startNodeListener();
