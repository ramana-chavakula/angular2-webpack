var gulp = require('gulp');
var gulpConfig = require('./gulpConfigFile.js');
// Include Our Plugins
var del = require('del');
var tslint = require("gulp-tslint");
var webpack = require('webpack');
var runSequence = require('run-sequence');
var server = require('gulp-express');
var surge = require('gulp-surge');
var karmaServer = require('karma').Server;
var sonar = require('gulp-sonar');

//typescript linting task
gulp.task('tslint', function () {
  return gulp.src('app/**/*.ts')
  .pipe(tslint({
    formatter: "verbose"
  }))
  .pipe(tslint.report());
});

// bundling task using webpack
/*
  here webpack is an asynchronus task and that too it's not a gulp task plugin so when we execute gulp task it will start the task and trigger
  webpack and will return saying that webpack has finshed. So, here we are using callback which will block the task to get finshed untill callback has been called.
  which is more similar to done used for jasmine unit test cases to test asynchronus functions.
*/
gulp.task('webpack', function (callback) {
  var webpackConig = require('./webpack.production.config.js');
  webpack(webpackConig, function(err, stats) {
    if(err) throw new Error("webpack", err);
    console.log("[webpack]", stats.toString({
        // output options
    }));
    callback();
  });
});

// Clean dist folder
gulp.task('clean', function () {
  return del(gulpConfig.distLoaction);
});

//copying server file to dist folder
gulp.task('copy:server', function () {
  return gulp.src(['server.js'])
    .pipe(gulp.dest(gulpConfig.distLoaction))
});

//copying json files to data in dist folder
gulp.task('copy:data', function () {
  return gulp.src(gulpConfig.data)
    .pipe(gulp.dest(gulpConfig.distDataLoaction))
});

//copying surge supported files to dist folder
gulp.task('deploy:copy', function () {
  return gulp.src(['404.html'])
    .pipe(gulp.dest(gulpConfig.distLoaction))
});

//launch express server
gulp.task('server', function () {
  return server.run([gulpConfig.distLoaction + 'server.js']);
});

gulp.task('surge', function () {
  return surge({
    project: './' + gulpConfig.distLoaction, // Path to your static build directory
    domain: 'anular2-webpack.surge.sh/'  // Your domain or Surge subdomain
  });
})

gulp.task('build', function () {
  runSequence('clean', 'tslint', 'webpack', 'copy:server', 'copy:data');
});

gulp.task('build-azure', function () {
  runSequence('tslint', 'webpack', 'copy:server', 'copy:data');
});

gulp.task('dist:serve', function () {
  runSequence('clean', 'tslint', 'webpack', 'copy:server', 'copy:data', 'server');
});

gulp.task('deploy', function () {
  runSequence('deploy:copy', 'surge');
});

gulp.task('test', function (done) {
  return new karmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('test:watch', function (done) {
  return new karmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: false
  }, done).start();
});

gulp.task('sonar', function () {
  var options = {
    sonar: {
      host: {
        url: 'http://localhost:9000/'
      },
      projectKey: 'sonar:angular2-webpack',
      projectName: 'angular2-webpack',
      projectVersion: '1.0.0',
      // comma-delimited string of source directories 
      sources: 'app/',
      ts: {
        tslintconfigpath: 'tslint.json',
        tslintpath: 'node_modules/tslint/bin/tslint'
      },
      sourceEncoding: 'UTF-8'
    }
  };

  // gulp source doesn't matter, all files are referenced in options object above 
  return gulp.src('thisFileDoesNotExist.js', { read: false })
    .pipe(sonar(options))
    .on('error', function (err) {
      console.log(err)
    });
});