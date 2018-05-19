import React, { Component } from 'react';

import data from './enums/menu-enum';
import './style.less';
import MenuLeftItem from './components/menu-left-item';

export default class MenuLeft extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: ''
    };
  }
  
  onItemClick = ({ text }) => {
    return this.setState({ activeItem: text });
  }
  
  getMenuItems = () => {
    return data.map(item => (
      <MenuLeftItem
        key={item.text}
        data={item}
        activeItem={this.state.activeItem}
        onClick={() => this.onItemClick(item)}
      />
    ));
  }
  
  
  render() {
    return (
      <div className="menu-left">
        <div>
          {this.getMenuItems()}
        </div>
      </div>
    );
  }
}