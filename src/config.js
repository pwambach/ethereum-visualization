export const API_URL = process.env.NODE_ENV === 'production' ?
  'https://api.etherview.net/blocks' :
  'http://localhost:8000/blocks';
export const REFRESH_TIME = 1000 * 10;
export const TX_BLACK_ETHER = 20;
export const CHAIN_MARGIN_TOP = 20;
export const ETHERSCAN_BASE_URL = 'https://etherscan.io';
export const MENU_OPTIONS = {
  contractCalls: false,
  contractCreates: false,
  sortOrder: 'index',
  fromAddress: '',
  fromColor: '',
  toAddress: '',
  toColor: ''
};
export const FROM_DEFAULT_COLOR = '#FFF491';
export const TO_DEFAULT_COLOR = '#46d3f5';
export const FROM_EXAMPLES = [];
export const TO_EXAMPLES = [
  {
    name: 'EOS - EOS.IO',
    address: '0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0',
    color: '#7903f7'
  },
  {
    name: 'MANA - Decentraland',
    address: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942',
    color: '#E68346'
  },
  {
    name: 'SUB - Substratum',
    address: '0x12480e24eb5bec1a9d4369cab6a80cad3c0a377a',
    color: '#D4463C'
  },
  {
    name: 'ZRX - 0xProject',
    address: '0xe41d2489571d322189246dafa5ebde1f4699f498',
    color: '#a7fb40'
  },
  {
    name: 'CryptoKittiesCore',
    address: '0x06012c8cf97bead5deae237070f9587f8e7a266d',
    color: '#fbe734'
  }
];
