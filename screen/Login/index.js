import React from 'react';
import { Alert, View } from 'react-native';
import { Router, Actions, Scene } from 'react-native-router-flux';
// import User from 'modals/User';
import database from '@react-native-firebase/database';
import store from 'react-native-simple-store';
import Users from 'modals/Users';
import { Read, getAllListWorker, setStoreLocal } from 'modals/function';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import Base from '../../container/BaseContainer';
import In18 from '../../common/constants';
import Page from './page';
import ActionStore from '../../redux/Action/ActionStore';

const firebase = database().ref( '/User/' );
class Login extends Base {
  constructor( props ) {
    super( props );
    this.page = Page;
    this.state = {
      txtSDT: '0387373405',
      txtPass: 'diencong',
      values: '0',
      saveLogin: false,
    };
  }

  async componentDidMount() {
    const { user } = this.props;
    // console.log( { user } );
    if ( user ) {
      this.setState( {
        txtSDT: user.sdt,
        txtPass: user.pass,
      } );
    }
    const u = await Users.getAllListWorker();
    console.log( '==u=============' );
    console.log( { u } );
  }
  g
  saveLogin() {
    this.setState( {
      ...this.state,
      saveLogin: true,
    } );
  }

  getTest() {
    firebase.get().then( ( value ) => {
      console.log( '====================================' );
      console.log( { value } );
      console.log( '====================================' );
    } );
  }

  onPressLogin = async () => {
    const { txtSDT, txtPass } = this.state;
    const { user, menuFooterRedux, setUser } = this.props;
    console.log( '====================================' );
    console.log( { txtSDT } );
    console.log( '====================================' );
    firebase.on( 'value', ( snapshot ) => {
      const listWorker = [];
      snapshot.forEach( ( item ) => {
        if ( item.val().sdt === txtSDT && item.val().pass === txtPass ) {
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
          setUser( temp );
          Actions.home();
        }
      } );
      Alert.alert( In18.Error.noLogin );
    } );
  };

  onChangePassword = ( value ) => {
    const p = this.state;
    this.setState( { p, txtPass: value } );
  };

  onChangeSDT = ( value ) => {
    this.setState( { ...this.state, txtSDT: value } );
  };

  render() {
    // return (
    //   <View>

    //   </View>
    // );
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
  user: state.user,
} );

const mapDispatchToProps = ( dispatch ) => ( {
  setMenuFooter: bindActionCreators( ActionStore.setMenuFooter, dispatch ),
  setUser: bindActionCreators( ActionStore.setUser, dispatch ),
} );
export default connect( mapStateToProps, mapDispatchToProps )( Login );
// export default Login;
