'use strict';

const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const dirs = {
  js: path.resolve('src/js'),
  dist: path.resolve('dist'),
};

const base = {
  context: dirs.js,
  entry: './index.js',
  output: {
    path: dirs.dist,
    filename: 'assets/[name].js',
    publicPath: '/',
  },
};

const environments = {
  development: {
    mode: 'development',
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
      host: '0.0.0.0',
      publicPath: '/',
      inline: true,
      hot: true,
      historyApiFallback: true,
      quiet: true,
      stats: 'minimal',
      clientLogLevel: 'none',
      disableHostCheck: true,
    },
  },

  production: { mode: 'production' },
};

module.exports = env => webpackMerge(base, environments[env]);
