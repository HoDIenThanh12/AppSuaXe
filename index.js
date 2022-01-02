/**
 * @format
 */
import './shim.js';
import { AppRegistry } from 'react-native';
import App from './App';
import Nhap from './screen/nhap';
import { name as appName } from './app.json';

AppRegistry.registerComponent( appName, () => App );
