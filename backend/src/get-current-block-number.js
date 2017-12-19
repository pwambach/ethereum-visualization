const {API_KEY, BASE_URL} = require('./config');
const {getDecimalFromHex} = require('./helpers');
const getCurrentBlockUrl = () => `${BASE_URL}eth_blockNumber&apikey=${API_KEY}`;

module.exports = function() {
  return fetch(getCurrentBlockUrl())
    .then(response => response.json())
    .then(response => getDecimalFromHex(response.result));
};
