import React from 'react'; // eslint-disable-line no-unused-vars
import './toggle.css';

export default ({label, checked, onChange, cssClasses = ''}) => <label
  className={`mdl-switch mdl-js-switch ${cssClasses} is-upgraded ${checked ? 'is-checked' : ''}`}>
  <input type="checkbox"
    className="mdl-switch__input"
    checked={checked}
    onChange={() => onChange()} />
  <span className="mdl-switch__label">{label}</span>
</label>;
