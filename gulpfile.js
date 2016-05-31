var gulp = require('gulp');

// Include Our Plugins
var del = require('del');
var tslint = require("gulp-tslint");
var webpack = require('gulp-webpack');
var webServer = require('gulp-webserver');
var runSequence = require('run-sequence');

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
    .pipe(gulp.dest('www/'));
});

// Clean dist folder
gulp.task('clean', function () {
  return del('www');
});

// Launch webserver and LiveReload
gulp.task('webServer', function () {
  gulp.src('www')
    .pipe(webServer({
      port: '9511',
      livereload: true,
      directoryListing: false,
      open: true,
      fallback: 'index.html'
    }));
});

gulp.task('dist', function () {
  runSequence('clean', ['tslint', 'webpack'], 'webServer');
});