import React from 'react';
import {
  Share, Linking, Image, Platform, Alert,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import database from '@react-native-firebase/database';

export const Login = async () => {

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
