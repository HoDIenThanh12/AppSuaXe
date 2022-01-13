import React from 'react';
import { Alert, View } from 'react-native';
import { Router, Actions, Scene } from 'react-native-router-flux';
// import User from 'modals/User';
import database from '@react-native-firebase/database';
import store from 'react-native-simple-store';
import storage from '@react-native-firebase/storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import ActionStore from '../../reduxs/Action/ActionStore';
import Base from '../../container/BaseContainer';
import In18 from '../../common/constants';
import Page from './page';

const firebase = database().ref( '/User/' );
const firestores = firestore().collection( 'User' );
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
    // await Register( '0123456789', 'ho dien cong', 'bình dương', 0, 'diencong' );
    const { user } = this.props;
    console.log( { user } );
  }

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

    const { user, setUser } = this.props;
    console.log( '====================================' );
    console.log( { setUser } );
    console.log( '====================================' );
    let i = 0;
    const list = [];
    await firestores.get()
      .then( ( querySnapshot ) => {
        querySnapshot.forEach( ( documentSnapshot ) => {
          const datas = documentSnapshot.data();
          if ( datas.sdt === txtSDT && datas.pass === txtPass ) {
            i = 1;
            const temp = {
              id: documentSnapshot.id,
              name: datas.name,
              sdt: datas.sdt,
              luotXem: datas.luotXem,
              x: datas.x,
              y: datas.y,
              address: datas.address,
              image: datas.image,
              pass: datas.pass,
              checkWorker: datas.checkWorker,
            };
            setUser( temp );
            Actions.home();
          }
          if ( i === 0 ) {
            Alert.alert( In18.Error.noLogin );
          }
        } );
      } );
    // console.log( '====================================' );
    // console.log( { txtSDT } );
    // console.log( '====================================' );
    // firebase.on( 'value', ( snapshot ) => {
    //   const listWorker = [];
    //   snapshot.forEach( ( item ) => {
    //     if ( item.val().sdt === txtSDT && item.val().pass === txtPass ) {
    //       const temp = {
    //         id: item.key,
    //         sdt: item.val().sdt,
    //         name: item.val().name,
    //         x: item.val().x,
    //         y: item.val().y,
    //         address: item.val().address,
    //         luotXem: item.val().luotXem,
    //         luotGoi: item.val().luotGoi,
    //         pass: item.val().pass,
    //         img: item.val().img,
    //         checkWorker: item.val().checkWorker,
    //       };
    //       setUser( temp );
    //       Actions.home();
    //       i = 1;
    //     }
    //   } );
    //   if ( i === 0 ) {
    //     Alert.alert( In18.Error.noLogin );
    //   }
    // } );
    // Actions.home();
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
