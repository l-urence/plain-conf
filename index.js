const path = require('path');

const env = process.env.NODE_ENV;
const configFile = env !== undefined ? env : 'development';
const debug = env !== undefined ? env !== 'production' : true;

module.exports = {
  config: require(path.join(process.cwd(), './config/', configFile)),
  isDebug: debug,
  __DEV__: debug,
};
