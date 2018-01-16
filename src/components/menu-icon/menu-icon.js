import React from 'react'; // eslint-disable-line no-unused-vars
import './menu-icon.css';

export default ({open, onClick}) => (
  <div
    onClick={() => onClick()}
    className={`menu-icon ${open ? 'menu-icon--open' : ''}`}
  >
    <span />
    <span />
    <span />
  </div>
);
