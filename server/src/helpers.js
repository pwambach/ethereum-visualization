const getHexFromDecimal = decimal => decimal.toString(16);
const getDecimalFromHex = hex => parseInt(hex, 16);
function log(message, ...args) {
  const date = new Date().toISOString();
  console.log(`[${date}]: ${message}`, ...args);
}

module.exports = {
  log,
  getHexFromDecimal,
  getDecimalFromHex
};
