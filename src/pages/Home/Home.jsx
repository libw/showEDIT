import React, { Component } from 'react';
import BasicTab from './components/BasicTab';
import RealTimeOverview from './components/RealTimeOverview';
import Notifications from './components/Notifications';
import PerformanceChart from './components/PerformanceChart';
import GeneralWidget from './components/GeneralWidget';
import { withRouter } from "react-router-dom";
import {  Feedback } from '@icedesign/base';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {
      isLogin: sessionStorage.getItem('token') ,
      show:this.props.show
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

  showSwtich(e){
    if(e=='dashboard'){
      return <RealTimeOverview />
    }else if(e=='analysis'){
      return <Notifications />
    }else if(e=='monitor'){
      return <GeneralWidget />
    }else if(e=='workplace'){
      return <PerformanceChart />
    }
  }

  render() {
    if (!this.state.isLogin) {
      return null
    }
    return (
      <div className="home-page">
        <BasicTab />
{this.showSwtich(this.state.show)}
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
    show:state.show
  }
}

function mapDispatchToProps(dispatch) {
  return {
    
  }
}

Home = connect(mapStateToProps, mapDispatchToProps)(Home)
export default withRouter(Home)