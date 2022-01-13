import React from 'react';
import { Alert } from 'react-native';
import { Router, Actions, Scene } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import ActionStore from 'reduxs/Action/ActionStore';
import { connect } from 'react-redux';
import { getAllListWorker } from 'modals/function';
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
      type: 1,
      x: '0',
      y: '0',
    };
  }

  async componentDidMount() {
    // const { user } = this.props;
    // this.setState( {
    //   ...this.state,
    //   x: user.x,
    //   y: user.y,
    //   list: await getAllListWorker(),
    // } );
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
const mapStateToProps = ( state ) => ( {
  menuFooterRedux: state.menuFooterRedux,
  user: state.user,
} );

const mapDispatchToProps = ( dispatch ) => ( {
  setMenuFooter: bindActionCreators( ActionStore.setMenuFooter, dispatch ),
  setUser: bindActionCreators( ActionStore.setUser, dispatch ),
} );
export default connect( mapStateToProps, mapDispatchToProps )( Search );
// export default Search;
