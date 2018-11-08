'use strict';

const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const dirs = {
  src: path.resolve('src'),
  sass: path.resolve('src/sass'),
  assets: path.resolve('src/assets'),
  public: path.resolve('public'),
};

const styleBundle = new ExtractTextWebpackPlugin({
  filename: 'assets/main.css',
  disable: true,
});

const base = {
  context: dirs.src,
  entry: [
    './sass/main.scss',
    './index.js',
  ],
  output: {
    path: dirs.public,
    filename: 'assets/[name]_[hash].min.js',
    publicPath: '/',
  },
  plugins: [
    styleBundle,
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve('template.html'),
      inject: true,
    }),
    new CopyWebpackPlugin([{ from: dirs.assets, to: dirs.public }]),
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: styleBundle.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { sourceMap: true },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths: [dirs.sass],
              },
            },
          ],
        }),
      },
    ],
  },
};

const environments = {
  development: {
    mode: 'development',
    devtool: 'eval-source-map',
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

  production: {
    mode: 'production',
    devtool: 'source-map',
    plugins: [new CleanWebpackPlugin(path.join('**', '*'), { root: dirs.public })],
  },
};

module.exports = env => webpackMerge(base, environments[env]);
