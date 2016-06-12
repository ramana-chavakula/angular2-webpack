var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    polyfills: './app/polyfills.ts',
    vendor: './app/vendor.ts',
    app: './app/app.ts'
  },
  output: {
    path: __dirname,
    filename: "[name].js"
  },
  devtool: 'source-map',
  devServer: {
    port: 9090,
    inline: true,
    host: 'localhost',
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "ts"
      },
      {
        test: /\.html$/,
        loader: "html"
      },
       {
        test: /\.scss$/,
        loaders: ["css", "sass"]
      },
      {
        test: /\.css$/,
        loaders: ["style", "css"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ["file"]
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
         loaders: ["file"]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  resolve: {
    extensions: ["", ".js", ".ts"]
  }
}