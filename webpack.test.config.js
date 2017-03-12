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
// using different typescript config while testing since we need inline sourcemaps for remap coverage
webpackConfig.module.rules = webpackConfig.module.rules.slice(1);
webpackConfig.module.rules.push({
  test: /\.ts$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'ts-loader',
      options: {
        'configFileName': 'test.tsconfig.json'
      }
    }
  ]
});
webpackConfig.module.rules.push(
  {
    test: /\.ts$/,
    exclude: [
      /node_modules\//,
      /\.(e2e|spec)\.ts$/
    ],
    enforce: "post",
    use: ['istanbul-instrumenter-loader']
  }
);
module.exports = webpackConfig;