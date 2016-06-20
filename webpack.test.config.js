var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
delete webpackConfig.devServer;
delete webpackConfig.entry;
delete webpackConfig.output;
delete webpackConfig.plugins;
webpackConfig.module.postLoaders = [
  {
    test: /\.ts$/,
    exclude: [
      /node_modules\//,
      /\.(e2e|spec)\.ts$/
    ],
    loader: 'istanbul-instrumenter'
  }
];
module.exports = webpackConfig;