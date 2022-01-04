import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import store from 'react-native-simple-store';
import database from '@react-native-firebase/database';

class Users {
  static user = this.getInStance() || null

  id = '';

  sdt = '';

  name = '';

  pass = '';

  image = '';

  address = '';

  luotXem = 0;

  checkWorker = 0;

  x = 0;

  y = 0;

  addressNow = '';

  static getInStance() {
    if ( this.user === null ) {
      this.user = new Users();
    }
    return this.user;
  }

  constructor() {
    if ( this.user === null ) {
      this.user = new Users();
    }
  }

  async getReduxLocal() {
    if ( await store.get( 'user' ) ) {
      await store.get( 'user' ).then( ( user ) => { this.user = user; } );
    }
  }

  setReduxLocal = async ( user ) => {
    if ( await store.get( 'user' ) ) {
      console.log( '==setReduxLocal=======' );
      store.update( 'user', {
        user,
      } );
    } else {
      store.push( 'user', user );
    }
  }

  async regitster( name = '', std = '', pass = '', address = '', checkWorker = 0 ) {
    const firebase = await database().ref( '/User/' );
    const i = 0;
    await database()
      .ref( '/User/' )
      .on( 'value', ( snapshot ) => {
        console.log( 'User data: ', snapshot.val() );
      } );
    await firebase.push( {
      name,
      sdt: std,
      pass,
      address,
      checkWorker,
      x: '0',
      y: '0',
      luotXem: '0',
      img: '',
      luotGoi: '0',
    } );
  }

  // async Regitster( name, SDT, pass, address, checkWorker ) {
  //   if ( address == null ) { address = 'Việt nam'; }
  //   const check = checkWorker == true ? '1' : '0';
  //   const firestores = firestore().collection( 'User' );
  //   let i = 0;
  //   await firestores.get()
  //     .then( ( querySnapshot ) => {
  //       querySnapshot.forEach( ( documentSnapshot ) => {
  //         const datas = documentSnapshot.data();
  //         if ( datas.sdt === SDT ) {
  //           // eslint-disable-next-line no-plusplus
  //           i++;
  //           Alert.alert( 'Số điện thoại đã đăng ký !' );
  //         }
  //       } );
  //     } );
  //   if ( i === '0' ) {
  //     await firestores.add( {
  //       name,
  //       sdt: SDT,
  //       pass,
  //       image: '',
  //       x: '-1',
  //       y: '-1',
  //       checkWorker: check,
  //       luotXem: '0',
  //       address,
  //     } )
  //       .then( () => {
  //         Alert.alert( 'Đăng ký thành công' );
  //       } );
  //   }
  // }
  async read() {
    const i = 0;
    
    await database()
      .ref( '/User/' )
      .on( 'value', ( snapshot ) => {
        snapshot.forEach( ( key ) => {
          console.log( key.key );
        } );
      } );
  }

  async write() {
    // await console.log( '====================================' );
    // await console.log( 'đag thêmzxczx' );
    // await console.log( '====================================' );
    const firebase = await database().ref( '/User/' );
    await firebase.push( {
      sdt: '0392225405',
      pass: 'diencong',
      address: 'Bình Dương',
      img: '',
      luotXem: '0',
      x: '0',
      y: '0',
      checkWorker: '0',
      luotGoi: '0',
    } ).then( ( data ) => {

    } ).catch( ( error ) => {

    } );
  }

  setID( id ) {
    this.id = id;
  }

  getID() { return this.id; }

  setCheckWorker( checkWorker ) {
    this.checkWorker = checkWorker;
  }

  getCheckWorker() { return this.checkWorker; }

  async setName( name ) {
    this.name = name;
  }

  getName() { return this.name; }

  setSDT( sdt ) {
    this.sdt = sdt;
  }

  getSDT() { return this.sdt; }

  setPass( pass ) {
    this.pass = pass;
  }

  getPass() { return this.pass; }

  setImg( img ) {
    this.image = img;
  }

  getImg() { return this.image; }

  setAddress( address ) {
    this.address = address;
  }

  getAddress() { return this.address; }

  setAddressNow( addressNow ) {
    this.addressNow = addressNow;
  }

  getAddressNow() { return this.addressNow; }

  setX( x ) {
    this.x = x;
  }

  getX() { return this.x; }

  setY( y ) {
    this.y = y;
  }

  getY() { return this.y; }

  setLuotXem( lx ) {
    this.luotXem = lx;
  }

  getLuotXem() { return this.luotXem; }
}
export default Users;
