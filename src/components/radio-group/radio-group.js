import React from 'react'; // eslint-disable-line no-unused-vars
import './radio-group.css';

export default ({options, groupName, value, onChange}) =>
  options.map(option => (
    <label
      className="mdl-radio mdl-js-radio mdl-js-ripple-effect"
      key={option.value}
    >
      <input
        type="radio"
        className="mdl-radio__button"
        name={groupName}
        value={option.value}
        checked={value === option.value}
        onChange={() => onChange(option.value)}
      />
      <span className="mdl-radio__label">{option.label}</span>
    </label>
  ));
