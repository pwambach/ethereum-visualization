import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import './menu-icon.css';

export default class MenuIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {closing: false};
  }

  handleClick() {
    const {open} = this.props;

    this.props.onClick();

    if (open) {
      this.setState({closing: true});
      setTimeout(() => this.setState({closing: false}), 1000);
    }
  }

  render() {
    const {open} = this.props;
    const {closing} = this.state;
    const classes = [
      'menu-icon',
      open && 'menu-icon--open',
      closing && 'menu-icon--closing'
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        onClick={() => this.handleClick()}
        className={classes}
      >
        <span />
        <span />
        <span />
      </div>
    );
  }
}
