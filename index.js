module.exports = {
  config: require('./config/' + (process.env.NODE_ENV || 'development') + '.json'),
  isDebug: ! process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? false : true,
}
