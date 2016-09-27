var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'polyfills': './client/polyfills.ts',
    'vendor': './client/vendor.ts',
    'main': './client/main.ts'
  },
  resolve: {
    extensions: ['', '.ts', '.js', '.json'],
    modulesDirectories: ['./node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: ['./client/index.html']
      },
      {
        test: /\.scss$/,
        loader: 'raw-loader!sass',
        exclude: ['./node_modules']
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['polyfills', 'vendor'].reverse()
    }),
    new HtmlWebpackPlugin({
      template: './client/index.html',
      chunksSortMode: 'dependency'
    }),
  ],
  output: {
    path: './public/dist',
    publicPath: '/dist',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },
  node: {
    global: 'window',
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};
