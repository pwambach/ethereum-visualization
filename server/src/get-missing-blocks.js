const getBlock = require('./get-block');
const PQueue = require('p-queue');
const {BLOCKS_IN_CACHE, CONCURRENT_FETCHES} = require('../config');

const queue = new PQueue({concurrency: CONCURRENT_FETCHES});

module.exports = function(currentBlockNumber, blocks) {
  const missingBlockNumbers = [];

  for (
    let i = currentBlockNumber;
    i > currentBlockNumber - BLOCKS_IN_CACHE;
    i--
  ) {
    const existingBlock = blocks.find(({number}) => number === i);

    if (!existingBlock) {
      missingBlockNumbers.push(i);
    }
  }

  const promiseFns = missingBlockNumbers.map(number => () => getBlock(number));
  return queue.addAll(promiseFns);
};
