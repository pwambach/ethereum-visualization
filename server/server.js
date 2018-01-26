const express = require('express');
const app = express();
const morgan = require('morgan');
const {getBlocks, setLastRequestTime} = require('./src/update-blocks');
const cors = require('./src/cors');
const {PORT, API_KEY} = require('./config');

app.use(
  morgan(
    '[:date[clf]] :remote-addr :method :url :status :res[content-length] bytes - :response-time ms - :user-agent',
    {skip: req => !req.url.includes('blocks')}
  )
); // eslint-disable-line

app.use(cors);
app.disable('etag');

app.get('/', (req, res) => res.sendStatus(404));

app.get('/blocks', (req, res) => {
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
console.log(`Using API KEY: ${API_KEY}`);
app.listen(PORT);
