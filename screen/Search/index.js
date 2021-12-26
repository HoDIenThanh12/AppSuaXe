import React from 'react';
import Base from '../../container/BaseContainer';
import In18 from '../../common/constants';
import Page from './page';
import {Alert} from 'react-native';
import {Router, Actions, Scene} from 'react-native-router-flux';
import User from '../../modals/User';
// import firestore from '@react-native-firebase/firestore';
class Search extends Base {
  constructor(props) {
    super(props);
    this.page = Page;
    this.state = {
      list: [],
      type: this.types ? types : 0,
    };
  }
  async componentDidMount() {
    const users = new User();
    // const l=await users.ListWorker()
    var l = [];
    if (this.type == 0) {
      l = await users.ListWorker();
    } else {
      l = await users.ListWorkerQualyity();
    }
    this.setState({...this.state, list: l});
  }
  onChangeType = async type => {
    const users = new User();
    this.setState({...this.state, type: type});
    if (this.type == 0) {
      var l = await users.ListWorker();
    } else {
      var l = await users.ListWorkerQualyity();
    }
    this.setState({...this.state, list: l});
  };
  onPressInfoWorker = item => {};
  render() {
    var Template = this.view;
    return (
      <Template
        title={In18.List.listSearch}
        // noFooter
        props={this.props}
        func={this}
        state={this.state}
        showBtnBack={false}
      />
    );
  }
}
export default Search;
