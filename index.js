'use strict';

var path = require('path');

var env = process.env.NODE_ENV;
var configFile = env !== undefined ? env : 'development';
var debug = env !== undefined ? env !== 'production' : true;
var config = require(path.join(process.cwd(), './config/', configFile));

module.exports = config;
module.exports.__DEV__ = debug;
module.exports.config = config;
module.exports.isDebug = debug;
