import React from 'react'; // eslint-disable-line no-unused-vars
import Toggle from '../toggle/toggle';
import './toggle-text.css';

export default ({value, cssClasses, placeholder, onChange}) =>
  <div className="toggle-text">
    <Toggle label={placeholder}
      cssClasses={cssClasses}
      checked={Boolean(value)}
      onChange={() => {
        if (value) {
          onChange('');
        }
      }}
    />
    <input type="text" placeholder='0x...' value={value}
      onChange={event => onChange(event.target.value)} />
  </div>;
