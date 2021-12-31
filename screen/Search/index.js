import React from 'react';
import { Alert } from 'react-native';
import { Router, Actions, Scene } from 'react-native-router-flux';
import Base from '../../container/BaseContainer';
import In18 from '../../common/constants';
import Page from './page';
import User from '../../modals/User';
// import firestore from '@react-native-firebase/firestore';
class Search extends Base {
  constructor( props ) {
    super( props );
    this.page = Page;
    this.state = {
      list: [],
      type: this.types ? types : 0,
    };
  }

  async componentDidMount() {
    const users = new User();
    // const l=await users.ListWorker()
    let l = [];
    if ( this.type === 0 ) {
      l = await users.ListWorker();
    } else {
      l = await users.ListWorkerQualyity();
    }
    this.setState( { ...this.state, list: l } );
  }

  onChangeType = async ( type ) => {
    const users = new User();
    this.setState( { ...this.state, type } );
    if ( this.type === 0 ) {
      const l = await users.ListWorker();
      await this.setState( { ...this.state, list: l } );
    } else {
      const l = await users.ListWorkerQualyity();
      await this.setState( { ...this.state, list: l } );
    }
  };

  onPressInfoWorker = ( item ) => {};

  render() {
    const Template = this.view;
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
