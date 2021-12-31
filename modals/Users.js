import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import store from 'react-native-simple-store';
import database from '@react-native-firebase/database';

class Users {
  static user = null

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
      // @ts-ignore
      this.user = new Users();
    }
    return this.user;
  }

  constructor() {
    if ( this.user === null ) {
      this.user = new Users();
    }
  }

  async regitster( name = '', std = '', pass = '', address = '', checkWorker = 0 ) {
    const firebase = await database().ref( '/User/' );
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

  async write() {
    const firebase = await database().ref( '/User/' );
    await firebase.set( {
      name: 'Ada Lovelace',
      age: 310,
    } ).then( ( data ) => {
      console.log( 'data ', data );
    } ).catch( ( error ) => {
      console.log( 'error ', error );
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
