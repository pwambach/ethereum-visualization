import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import './block.css';
import Transaction from '../transaction/transaction';
import {CHAIN_MARGIN_TOP} from '../../config';
import sortOrderFns from '../../sort-orders';

class Chain extends Component {
  constructor(props) {
    super(props);
    this.state = {isNew: true};
  }

  componentDidMount() {
    setTimeout(() => this.setState({isNew: false}), 500);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.isNew !== nextState.isNew ||
      this.props.data !== nextProps.data ||
      this.props.sortOrder !== nextProps.sortOrder ||
      this.props.fromHighlight !== nextProps.fromHighlight ||
      this.props.toHighlight !== nextProps.toHighlight
    );
  }

  handleMouseEnter() {
    const {onBlockSelect, data} = this.props;
    const {hash} = data;
    const top =
      this.node.getBoundingClientRect().top +
      window.pageYOffset -
      CHAIN_MARGIN_TOP;

    onBlockSelect({hash, top});
  }

  render() {
    const {
      data,
      onTransactionSelect,
      onBlockSelect,
      onTransactionClick,
      sortOrder,
      fromHighlight,
      toHighlight
    } = this.props;
    const {transactions} = data;
    const {isNew} = this.state;
    const classes = ['block', isNew && 'block--new'].filter(Boolean).join(' ');

    const sortedTransactions = transactions.sort(sortOrderFns[sortOrder]);

    return (
      <div
        className={classes}
        ref={node => {
          this.node = node;
        }}
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => onBlockSelect(null)}
      >
        {sortedTransactions.map(tx => (
          <Transaction
            data={tx}
            key={tx.hash}
            fromHighlight={fromHighlight}
            toHighlight={toHighlight}
            onClick={txHash => onTransactionClick(txHash)}
            onSelect={txHash => onTransactionSelect(txHash)}
          />
        ))}
      </div>
    );
  }
}

export default Chain;
