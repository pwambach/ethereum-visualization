module.exports = {
  API_KEY: process.env.API_KEY,
  BASE_URL: 'https://api.etherscan.io/api?module=proxy&action=',
  BLOCKS_IN_CACHE: 4,
  CONCURRENT_FETCHES: 2,
  REFRESH_INTERVAL: 5000,
  PORT: 8081,
  ACTIVE_TIME: 1000 * 60,
  BLOCK_CONFIRMATIONS: 5 // y is current block -> fetch y - BLOCK_CONFIRMATIONS
};
