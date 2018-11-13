import React, { Component } from 'react';
import Login from './components/Login';

export default class UserLogin extends Component {
  static displayName = 'UserLogin';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-login-page">
        <Login />
      </div>
    );
  }
}
