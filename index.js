const path = require('path');

const env = process.env.NODE_ENV;
const configFile = env !== undefined ? env : 'development';

module.exports = {
  config: require(path.join(process.cwd(), './config/', configFile)),
  isDebug: env !== undefined ? env !== 'production' : true,
};
