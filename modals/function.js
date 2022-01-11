import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import store from 'react-native-simple-store';
import firestore from '@react-native-firebase/firestore';
import In18 from 'common/constants';

const firestores = firestore().collection( 'User' );
export const checkStore = async ( key, data ) => {
  if ( await store.get( key ) ) {
    await store.update( key );
  } else {
    await store.push( key, data );
  }
};
export const setStoreLocal = ( user ) => {
  checkStore( 'user', user );
};
export const Register = async ( _sdt, _name, _address, _checkWorker = 0, _pass ) => {
  const users = {
    name: _name,
    sdt: _sdt,
    address: _address,
    checkWorker: _checkWorker,
    x: '0',
    y: '0',
    image: '',
    pass: _pass,
    luotXem: '0',
  };
  console.log( '====================================' );
  console.log( 'đã vào' );
  await firestores
    .add( {
      name: _name,
      sdt: _sdt,
      address: _address,
      checkWorker: _checkWorker,
      x: '0',
      y: '0',
      image: '',
      pass: _pass,
      luotXem: '0',
    } )
    .then( ( user ) => {
      setStoreLocal( user );
    } );
};

export const SaveProfile = async ( idUser, type, text ) => {
  if ( type === '0' ) {
    try {
      await firestores.doc( idUser )
        .update( {
          name: text,
        } )
        .then( () => {
          Alert.alert( In18.Notification.successMessage );
        } );
    } catch ( error ) {

    }
  }
  if ( type === '1' ) {
    if ( text.length > 11 && text.length < 10 ) {
      Alert.alert( In18.War.numberPhoneFail );
    } else {
      try {
        await firestores.doc( idUser )
          .update( {
            name: text,
          } )
          .then( () => {
            Alert.alert( In18.Notification.successMessage );
          } );
      } catch ( error ) {

      }
    }
  }
  if ( type === '2' ) {
    try {
      await firestores.doc( idUser )
        .update( {
          name: text,
        } )
        .then( () => {
          Alert.alert( 'asgfdgh' );
        } );
    } catch ( error ) {

    }
  }
  if ( type === '3' ) {
    try {
      await firestores.doc( idUser )
        .update( {
          name: text,
        } )
        .then( () => {
          Alert.alert( 'asgfdgh' );
        } );
    } catch ( error ) {

    }
  }
};

export const getAllListWorker = async () => {
  const list = [];
  await firestores.get()
    .then( ( querySnapshot ) => {
      querySnapshot.forEach( ( documentSnapshot ) => {
        const datas = documentSnapshot.data();
        if ( datas.checkWorker === 1 ) {
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
          list.push( temp );
        }
        return list;
      } );
    } );
  return list;
};
export const getListWorkerQuality = ( list ) => {
  for ( let i = 0; i < ( list.length - 1 ); i++ ) {
    for ( let y = i + 1; y < ( list.length ); y++ ) {
      console.log( list[y].luotXem );
      if ( parseInt( list[i].luotXem, 10 ) < parseInt( list[y].luotXem, 10 ) ) {
        console.log( list[y].luotXem );
        const temps = list[i];
        list[i] = list[y];
        list[y] = temps;
      }
    }
  }
  return list;
};

export const Read = async () => {
  let i = 0;
  const func = database().ref( '/User/' );
  await func
    .on( 'value', ( snapshot ) => {
      snapshot.forEach( ( item ) => {
        console.log( item.key );
        if ( item.val().sdt === '0392225405' ) {
          const g = 1;
          i = g;
        }
      } );
    } );
  return i;
};
