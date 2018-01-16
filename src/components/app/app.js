import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import './app.css';
import Chain from '../chain/chain';
import Menu from '../menu/menu';
import {MENU_OPTIONS} from '../../config';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      options: MENU_OPTIONS
    };
  }

  render() {
    return (
      <div className="app">
        <Menu
          options={this.state.options}
          onToggle={open => this.setState({isMenuOpen: open})}
          onChange={options => this.setState({options})}
        />
        <Chain squeezed={this.state.isMenuOpen} options={this.state.options} />
      </div>
    );
  }
}

export default App;
