import React, { Component } from 'react';
import BasicTab from './components/BasicTab';
import RealTimeOverview from './components/RealTimeOverview';
import Notifications from './components/Notifications';
import PerformanceChart from './components/PerformanceChart';
import GeneralWidget from './components/GeneralWidget';
import { withRouter } from "react-router-dom";
import {  Feedback } from '@icedesign/base';
import {connect} from 'react-redux'

class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {
      isLogin: sessionStorage.getItem('token') ,

    };
  }

  showSwtich(e){
    console.log(e)
    switch(e){
      case 'dashboard':
      return <RealTimeOverview />
      break
      case 'analysis':
      return <Notifications />
      break
      case 'monitor':
      return <GeneralWidget />
      break
      case 'workplace':
      return <PerformanceChart />
      break
    }
    // if(e=='dashboard'){
    //   return 
    // }else if(e=='analysis'){
    //   return <Notifications />
    // }else if(e=='monitor'){
    //   return <GeneralWidget />
    // }else if(e=='workplace'){
    //   return <PerformanceChart />
    // }
  }

  render() {
    if (!(sessionStorage.getItem('token')&&this.props.isLoginState)) {
      Feedback.toast.success('尚未登陆');
      const { history } = this.props;
      setTimeout(() => {
        history.replace("/userLogin");
      }, 1000)
    }
    // console.log(sessionStorage.getItem('token'))
    return (
      <div className="home-page">
        <BasicTab />
{this.showSwtich(this.props.show)}
        {/* <RealTimeOverview />
        <Notifications />
        <GeneralWidget />
        <PerformanceChart /> */}
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    show:state.show,
    isLoginState:state.isLogin
  }
}

function mapDispatchToProps(dispatch) {
  return {
    
  }
}

Home = connect(mapStateToProps, mapDispatchToProps)(Home)
export default withRouter(Home)