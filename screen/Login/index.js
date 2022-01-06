import React from 'react';
import { Alert } from 'react-native';
import { Router, Actions, Scene } from 'react-native-router-flux';
import User from 'modals/User';
import database from '@react-native-firebase/database';
import store from 'react-native-simple-store';
import Userss from 'modals/Users';
import { Read, getAllListWorker } from 'modals/function';
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
      checkUser: 10,
      list: [],
    };
  }

  getListWorkerQuality( list ) {

  }

  componentDidMount() {
    const l = getAllListWorker;
    console.log( '====================================' );
    console.log( l );
    console.log( '====================================' );
    const usser = Userss.getInStance();
    // // usser.setName( 'thanh' );
    Userss.getListWorkers().then( ( value ) => { console.log( value ); } );
    // const proMis = new Promise( ( success, error ) => {
    //   const l = usser.getListWorker();
    //   success( l );
    // } );

    // console.log( '=====this.state.list ======================' );
    // console.log( this.state.list );
    // console.log( '====================================' );

    // // await usser.read();
    // // await usser.Read();
    // // const { checkUser } = this.state;
    // const XX = usser.Read().then( ( value ) => { console.log( value ); } );
    // await this.setState( { ...this.state, checkUser: usser.Read() } );
    // this.setState( { checkUser: 100 } );
    // console.log( '====================================' );
    // const x = await usser.Read();
    // const { checkUser } = this.state;
    // await console.log( checkUser );
    // console.log( '====================================' );
    // // if(checkUser==)
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
    // const other = Userss.user;
    // console.log( other );
    // // other.setName('thanh');
    // console.log( other );
    // const others = Userss.getInStance();
    // console.log( others );
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
