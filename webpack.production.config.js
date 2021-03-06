var path = require('path');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var gulpConfig = require('./gulpConfigFile.js');
delete webpackConfig.devtool;
delete webpackConfig.devServer;
webpackConfig.output.path = path.resolve(__dirname, gulpConfig.distLoaction);
var htmlWebpackPlugin = webpackConfig.plugins.pop();
webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
webpackConfig.plugins.push(htmlWebpackPlugin);
module.exports = webpackConfig;