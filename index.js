var path = require('path');

module.exports = {
  config: require(path.join(process.cwd(), './config/', (process.env.NODE_ENV || 'development'))),
  isDebug: ! process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? false : true,
};

