const express = require('express');
const app = express();
const morgan = require('morgan');
const corsMiddleware = require('./cors');
const {getBlocks, setLastRequestTime} = require('./update-blocks');
const {PORT} = require('./config');

app.use(corsMiddleware);
app.use(morgan('[:date[clf]] :method :url :status :res[content-length] bytes - :response-time ms')); // eslint-disable-line

app.get('/api/blocks', (req, res) => {
  const lastNumber = parseInt(req.query.last, 10);
  const blocks = getBlocks();

  setLastRequestTime(Date.now());

  // check for valid number
  if (isNaN(lastNumber)) {
    res.json(blocks);
    return;
  }

  const blocksToSend = blocks.filter(({number}) => number > lastNumber);
  res.json(blocksToSend);
});

console.log(`Listening on port ${PORT}`);
app.listen(PORT);
