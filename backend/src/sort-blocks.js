module.exports = function sortBlocks(blocks) {
  blocks.sort((a, b) => b.number - a.number);
};
