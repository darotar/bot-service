import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {Link} from 'react-router-dom';
import './style.less';

export default class MenuTop extends Component {

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      to: PropTypes.string,
      active: PropTypes.bool
    })).isRequired,

    theme: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
  };

  static defaultProps = {
    items: [
      {title: "Пункт 1", to: '/', active: false},
      {title: "Пункт 2", to: '/page2', active: true},
      {title: "Пункт 3", to: '/page3', active: false}
    ]
  };

  render() {
    const { items } = this.props;
    return (
      <div className="MenuTop">
        <ul className="MenuTop_list">
          {
            items.map((item, index) => (
              <li
                key={index}
                className={cn("MenuTop_list_item", {"MenuTop_list_item__active": item.active})}>
                <a to={item.to} className="MenuTop_list_item_link">{item.title}</a>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
