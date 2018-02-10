import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import Autosuggest from 'react-autosuggest';
import Toggle from '../toggle/toggle';
import './example-select.css';

const getSuggestions = (value, examples) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  if (examples.some(({address}) => address === inputValue)) {
    return [];
  }

  return inputLength === 0 ?
    examples :
    examples.filter(({name, address}) =>
      name.toLowerCase().includes(inputValue) ||
      address.toLowerCase().includes(inputValue));
};

const getSuggestionValue = suggestion => suggestion.address;

const renderSuggestion = suggestion => (
  <div style={{
    borderRight: `4px solid ${suggestion.color}`,
    padding: '10px 0 10px 12px'
  }}>
    {suggestion.name}
  </div>
);

export default class ExampleSelect extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, {newValue}) => {
    const {examples, onChange} = this.props;
    const activeExample = examples.find(({address}) => address === newValue);
    const color = activeExample && activeExample.color || '';

    onChange({value: newValue, color});

    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update
  // suggestions. You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({value}) => {
    this.setState({
      suggestions: getSuggestions(value, this.props.examples)
    });
  };

  // Autosuggest will call this function every time you need to clear
  // suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const {placeholder, identifier} = this.props;
    const {value, suggestions} = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder,
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <div className={`example-select example-select--${identifier}`}>
        <Toggle checked={Boolean(value)}
          onChange={() => {
            this.setState({value: ''});
          }}/>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          alwaysRenderSuggestions={true}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </div>
    );
  }
}
