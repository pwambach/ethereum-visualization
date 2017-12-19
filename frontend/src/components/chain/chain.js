import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import './chain.css';

class Chain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: []
    };
  }

  render() {
    return (
      <div className="chain">
        hello
      </div>
    );
  }
}

export default Chain;
