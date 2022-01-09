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

  getListWorkerQuality( list = [] ) {
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

  getAllListWorker() {
    firebase.on( ( snapshot ) => {
      const listWorker = [];
      snapshot.forEach( ( item ) => {
        if ( item.val().checkWorker === '1' ) {
          const temp = {
            id: item.key,
            sdt: item.val().sdt,
            name: item.val().name,
            x: item.val().x,
            y: item.val().y,
            address: item.val().address,
            luotXem: item.val().luotXem,
            luotGoi: item.val().luotGoi,
            pass: item.val().pass,
            img: item.val().img,
            checkWorker: item.val().checkWorker,
          };
          listWorker.push( temp );
        }
      } );
      this.setState( { list: listWorker } );
      this.getListWorkerQuality( listWorker );
    } );
  }

  componentDidMount() {
    this.getAllListWorker();
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
