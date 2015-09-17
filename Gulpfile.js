var gulp = require('gulp'),
    lr = require('tiny-lr')(),
    chalk = require('chalk'),
    fs = require('fs'),
    $    = require('gulp-load-plugins')({
      pattern: ['gulp-*', 'del', 'main-bower-files']
    }),
    LRPORT = 35729;

gulp.task('clean', function (cb) {
  $.del(['public/js/*.js', 'public/css/*.css', 'public/lib/*.js', 'public/lib/*.css', 'public/views/*.html'])
   .then(function () {cb()})
   .catch(function (err) {console.log(err);});
})

gulp.task('sass', function () {
  gulp
    .src('views/sass/main.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.sourcemaps.write())
    .pipe($.autoprefixer({
       browsers: ['> 1%'],
       cascade: true
     }))
    .pipe(gulp.dest('./public/css'))
});

gulp.task('babel', function () {
  gulp
    .src('views/js/**/*.js')
    .pipe($.sourcemaps.init())
    .pipe($.babel({
      sourceMaps: 'inline'
    }))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./public/js'))
})

gulp.task('jade', function () {
  gulp
    .src(['views/angular/**/*.jade', '!views/angular/**/_*.jade'])
    .pipe($.jade({pretty: true}))
    .pipe(gulp.dest('./public/views'))
})

gulp.task('bower', function() {
  // no bower.json to specify main bower file for socket.io.client, grumble
  var socketContent = fs.readFileSync(__dirname + '/public/bower_components/socket.io-client/socket.io.js').toString();
  gulp
    .src($.mainBowerFiles('**/*.js'))
    .pipe($.concat('build.js'))
    .pipe($.insert.append(socketContent))
    .pipe(gulp.dest('./public/lib'));
  gulp
    .src($.mainBowerFiles('**/*.less'))
    .pipe($.less())
    .pipe($.concat('build.css'))
    .pipe($.cssmin())
    .pipe(gulp.dest('./public/lib'));
});

gulp.task('watch', function () {
  gulp.watch(['views/**/*.scss'], ['sass']);
  gulp.watch(['views/**/*.js'], ['babel']);
  gulp.watch(['views/**/*.jade'], ['jade']);
  gulp.watch(['public/**/*', 'views/**/*'], liveReload);
});

gulp.task('compile', ['clean'], function () {
  gulp.start(['bower', 'babel', 'sass', 'jade', 'watch']);
});

gulp.task('default', ['compile'], function(){
  $.nodemon({script: 'index.js',
             ignore: ['public/js', 'views/js']});
  lr.listen(LRPORT, function () {
      console.log(chalk.magenta('    === === LiveReload listening on port ' + LRPORT + ' === ===    '));
    })
  setTimeout(function () {
    gulp.src('').pipe($.open(
      {uri: 'http://localhost:3000'}
    ))
  }, 4000);
});

function liveReload(event) {
  console.log(chalk.magenta(' === Livereloading on: ' + event.path + ' === '));
  var fileName = require('path').relative(__dirname, event.path);
  lr.changed({body: {files: [fileName]}});
}
