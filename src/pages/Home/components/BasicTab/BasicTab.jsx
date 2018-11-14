import React, { Component } from 'react';
import { Tab } from '@icedesign/base';
import IceContainer from '@icedesign/container';
import './BasicTab.scss';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {homeSwtich} from '../../../../actions'

class BasicTab extends Component {
  static displayName = 'BasicTab';

  switch=(e)=>{
    this.props.homeSwtich({payload: e})

  }

  render() {
    const tabs = [
      { tab: '概况', key: 'dashboard' },
      { tab: '分析页', key: 'analysis' },
      { tab: '监控页', key: 'monitor' },
      { tab: '工作台', key: 'workplace' },
    ];

    return (
      <div className="basic-tab">
        <IceContainer style={styles.tabCardStyle}>
          <Tab contentStyle={{ display: 'none' }}>
            {tabs.map((item) => {
              return <Tab.TabPane key={item.key} tab={item.tab} onClick={this.switch.bind(item.key)}/>;
            })}
          </Tab>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  tabCardStyle: {
    padding: 0,
  },
};

function mapStateToProps(state, props) {
  return {
      
  }
}

function mapDispatchToProps(dispatch) {
  return {
    homeSwtich: bindActionCreators(homeSwtich, dispatch)
  }
}

BasicTab = connect(mapStateToProps, mapDispatchToProps)(BasicTab)

export default BasicTab
