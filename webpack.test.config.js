var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
delete webpackConfig.devServer;
delete webpackConfig.entry;
delete webpackConfig.output;
delete webpackConfig.plugins;
webpackConfig.devtool = 'inline-source-map';
var ts = {
  configFileName: 'test.tsconfig.json'
};
webpackConfig.module.loaders = webpackConfig.module.loaders.slice(1);
webpackConfig.module.loaders.push({
  test: /\.ts$/,
  exclude: /node_modules/,
  loader: 'ts-loader?' + JSON.stringify(ts)
});
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