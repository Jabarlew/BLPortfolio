'use strict';

const path = require('path');
const webpackMerge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dirs = {
  src: path.resolve('src'),
  public: path.resolve('public'),
};

const base = {
  context: dirs.src,
  entry: path.join(dirs.src, 'index.js'),
  output: {
    path: dirs.public,
    filename: 'assets/[name]_[hash].min.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve('template.html'),
      inject: true,
    }),
  ],
};

const environments = {
  development: {
    mode: 'development',
    devtool: 'eval-source-map',
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

  production: {
    mode: 'production',
    devtool: 'source-map',
    plugins: [new CleanWebpackPlugin(path.join('**', '*'), { root: dirs.public })],
  },
};

module.exports = env => webpackMerge(base, environments[env]);
