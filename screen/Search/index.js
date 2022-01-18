import React from 'react';
import { Alert } from 'react-native';
import { Router, Actions, Scene } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import ActionStore from 'reduxs/Action/ActionStore';
import { connect } from 'react-redux';
import { getAllListWorker } from 'modals/function';
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
    };
  }

  async componentDidMount() {
    const { listWorker } = this.props;
    this.setState( {
      list: listWorker,
    } );
  }

  onChangeType = async ( type ) => {
    const { listWorker } = this.props;
    if ( type === 0 ) {
      this.setState( {
        list: listWorker,
        currentIndex: 0,
      } );
    } else {
      this.setState( {
        list: listWorker,
        currentIndex: 1,
      } );
    }
  };

  onPressInfoWorker = ( item ) => {
    console.log( 'item====================' );
    console.log( { item } );
    console.log( '====================================' );
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
} );

const mapDispatchToProps = ( dispatch ) => ( {
  setMenuFooter: bindActionCreators( ActionStore.setMenuFooter, dispatch ),
  setUser: bindActionCreators( ActionStore.setUser, dispatch ),
  setListWorker: bindActionCreators( ActionStore.setListWorker, dispatch ),
  setListQualityWorker: bindActionCreators( ActionStore.setListQualityWorker, dispatch ),
} );
export default connect( mapStateToProps, mapDispatchToProps )( Search );
// export default Search;
