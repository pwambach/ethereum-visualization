require('isomorphic-fetch');
const getCurrentBlockNumber = require('./get-current-block-number');
const getMissingBlocks = require('./get-missing-blocks');
const sortBlocks = require('./sort-blocks');
const stripBlock = require('./strip-block');
const {log} = require('./helpers');
const {BLOCKS_IN_CACHE, REFRESH_INTERVAL} = require('./config');

let blocks = [];

async function updateBlocks() {
  const currentBlockNumber = await getCurrentBlockNumber();
  const missingBlocks = await getMissingBlocks(currentBlockNumber, blocks);
  const strippedMissingBlocks = missingBlocks.map(stripBlock);
  const newBlocks = blocks.concat(strippedMissingBlocks);

  sortBlocks(newBlocks);
  blocks = newBlocks.slice(0, BLOCKS_IN_CACHE);
}

function continuousUpdate() {
  updateBlocks()
    .then(() => setTimeout(() => continuousUpdate(), REFRESH_INTERVAL))
    .catch(error => {
      log('Update Blocks Error: ', error);
      setTimeout(() => continuousUpdate(), REFRESH_INTERVAL);
    });
}
continuousUpdate();

module.exports = () => blocks;

