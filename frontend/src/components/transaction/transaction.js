import React from 'react'; // eslint-disable-line no-unused-vars
import './transaction.css';
import {gweiToEther} from '../../helper';
import {TX_BLACK_ETHER} from '../../config';

export default ({data, onSelect, onClick}) => {
  const {input, hash, value} = data;
  const hasInput = input.length > 3;
  const classes = [
    'transaction',
    hasInput && 'transaction--input'
  ].filter(Boolean).join(' ');

  const etherValue = Math.min(gweiToEther(value), TX_BLACK_ETHER);
  const luminance = Math.max(8, Math.round(etherValue / TX_BLACK_ETHER * 100));
  const color = `hsla(1, 0%, ${100 - luminance}%, 1)`;

  return <div className={classes}
    style={{backgroundColor: color}}
    onMouseEnter={() => onSelect(hash)}
    onMouseLeave={() => onSelect(null)}
    onClick={() => onClick(hash)} />;
};
