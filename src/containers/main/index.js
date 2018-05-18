import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Route, Router, Switch} from 'react-router-dom';

class Main extends Component {

  static propTypes = {
    account: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  checkAccess(account){
    if (!account.hasToken) {
      this.props.history.replace('/login');
    }
  }

  componentDidMount() {
    this.checkAccess(this.props.account);

    if (this.props.account.hasToken !== nextProps.account.hasToken) {
      this.checkAccess(nextProps.account);
    }
  }

  render() {
    return (
      <div className="Main">
        <Switch>
          <Route component={() => <div>Not found!</div>}/>
        </Switch>
      </div>
    );
  }
}

export default connect(state => ({
  account: state.account
}))(Main);
