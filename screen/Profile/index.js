import React from 'react';
import { Alert } from 'react-native';
import { Router, Actions, Scene } from 'react-native-router-flux';
import store from 'react-native-simple-store';
import Base from '../../container/BaseContainer';
import In18 from '../../common/constants';
import Page from './page';
import User from '../../modals/User';
// import firestore from '@react-native-firebase/firestore';
class Profile extends Base {
  constructor( props ) {
    super( props );
    this.page = Page;
    this.state = {
      sdt: '0387373405',
      pass: '1',
      names: '',
      address: '10 a/1, Bình đngs, Bình hào, thuận An, Bình Dương',
      img: '',
      isWorker: false,
    };
  }

  async componentDidMount() {
    // eslint-disable-next-line no-underscore-dangle
    const users = User._user;
    store.get( 'user' ).then(
      ( res ) => console.log( res ), // ['milk']
    );
    await this.setState( {
      sdt: users.getSDT(),
      pass: users.getPass(),
      names: users.getName(),
      address: users.getAddress(),
      img: users.getImage(),
    } );
  }

  onPressSave = async ( type ) => {
    console.log( context );
    const user = new User();
    // if (type === '0') {
    //   this.setState({ ...this.state, name: context });
    // }
    // if (type === '1') {
    //   this.setState({ ...this.state, sdt: context });
    // }
    // if (type === '2') {
    //   this.setState({ ...this.state, pass: context });
    // }
    // if (type === '3') {
    //   this.setState({ ...this.state, address: context });
    // }
  };

  onChangeTexts = ( type, context ) => {
    console.log( context + type );
    if ( type === '0' ) {
      this.setState( { ...this.state, name: context } );
    }
    if ( type === '1' ) {
      this.setState( { ...this.state, sdt: context } );
    }
    if ( type === '2' ) {
      this.setState( { ...this.state, pass: context } );
    }
    if ( type === '3' ) {
      this.setState( { ...this.state, address: context } );
    }
  };

  onChangeImgAvatar = ( value ) => {
    this.setState( { ...this.state, txtSDT: value } );
  };

  render() {
    const Template = this.view;
    return (
      <Template
        title='Thông tin cá nhân'
        // noFooter
        props={this.props}
        func={this}
        state={this.state}
        showBtnBack={false}
      />
    );
  }
}
export default Profile;
