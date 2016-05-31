var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
delete webpackConfig.devtool;
delete webpackConfig.devServer;
webpackConfig.output.path = __dirname + '/www'
module.exports = webpackConfig;