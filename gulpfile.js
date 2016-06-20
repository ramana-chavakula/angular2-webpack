var gulp = require('gulp');
var gulpConfig = require('./gulpConfigFile.js');
// Include Our Plugins
var del = require('del');
var tslint = require("gulp-tslint");
var webpack = require('gulp-webpack');
var runSequence = require('run-sequence');
var server = require('gulp-express');
var surge = require('gulp-surge');
var karmaServer = require('karma').Server;

//typescript linting task
gulp.task('tslint', function () {
  return gulp.src('app/**/*.ts')
    .pipe(tslint())
    .pipe(tslint.report("verbose"))
});

// bundling task using webpack
gulp.task('webpack', function () {
  var webpackConig = require('./webpack.production.config.js');
  return gulp.src('app/app.ts')
    .pipe(webpack(webpackConig))
    .pipe(gulp.dest(gulpConfig.distLoaction));
});

// Clean dist folder
gulp.task('clean', function () {
  return del('www');
});

//copying server file to dist folder
gulp.task('copy', function() {
    return gulp.src(['server.js'])
      .pipe(gulp.dest(gulpConfig.distLoaction))
});

//copying json files to data in dist folder
gulp.task('copy:data', function() {
    return gulp.src(gulpConfig.data)
      .pipe(gulp.dest(gulpConfig.distDataLoaction))
});

//copying surge supported files to dist folder
gulp.task('deploy:copy', function() {
    return gulp.src(['404.html'])
      .pipe(gulp.dest('www/'))
});

//launch express server
gulp.task('server', function () {
    return server.run(['www/server.js']);
});

gulp.task('surge', function () {
  return surge({
    project: './www',         // Path to your static build directory
    domain: 'anular2-webpack.surge.sh/'  // Your domain or Surge subdomain
  });
})

gulp.task('build', function () {
  runSequence('clean', 'build-azure');
});

gulp.task('build-azure', ['tslint', 'webpack', 'copy', 'copy:data']);

gulp.task('dist', function () {
  runSequence('build', 'server');
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