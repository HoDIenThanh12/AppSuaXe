import React from 'react';
import { Alert } from 'react-native';
import { Router, Actions, Scene } from 'react-native-router-flux';
import User from 'modals/User';
import database from '@react-native-firebase/database';
import store from 'react-native-simple-store';
import Userss from 'modals/Users';
import Base from '../../container/BaseContainer';
import In18 from '../../common/constants';
import Page from './page';

// import firestore from '@react-native-firebase/firestore';

class Login extends Base {
  constructor( props ) {
    super( props );
    this.page = Page;
    this.state = {
      txtSDT: '0387373405',
      txtPass: '1',
    };
  }

  async componentDidMount() {
    // console.log('====================================');
    // console.log('bắt đầu load');
    // console.log('====================================');
    // await database().ref('/User/').push().set({
    //   emails: 'hjcbfhs',
    // })
    //   .then((data) => {
    //     console.log('data', data);
    //   })
    //   .catch((error) => {
    //     console.log('error', error);
    //   });
    const usser = Userss.user;
    usser.setName( 'thanh' );
    // await usser.write();
    // await usser.setReduxLocal()
    // await usser.getReduxLocal();
    // if (store.get('id')) {
    //   store.get('user').then((value) => {
    //     console.log('=========value=usser================');
    //     console.log(usser);
    //     console.log('====================================');
    //   });
    // }
    // await database()
    //   .ref('/users/123')
    //   .on('value', (snapshot) => {
    //     console.log('User data: ', snapshot.val());
    //   });
    const firebase = await database().ref( '/User/' );
    // await firebase.push({
    //   usser,
    // });
  }

  pus = async () => {
    const reference = database().ref( '/User/' );
    await reference.set( {
      name: 'Ada Lovelace',
      age: 31,
    } );
  }

  onPressLogin = async () => {
    Actions.home();
    // const kt = new User();
    // const i = await kt.Login(
    //   this.state.txtSDT.toString(),
    //   this.state.txtPass.toString(),
    // );

    // i > 0 ? Actions.home() : Alert.alert(In18.Error.noLogin);
  };

  onChangePassword = ( value ) => {
    const p = this.state;
    this.setState( { p, txtPass: value } );
  };

  onChangeSDT = ( value ) => {
    this.setState( { ...this.state, txtSDT: value } );
  };

  render() {
    const Template = this.view;
    const other = Userss.user;
    console.log( other );
    // other.setName('thanh');
    console.log( other );
    const others = Userss.getInStance();
    console.log( others );
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
export default Login;
