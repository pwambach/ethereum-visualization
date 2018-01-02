import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import './menu.css';
import MenuIcon from '../menu-icon/menu-icon';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
  }

  render() {
    const {onToggle} = this.props;
    const {menu} = this.state;
    const classes = `menu ${menu ? 'menu--open' : ''}`;

    return <div className={classes}>
      <MenuIcon open={menu}
        onClick={() => {
          this.setState({menu: !menu});
          onToggle(!menu);
        }} />
      <div className='menu__content'>hello</div>
    </div>;
  }
}
