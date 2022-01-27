import React from 'react';
import {
  Alert, View, PermissionsAndroid, Platform
} from 'react-native';
import { Router, Actions, Scene } from 'react-native-router-flux';
// import User from 'modals/User';
import database from '@react-native-firebase/database';
import store from 'react-native-simple-store';
import storage from '@react-native-firebase/storage';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import { setStoreLocal, getStoreLocal, SaveProfile } from 'modals/function';
import ActionStore from 'reduxs/Action/ActionStore';
import Geolocation from 'react-native-geolocation-service';
import Base from '../../container/BaseContainer';
import In18 from '../../common/constants';
import Page from './page';

const firestores = firestore().collection( 'User' );
class Bill extends Base {
  constructor( props ) {
    super( props );
    this.page = Page;
    this.state = {
      type: 0,
      listBill: [],
      listBillSuccess: [],
      waiting: true
    };
  }

  componentDidMount() {

  }

  async creatSetUpBill( note = '' ) {
    const { user } = this.props;
    const date = new Date();
    note = note || In18.NormalTitle.brokenCar;
    const firestoreBill = firestore().collection( 'Bill' );
    firestoreBill.add( {
      sdtUser: user.sdt,
      sdtWoker: '',
      date: date,
      note: note,
      status: '0'
    } );
  }

  async creatBill( note = '' ) {
    const { user, waiting } = this.props;
    if ( waiting ) {
      const date = new Date();
      note = note || In18.NormalTitle.brokenCar;
      const firestoreBill = firestore().collection( 'Bill' );
      await firestoreBill.add( {
        sdtUser: user.sdt,
        sdtWorker: '',
        date: date,
        note: note,
        status: '0'
      } ).then( () => this.setState( { waiting: false } ) );
    } else {
      this.creatBill();
    }
  }

  render() {
    const Template = this.view;
    return (
      <Template
        title={In18.TitleBtn.login}
        noFooter
        props={this.props}
        func={this}
        state={this.state}
        showBtnBack={false}
      />
    );
  }
}
const mapStateToProps = ( state ) => ( {
  menuFooterRedux: state.menuFooterRedux,
  user: state.user
} );

const mapDispatchToProps = ( dispatch ) => ( {
  setUser: bindActionCreators( ActionStore.setUser, dispatch )
} );
export default connect( mapStateToProps, mapDispatchToProps )( Bill );
// export default Login;
