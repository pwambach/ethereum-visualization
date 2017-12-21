import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import './chain.css';
import {loadBlocks} from '../../api';

class Chain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: []
    };
  }

  componentDidMount() {
    updateBlocks().then(() => setTimeout(() => this.updateBlocks()));
  }

  updateBlocks() {
    const youngestBlock = this.state.blocks[0];
    const youngestBlockNumbner = youngestBlock ? youngestBlock.number : 0;

    return loadBlocks(youngestBlockNumbner)
      .then(this.addBlocks);
  }

  addBlocks(blocks) {
    const newBlocks = this.state.blocks.concat(blocks);
    newBlocks.sort((a, b) => b.number - a.number);

    this.setState({blocks: newBlocks});
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
