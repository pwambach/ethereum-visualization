import React from 'react'; // eslint-disable-line no-unused-vars
import './details.css';
import {gweiToEther, ellipsedHash, toGwei} from '../../helper';

export default ({top, block, transaction}) =>
  <div className='details'
    style={{top}}>
    {block && <div className='details__left'>
      <div className='details__blocknumber'>{block.number}</div>
      <div className='details__timestamp'>
        {new Date(block.timestamp * 1000).toLocaleString()}
      </div>
    </div>}
    {transaction && <div className='details__right'>
      {/** no to address */}
      {<div className='details__txvalue'>
        {gweiToEther(transaction.value).toFixed(4)} <span className="ether">Ξ</span>
      </div>}

      <div className='details__txhash'>
        Hash: {ellipsedHash(transaction.hash)}
      </div>

      {/** has to address */}
      {transaction.to && <div className='details__txaddresses'>
        FromTo: {ellipsedHash(transaction.from)} -> {ellipsedHash(transaction.to)}
      </div>}

      {/** no to address */}
      {!transaction.to && <div className='details__txaddresses'>
        From: {ellipsedHash(transaction.from)}... created contract
      </div>}

      {/** no to address */}
      {<div className='details__txgas'>
        Gas Limit/Price: {transaction.gas} / {toGwei(transaction.gasPrice)} Gwei
      </div>}

      {transaction.input.length > 3 && <div className='details__txinput'>
        Input: {transaction.input.substr(0, 20)}...
      </div>}

    </div>}
  </div>;
