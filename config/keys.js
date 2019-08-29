if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod')
}
else {
  //we are in development mode
  module.exports = require('./dev')
}