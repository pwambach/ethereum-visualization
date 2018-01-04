import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import './menu.css';
import MenuIcon from '../menu-icon/menu-icon';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {menu: false};
  }

  setOption(option) {
    const {options, onChange} = this.props;
    const newOptions = {...options, ...option};
    onChange(newOptions);
  }

  render() {
    const {menu} = this.state;
    const {onToggle, options} = this.props;
    const {contractCalls, contractCreates} = options;
    const classes = `menu ${menu ? 'menu--open' : ''}`;

    return <div className={classes}>
      <MenuIcon open={menu}
        onClick={() => {
          this.setState({menu: !menu});
          onToggle(!menu);
        }} />
      <div className='menu__content'>
        <label>Contract calls
          <input type="checkbox"
            onChange={() => this.setOption({contractCalls: !contractCalls})}/>
        </label>

        <br />

        <label>Contract creations
          <input type="checkbox"
            onChange={() => this.setOption(
              {contractCreates: !contractCreates}
            )}/>
        </label>

      </div>
      <footer>
        {
          // <div>made by <a href="test">@phil_osophie</a> - open source on <a href="cdf">github</a></div>
        }
        <div className="logos">
          <div />
          <div />
        </div>

        <br />
        <div className="attributions">
          Powered by <a href="https://etherscan.io">Etherscan.io</a> APIs
        </div>
      </footer>
    </div>;
  }
}
