'use strict';

var path = require('path');

var root = path.resolve(__dirname).split('/node_modules')[0];
var env = process.env.NODE_ENV;
var configFile = env !== undefined ? env : 'development';
var debug = env !== undefined ? env !== 'production' : true;
var config = require(path.join(root, '/config/', configFile));

module.exports = config;
module.exports.__DEV__ = debug;
module.exports.config = config;
module.exports.isDebug = debug;
