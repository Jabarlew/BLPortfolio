'use strict';

module.exports = {
  root: true,
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  parserOptions: { sourceType: 'script' },
  env: { es6: true },
  overrides: [{
    files: ['src/js/**/*.js'],
    parserOptions: { sourceType: 'module' },
    env: { browser: true },
  }],
};
