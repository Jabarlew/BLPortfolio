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
};
