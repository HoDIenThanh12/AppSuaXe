import React from 'react';
import { Alert, Platform, PermissionsAndroid } from 'react-native';
import { Router, Actions, Scene } from 'react-native-router-flux';
import database from '@react-native-firebase/database';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllListWorker, getListWorkerQuality } from 'modals/function';
import ActionStore from 'reduxs/Action/ActionStore';
import Geolocation from 'react-native-geolocation-service';
import Base from '../../container/BaseContainer';
import In18 from '../../common/constants';
import Page from './page';
// import User from '../../modals/User';
const firebase = database().ref( '/User/' );
class Home extends Base {
  constructor( props ) {
    super( props );
    this.page = Page;
    this.state = {
      listAll: [],
      listQuality: []
    };
  }

  async componentDidMount() {
    const {
      setListWorker, setListQualityWorker, user, setUser
    } = this.props;
    await Geolocation.getCurrentPosition(
      ( position ) => {
        const positions = position.coords;
        user.x = positions.latitude;
        user.y = positions.longitude;
        setUser( user );
      },
      ( error ) => {
        // See error code charts below.
        console.log( error.code, error.message );
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
    const list = await getAllListWorker( user.x, user.y );
    this.setState( { listAll: list } );
    this.setState( { listQuality: await getListWorkerQuality( list ) } );
    await setListWorker( list );
    await setListQualityWorker( await getListWorkerQuality( list ) );
  }

  onPressViewWorkerSort=() => {
    Actions.search( { types: 1 } );
  }

  onPressViewList=() => Actions.search()

  render() {
    const Template = this.view;
    return (
      <Template
        title={In18.NormalTitle.home}
        // noFooter
        props={this.props}
        func={this}
        state={this.state}
        showBtnBack={false}
        noHeader
      />
    );
  }
}
const mapStateToProps = ( state ) => ( {
  menuFooterRedux: state.menuFooterRedux,
  user: state.user,
  listWorker: state.listWorker
} );

const mapDispatchToProps = ( dispatch ) => ( {
  setMenuFooter: bindActionCreators( ActionStore.setMenuFooter, dispatch ),
  setUser: bindActionCreators( ActionStore.setUser, dispatch ),
  setListWorker: bindActionCreators( ActionStore.setListWorker, dispatch ),
  setListQualityWorker: bindActionCreators( ActionStore.setListQualityWorker, dispatch )
} );
export default connect( mapStateToProps, mapDispatchToProps )( Home );
