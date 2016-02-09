'use strict';

var path = require('path');

var env = process.env.NODE_ENV;
var configFile = env !== undefined ? env : 'development';
var debug = env !== undefined ? env !== 'production' : true;

module.exports = {
  config: require(path.join(process.cwd(), './config/', configFile)),
  isDebug: debug,
  __DEV__: debug,
};
