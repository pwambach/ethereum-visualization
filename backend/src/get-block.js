const {API_KEY, BASE_URL} = require('./config');
const {getHexFromDecimal} = require('./helpers');
const getBlockUrl = hexNumber => `${BASE_URL}eth_getBlockByNumber&tag=${hexNumber}&boolean=true&apikey=${API_KEY}`;
const {log} = require('./helpers');

module.exports = function(number) {
  const hexNumber = getHexFromDecimal(number);

  log('[DEBUG] request block: ', number);

  return fetch(getBlockUrl(hexNumber))
    .then(response => {
      log('[DEBUG] request block success: ', number);
      return response;
    })
    .then(response => response.json())
    .then(response => response.result);
};
