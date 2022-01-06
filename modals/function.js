import React, { useEffect, useState } from 'react';
import {
  Share, Linking, Image, Platform, Alert,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import database from '@react-native-firebase/database';

export const Login = async () => {

};
export const getAllListWorker = () => {
  const [list, setlist] = useState( [] );
  const l = [];
  const getListWorker = () => {
    const firebase = database().ref( '/User/' );
    firebase.on( 'value', ( snapshot ) => {
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
          l.push( temp );
          console.log( '=======l.push( item )======================' );
          console.log( l );
          console.log( '====================================' );
        }
      } );
    } );
    return l;
  };
  return new Promise( ( resolve, reject ) => {
    const ls = getListWorker();
    console.log( '==ls=============================' );
    console.log( ls );
    console.log( '====================================' );
    resolve( ls );
  } );
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
