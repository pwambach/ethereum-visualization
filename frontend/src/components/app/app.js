import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import './app.css';
import Chain from '../chain/chain';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Chain />
      </div>
    );
  }
}

export default App;
