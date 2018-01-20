export default {
  index: (a, b) => a.i - b.i,
  value: (a, b) => a.value - b.value,
  gasPrice: (a, b) => a.gasPrice - b.gasPrice,
  gasLimit: (a, b) => a.gas - b.gas
};
