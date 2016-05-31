var gulp = require('gulp');

// Include Our Plugins
var del = require('del');
var tslint = require("gulp-tslint");
var webpack = require('gulp-webpack');
var runSequence = require('run-sequence');
var server = require('gulp-express');

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

//copying server file to dist folder
gulp.task('copy', function() {
    return gulp.src(['server.js'])
      .pipe(gulp.dest('www/'))
});

//launch express server
gulp.task('server', function () {
    return server.run(['www/server.js']);
});

gulp.task('dist', function () {
  runSequence('clean', ['tslint', 'webpack', 'copy'], 'server');
});