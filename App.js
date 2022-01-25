import React, { PureComponent, Component } from 'react';
import {
  View, Text, Button, Alert, PermissionsAndroid, Platform,
} from 'react-native';
import { Router, Actions, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import Geolocation from 'react-native-geolocation-service';
import { createStore } from 'redux';
import { ModalPortal } from 'react-native-modals';
import scenes from './common/router';
import Login from './screen/Login/index';
import rootReducer from './reduxs/Reducer/index';

const store = createStore( rootReducer );
// class Tex extends PureComponent {
//   constructor( props ) {
//     super( props );
//   }

//   render() {
//     return (
//       <View>
//         <Text>Th first 1</Text>
//         <Button
//           title="dang nhap"
//           onPress={() => {
//             Actions.home2( { names: 'Dien thanh', id: '123' } );
//           }}
//         />
//       </View>
//     );
//   }
// }

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      initScreen: 'home',
    };
  }

  async componentDidMount() {
    if ( Platform.OS === 'ios' ) {
      Geolocation.requestAuthorization();
      Geolocation.setRNConfiguration( {
        skipPermissionRequests: false,
        authorizationLevel: 'whenInUse',
      } );
    }

    if ( Platform.OS === 'android' ) {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  }

  render() {
    return (
      //     <View>
      // <Tex></Tex>
      //     </View>
      <Provider store={store}>
        <Router scenes={scenes( 'home' )} />

      </Provider>

    // <Provider>
    //   <Router scenes={scenes('home')} />
    // </Provider>
    );
  }
}
export default App;
