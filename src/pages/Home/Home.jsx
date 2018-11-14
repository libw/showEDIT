import React, { Component } from 'react';
import BasicTab from './components/BasicTab';
import RealTimeOverview from './components/RealTimeOverview';
import Notifications from './components/Notifications';
import PerformanceChart from './components/PerformanceChart';
import GeneralWidget from './components/GeneralWidget';
import { withRouter } from "react-router-dom";
import {  Feedback } from '@icedesign/base';

class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {
      isLogin: sessionStorage.getItem('token') 
    };
  }

  componentWillMount() {
    if (!this.state.isLogin) {
      Feedback.toast.success('尚未登陆');
      const { history } = this.props;
      setTimeout(() => {
        history.replace("/userLogin");
      }, 1000)
    }
  }

  render() {
    if (!this.state.isLogin) {
      return null
    }
    return (
      <div className="home-page">
        <BasicTab />
        <RealTimeOverview />
        <Notifications />
        <GeneralWidget />
        <PerformanceChart />
      </div>
    );
  }
}
export default withRouter(Home)