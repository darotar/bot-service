import React, {Component} from 'react';
import {connect} from 'react-redux';
import {accountActions} from '../../store/actions';
import createBrowserHistory from 'history/createBrowserHistory';
import PropTypes from 'prop-types';

import "./style.less";
import {MenuTop, MenuLeft} from '../../components/menus';

class App extends Component {

  static propTypes = {
    account: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
  }

  componentDidMount() {
    const { account, dispatch } = this.props;
    if (!account.hasToken) {
      dispatch(
        accountActions.remind()
      );
    }
  }

  render() {
    if (this.props.account.hasToken === null) {
      return (
        <div className="App">
          Загрузка...
        </div>
      );
    }

    return (
      <div className="App">
        <MenuTop />
        <MenuLeft />
      </div>
    );
  }
}

export default connect(state => ({
  account: state.account
}))(App);