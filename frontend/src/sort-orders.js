export default {
  'index': (a, b) => a.transactionIndex - b.transactionIndex,
  'value': (a, b) => a.value - b.value,
  'gasPrice': (a, b) => a.gasPrice - b.gasPrice,
  'gasLimit': (a, b) => a.gas - b.gas
};
