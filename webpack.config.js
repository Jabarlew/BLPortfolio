'use strict';

const path = require('path');

module.exports = {
  context: path.resolve('src/js'),
  entry: './index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'assets/[name].js',
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: { sourceMap: true, cacheDirectory: true },
      }],
    }],
  },
};
