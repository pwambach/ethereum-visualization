const path = require('path');
const config = require(path.resolve(process.env.HOME, '.ether-vis-conf.json'));

module.exports = Object.assign({
  API_KEY: '',
  BASE_URL: 'https://api.etherscan.io/api?module=proxy&action=',
  BLOCKS_IN_CACHE: 4,
  CONCURRENT_FETCHES: 2,
  REFRESH_INTERVAL: 5000,
  PORT: 8081,
  ACTIVE_TIME: 1000 * 60
}, config);
