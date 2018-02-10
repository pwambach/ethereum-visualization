import React from 'react'; // eslint-disable-line no-unused-vars
import './transaction.css';
import {gweiToEther} from '../../helper';
import {TX_BLACK_ETHER} from '../../config';

export default ({
  data,
  onSelect,
  onClick,
  fromHighlight,
  fromColor,
  toHighlight,
  toColor
}) => {
  const {input, hash, value, to, from} = data;
  const hasInput = input.length > 3;
  const isFrom = fromHighlight === from;
  const isTo = toHighlight === to;
  const etherValue = Math.min(gweiToEther(value), TX_BLACK_ETHER);
  const luminance = Math.max(8, Math.round(etherValue / TX_BLACK_ETHER * 100));
  let color = `hsla(1, 0%, ${100 - luminance}%, 1)`;

  if (isFrom) {
    color = fromColor;
  }

  if (isTo) {
    color = toColor;
  }

  const classes = [
    'transaction',
    hasInput && 'transaction--input',
    !to && 'transaction--create'
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classes}
      style={{backgroundColor: color}}
      onMouseEnter={() => onSelect(hash)}
      onMouseLeave={() => onSelect(null)}
      onClick={() => onClick(hash)}
    />
  );
};
