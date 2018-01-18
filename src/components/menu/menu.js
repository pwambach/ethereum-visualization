import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import './menu.css';
import MenuIcon from '../menu-icon/menu-icon';
import Toggle from '../toggle/toggle';
import ToggleText from '../toggle-text/toggle-text';
import RadioGroup from '../radio-group/radio-group';

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
    const {
      contractCalls,
      contractCreates,
      sortOrder,
      fromAddress,
      toAddress
    } = options;
    const classes = `menu ${menu ? 'menu--open' : ''}`;

    return (
      <div className={classes}>
        <MenuIcon
          open={menu}
          onClick={() => {
            this.setState({menu: !menu});
            onToggle(!menu);
          }}
        />
        <div className="menu__content">
          <div className="menu-heading">Highlight</div>

          <Toggle
            label="Contract Executions"
            cssClasses="mdl-switch--calls"
            checked={contractCalls}
            onChange={() => this.setOption({contractCalls: !contractCalls})}
          />

          <Toggle
            label="Contract Creations"
            cssClasses="mdl-switch--creations"
            checked={contractCreates}
            onChange={() => this.setOption({contractCreates: !contractCreates})}
          />

          <ToggleText
            value={fromAddress}
            cssClasses="mdl-switch--from"
            placeholder="From"
            onChange={value =>
              this.setOption({fromAddress: value.toLowerCase()})
            }
          />

          <ToggleText
            value={toAddress}
            cssClasses="mdl-switch--to"
            placeholder="To"
            onChange={value => this.setOption({toAddress: value.toLowerCase()})}
          />

          <div className="examples">
            e.g.&nbsp;
            <span
              onClick={() =>
                this.setOption({
                  toAddress: '0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0'
                })
              }
            >
              EOS
            </span>,&nbsp;
            <span
              onClick={() =>
                this.setOption({
                  toAddress: '0x06012c8cf97bead5deae237070f9587f8e7a266d'
                })
              }
            >
              CryptoKittiesCore
            </span>
          </div>

          <div className="menu-heading">Sort by</div>

          <RadioGroup
            value={sortOrder}
            groupName="sortOrder"
            options={[
              {value: 'index', label: 'Index'},
              {value: 'value', label: 'Ether Value'},
              {value: 'gasPrice', label: 'Gas Price'},
              {value: 'gasLimit', label: 'Gas Limit'}
            ]}
            onChange={value => this.setOption({sortOrder: value})}
          />
        </div>
        <footer>
          {
            // <div>made by <a href="test">@phil_osophie</a> - open source on <a href="cdf">github</a></div>
          }
          <div className="logos">
            <a href="https://twitter.com/phil_osophie" className="twitter" />
            <a
              href="https://github.com/pwambach/ethereum-visualization"
              className="github"
            />
          </div>

          <br />
          <div className="attributions">
            Powered by <a href="https://etherscan.io">Etherscan.io</a> APIs
          </div>
        </footer>
      </div>
    );
  }
}
