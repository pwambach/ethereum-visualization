import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import './chain.css';
import {loadBlocks} from '../../api';
import {REFRESH_TIME, CHAIN_MARGIN_TOP, ETHERSCAN_BASE_URL} from '../../config';
import Block from '../block/block';
import Details from '../details/details';
import {isMobile} from '../../helper';

class Chain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: [],
      selectedBlockHash: null,
      selectedTxHash: null,
      selectedBlockTop: 0
    };
  }

  componentDidMount() {
    this.updateBlocks();
  }

  updateBlocks() {
    const youngestBlock = this.state.blocks[0];
    const youngestBlockNumbner = youngestBlock ? youngestBlock.number : 0;

    loadBlocks(youngestBlockNumbner)
      .then(blocks => {
        this.addBlocks(blocks);
        setTimeout(() => this.updateBlocks(), REFRESH_TIME);
      })
      .catch(() => setTimeout(() => this.updateBlocks(), REFRESH_TIME));
  }

  addBlocks(blocks) {
    const blockHashs = this.state.blocks.map(({hash}) => hash);
    const blocksToAdd = blocks.filter(({hash}) => !blockHashs.includes(hash));
    const newBlocks = this.state.blocks.concat(blocksToAdd);
    newBlocks.sort((a, b) => b.number - a.number);
    const topBlocks = newBlocks.slice(0, 100);

    this.setState({blocks: topBlocks});
  }

  setSelectedTransaction(hash) {
    this.setState({selectedTxHash: hash});
  }

  setSelectedBlock(data) {
    if (data === null) {
      this.setState({selectedBlockHash: null});
      return;
    }

    const {hash, top} = data;
    this.setState({
      selectedBlockHash: hash,
      selectedBlockTop: top
    });
  }

  getSelectedBlock(hash) {
    return this.state.blocks.find(block => block.hash === hash);
  }

  getSelectedTransaction(block, hash) {
    return block.transactions.find(tx => tx.hash === hash);
  }

  handleTransactionClick(hash) {
    if (isMobile()) {
      return;
    }

    window.open(`${ETHERSCAN_BASE_URL}/tx/${hash}`, {target: '_blank'});
  }

  render() {
    const {
      blocks,
      selectedBlockTop,
      selectedBlockHash,
      selectedTxHash
    } = this.state;

    if (blocks.length === 0) {
      return <div className="chain-loading" />;
    }

    const {squeezed, options} = this.props;
    const selectedBlock = selectedBlockHash &&
      this.getSelectedBlock(selectedBlockHash);
    const selectedTransaction = selectedBlock && selectedTxHash &&
      this.getSelectedTransaction(selectedBlock, selectedTxHash);
    const classes = [
      'chain',
      squeezed && 'chain--squeezed',
      options.contractCalls && 'chain--contract-calls',
      options.contractCreates && 'chain--contract-creates'
    ].filter(Boolean).join(' ');

    return (
      <div className={classes}
        style={{marginTop: CHAIN_MARGIN_TOP}}>

        {selectedBlock && <Details top={selectedBlockTop}
          block={selectedBlock}
          transaction={selectedTransaction} />}

        {blocks.map(block => <Block
          data={block}
          key={block.number}
          onBlockSelect={data => this.setSelectedBlock(data)}
          onTransactionClick={hash => this.handleTransactionClick(hash)}
          onTransactionSelect={hash => this.setSelectedTransaction(hash)} />)}
      </div>
    );
  }
}

export default Chain;
