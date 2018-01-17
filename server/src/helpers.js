const getHexFromDecimal = decimal => decimal.toString(16);
const getDecimalFromHex = hex => parseInt(hex, 16);

const isProduction = process.env.NODE_ENV === 'production';

function log(message, ...args) {
  if (isProduction) {
    // return;
  }

  const date = new Date().toISOString();
  console.log(`[${date}]: ${message}`, ...args);
}

module.exports = {
  log,
  getHexFromDecimal,
  getDecimalFromHex
};
