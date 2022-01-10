import React from 'react';
import { Alert } from 'react-native';
import { Router, Actions, Scene } from 'react-native-router-flux';
import User from 'modals/Users';
import database from '@react-native-firebase/database';
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
      list: [],
      listQuality: [],
    };
  }

  user = User.getInStance();

  async getListWorkerQuality( list = [] ) {
    if ( list.length > 0 ) {
      for ( let i = 0; i < ( list.length - 1 ); i++ ) {
        for ( let y = i + 1; y < ( list.length ); y++ ) {
          if ( parseInt( list[i].luotXem, 10 ) < parseInt( list[y].luotXem, 10 ) ) {
            console.log( list[y].luotXem );
            const temps = list[i];
            // eslint-disable-next-line no-param-reassign
            list[i] = list[y];
            list[y] = temps;
          }
        }
      }
      this.setState( { listQuality: list } );
    }
  }

  async componentDidMount() {
    const l = await User.getAllListWorker();
    this.setState( { list: await User.getAllListWorker() } );
    await this.getListWorkerQuality( l );
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
      />
    );
  }
}
export default Home;
