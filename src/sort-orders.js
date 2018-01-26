export default {
  index: (a, b) => a.i - b.i,
  value: (a, b) => b.value - a.value,
  gasPrice: (a, b) => b.gasPrice - a.gasPrice,
  gasLimit: (a, b) => b.gas - a.gas
};
