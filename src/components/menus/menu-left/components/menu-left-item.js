import React, { PureComponent } from 'react';
import cn from 'classnames';

export default class MenuLeftItem extends PureComponent {
  render() {
    const { onClick, activeItem, data } = this.props;

    return (
      <div onClick={onClick}>
        <div className={cn('menu-left_item', {
          'menu-left_item__active': activeItem === data.text
        })}>
          <div className="menu-left_item_icon">
            {data.icon && data.icon}
          </div>
          <div className="menu-left_item_text">
            {data.text && data.text}
          </div>
        </div>
      </div>
    );
  }
}