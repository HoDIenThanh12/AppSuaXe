/**
 * @format
 */
// import './shim.js';
import { AppRegistry, Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import App from './App';
import Nhap from './screen/nhap';
import { name as appName } from './app.json';

messaging().onMessage( async ( remoteMessage ) => {
  Alert.alert( 'A new FCM message arrived!', JSON.stringify( remoteMessage ) );
} );
AppRegistry.registerComponent( appName, () => App );
