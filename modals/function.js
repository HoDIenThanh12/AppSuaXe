import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import store from 'react-native-simple-store';
import firestore from '@react-native-firebase/firestore';
import In18 from 'common/constants';
import storage from '@react-native-firebase/storage';

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
export const getStoreLocal = async ( key ) => {
  let user = null;
  if ( store.get( key ) ) {
    user = await store.get( key );
  }
  return user;
};
export const setStoreLocalDetails = async ( type, data ) => {
  const datas = await getStoreLocal( 'user' );
  const user = datas[0];
  if ( type === 1 ) {
    user.name = data;
  }
  if ( type === 2 ) {
    user.sdt = data;
  }
  if ( type === 3 ) {
    user.pass = data;
  }
  if ( type === 4 ) {
    user.address = data;
  }
  if ( type === 5 ) {
    user.x = data;
  }
  if ( type === 6 ) {
    user.y = data;
  }
  if ( type === 7 ) {
    user.image = data;
  }
  if ( type === 9 ) {
    user.checkWorker = !user.checkWorker;
  }
  await checkStore( 'user', user );
};

export const Register = async ( _sdt, _name, _address, _checkWorker = 0, _pass ) => {
  const users = {
    name: _name,
    sdt: _sdt,
    address: _address,
    checkWorker: `${_checkWorker}`,
    x: '0',
    y: '0',
    image: '',
    pass: _pass,
    luotXem: '0'
  };
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
      luotXem: '0'
    } )
    .then( ( user ) => {
      setStoreLocal( users );
      Alert.alert( 'thanhf cong' );
    } );
};
export const getDistance = ( xUser = '0', yUser = '0', xWoker, yWoker ) => {
  const x1 = parseInt( xUser, 10 );
  const x2 = parseInt( xWoker, 10 );
  const y1 = parseInt( yUser, 10 );
  const y2 = parseInt( yWoker, 10 );
  const reslt = ( ( Math.sqrt( ( x1 - x2 ) ** 2 + ( y1 - y2 ) ** 2 ) ) / 1000 ).toFixed( 2 );
  return `${reslt}m`;
};
export const SaveProfile = async ( idUser, type, text ) => {
  // eslint-disable-next-line no-shadow
  const getNameType = ( type, text ) => {
    if ( type === 1 ) {
      return { name: text };
    }
    if ( type === 2 ) {
      return { sdt: text };
    }
    if ( type === 3 ) {
      return { pass: text };
    }
    if ( type === 4 ) {
      return { address: text };
    }
    if ( type === 5 ) {
      return { x: text };
    }
    if ( type === 7 ) {
      return { image: text };
    }
    return { checkWorker: text };
  };
  const names = getNameType( type, text );
  try {
    if ( type === 2 ) {
      if ( text.length < 10 && text.length > 11 ) {
        Alert.alert( In18.War.numberPhoneFail );
      } else {
        await firestores.doc( idUser )
          .update( names )
          .then( () => {
            Alert.alert( In18.Notification.successMessage );
          } ).catch( ( err ) => console.log( { err } ) );
      }
    } else {
      await firestores.doc( idUser )
        .update( names )
        .then( () => {
          Alert.alert( In18.Notification.successMessage );
        } );
    }
  } catch ( error ) {
    console.log( { err } );
  }
};

export const getAllListWorker = async ( xUser, yUser ) => {
  const list = [];
  await firestores.get()
    .then( ( querySnapshot ) => {
      querySnapshot.forEach( ( documentSnapshot ) => {
        const datas = documentSnapshot.data();
        if ( datas.checkWorker == 1 ) {
          const distances = getDistance( xUser, yUser, datas.x, datas.y );
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
            distance: distances
          };
          list.push( temp );
        }
        return list;
      } );
    } );
  return list;
};
export const getListWorkerQuality = async ( list ) => {
  for ( let i = 0; i < ( list.length - 1 ); i++ ) {
    for ( let y = i + 1; y < ( list.length ); y++ ) {
      if ( parseInt( list[i].luotXem, 10 ) < parseInt( list[y].luotXem, 10 ) ) {
        const temps = list[i];
        list[i] = list[y];
        list[y] = temps;
      }
    }
  }
  return list;
};
export const getListWorkerNear = ( list ) => {
  for ( let i = 0; i < ( list.length - 1 ); i++ ) {
    for ( let y = i + 1; y < ( list.length ); y++ ) {
      if ( list[i].distance > list[y].distance ) {
        const temps = list[i];
        list[i] = list[y];
        list[y] = temps;
      }
    }
  }
  return list;
};

export const getLinkImage = async ( selectedImage ) => {
  const fileName = selectedImage.substring(
    selectedImage.lastIndexOf( '/' ) + 1
  );
  let url = '';
  const ref = storage().ref( `Anh/${fileName}` );
  const task = ref.putFile( selectedImage );
  task.then( async () => {
    url = await ref.getDownloadURL();
    return url;
  } );
  return url;
};
export const getLisBill = async ( sdtUser ) => {
  const list = [];
  await firestores.get()
    .then( ( querySnapshot ) => {
      querySnapshot.forEach( ( documentSnapshot ) => {
        const datas = documentSnapshot.data();
        if ( datas.checkWorker == 1 ) {
          const distances = getDistance( xUser, yUser, datas.x, datas.y );
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
            distance: distances
          };
          list.push( temp );
        }
        return list;
      } );
    } );
  return list;
};
