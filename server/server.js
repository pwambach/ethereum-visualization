const express = require('express');
const app = express();
const morgan = require('morgan');
const {getBlocks, setLastRequestTime} = require('./src/update-blocks');
const path = require('path');
const cors = require('./src/cors');
const {PORT} = require('./config');

app.use(
  morgan(
    '[:date[clf]] :method :url :status :res[content-length] bytes - :response-time ms',
    {skip: req => req.query.last}
  )
); // eslint-disable-line

app.use(express.static(path.resolve(__dirname, '../build/')));

if (process.env.NODE_ENV !== 'production') {
  app.use(cors);
}

app.disable('etag');

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
