import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import './menu.css';
import MenuIcon from '../menu-icon/menu-icon';
import Toggle from '../toggle/toggle';
import RadioGroup from '../radio-group/radio-group';
import ExampleSelect from '../example-select/example-select';
import {
  FROM_DEFAULT_COLOR,
  FROM_EXAMPLES,
  TO_DEFAULT_COLOR,
  TO_EXAMPLES
} from '../../config';

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
      sortOrder
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

          <ExampleSelect placeholder="From"
            examples={FROM_EXAMPLES}
            identifier="from"
            defaultColor={FROM_DEFAULT_COLOR}
            onChange={({value, color}) => this.setOption({
              fromAddress: value,
              fromColor: color
            })}/>

          <ExampleSelect placeholder="To"
            examples={TO_EXAMPLES}
            identifier="to"
            defaultColor={TO_DEFAULT_COLOR}
            onChange={({value, color}) => this.setOption({
              toAddress: value,
              toColor: color
            })}/>

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
            Donations: <br />ETH 0x33fC520429f355A1348fEF631136C9C22d0e764c
            <br />
            <br />
            Powered by <a href="https://etherscan.io">Etherscan.io</a> APIs
          </div>
        </footer>
      </div>
    );
  }
}
