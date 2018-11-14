import React, { Component } from 'react';
import BasicTab from './components/BasicTab';
import RealTimeOverview from './components/RealTimeOverview';
import Notifications from './components/Notifications';
import PerformanceChart from './components/PerformanceChart';
import GeneralWidget from './components/GeneralWidget';
import {hashHistory} from 'react-router'

export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    if(!sessionStorage.getItem('token')){
      hashHistory.push('/userLogin')
    }
  }

  render() {
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
