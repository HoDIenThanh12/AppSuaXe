import React from 'react';
import { Alert } from 'react-native';
import { Router, Actions, Scene } from 'react-native-router-flux';
import database from '@react-native-firebase/database';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllListWorker, getListWorkerQuality } from 'modals/function';
import ActionStore from 'reduxs/Action/ActionStore';
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
      listQuality: [],
    };
  }

  async componentDidMount() {
    const { setListWorker, setListQualityWorker } = this.props;
    const list = await getAllListWorker();
    this.setState( { listAll: list } );
    this.setState( { listQuality: getListWorkerQuality( list ) } );
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
        title={In18.NomalTitle.home}
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
  listWorker: state.listWorker,
} );

const mapDispatchToProps = ( dispatch ) => ( {
  setMenuFooter: bindActionCreators( ActionStore.setMenuFooter, dispatch ),
  setUser: bindActionCreators( ActionStore.setUser, dispatch ),
  setListWorker: bindActionCreators( ActionStore.setListWorker, dispatch ),
  setListQualityWorker: bindActionCreators( ActionStore.setListQualityWorker, dispatch ),
} );
export default connect( mapStateToProps, mapDispatchToProps )( Home );
