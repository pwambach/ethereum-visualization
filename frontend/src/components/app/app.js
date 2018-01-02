import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import './app.css';
import Chain from '../chain/chain';
import Menu from '../menu/menu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isMenuOpen: false};
  }

  render() {
    return (
      <div className="app">
        <Menu onToggle={open => this.setState({isMenuOpen: open})}/>
        <Chain squeezed={this.state.isMenuOpen} />
      </div>
    );
  }
}

export default App;
