import React from 'react';
import { Alert } from 'react-native';
import { Router, Actions, Scene } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import ActionStore from 'reduxs/Action/ActionStore';
import { connect } from 'react-redux';
import { getListWorkerNear } from 'modals/function';
import User from 'modals/User';
import Base from '../../container/BaseContainer';
import In18 from '../../common/constants';
import Page from './page';
// import firestore from '@react-native-firebase/firestore';
class Search extends Base {
  constructor( props ) {
    super( props );
    this.page = Page;
    this.state = {
      list: [],
      type: 1,
      x: '0',
      y: '0',
      currentIndex: 0,
      listWorkerNear: [],
      listShow: [],
    };
  }

  async componentDidMount() {
    const { listWorker, listQualityWorker } = this.props;
    this.setState( {
      list: listQualityWorker,
      listWorkerNear: await getListWorkerNear( listWorker ),
    } );
  }

  onChangeType = async ( types ) => {
    const { listQualityWorker } = this.props;
    if ( types === 0 ) {
      this.setState( {
        list: listQualityWorker,
        currentIndex: 0,
        type: 0,
      } );
    } else {
      this.setState( {
        list: this.state.listWorkerNear,
        currentIndex: 1,
        type: 1,
      } );
    }
  };

  onPressInfoWorker = ( item ) => {
    Actions.infoWorker( { item } );
  };

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
        noHeader
      />
    );
  }
}
const mapStateToProps = ( state ) => ( {
  menuFooterRedux: state.menuFooterRedux,
  user: state.user,
  listWorker: state.listWorker,
  listQualityWorker: state.listQualityWorker,

} );

const mapDispatchToProps = ( dispatch ) => ( {
  setMenuFooter: bindActionCreators( ActionStore.setMenuFooter, dispatch ),
  setUser: bindActionCreators( ActionStore.setUser, dispatch ),
  setListWorker: bindActionCreators( ActionStore.setListWorker, dispatch ),
  setListQualityWorker: bindActionCreators( ActionStore.setListQualityWorker, dispatch ),
} );
export default connect( mapStateToProps, mapDispatchToProps )( Search );
// export default Search;
