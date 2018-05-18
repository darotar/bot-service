import React, {Component} from 'react';
import {connect} from 'react-redux';
import {accountActions} from '../../store/actions';
import {Route, Router, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import PropTypes from 'prop-types';

import "./style.less";

import Home from '../home';
import Main from '../main';
import Login from '../login';
import NotFound from '../not-found';
import Modals from '../modals';

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
        <Router history={this.history}>
          <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/main" component={Main}/>
            <Route component={NotFound}/>
          </Switch>
        </Router>
        <Modals history={this.history}/>
      </div>
    );
  }
}

export default connect(state => ({
  account: state.account
}))(App);