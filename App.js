import React, { PureComponent, Component } from 'react';
import {
  View, Text, Button, Alert,
} from 'react-native';
import { Router, Actions, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import Geolocation from 'react-native-geolocation-service';
import { createStore } from 'redux';
import scenes from './common/router';
import Login from './screen/Login/index';
import rootReducer from './redux/Reducer/index';

const store = createStore(rootReducer);
class Tex extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Th first 1</Text>
        <Button
          title="dang nhap"
          onPress={() => {
            Actions.home2({ names: 'Dien thanh', id: '123' });
          }}
        />
      </View>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initScreen: 'home',
    };
  }

  async componentDidMount() {
    // var gps
    // await Geolocation.getCurrentPosition(
    //   (position) => {
    //     gps =  JSON.stringify(position.coords);
    //     // Alert.alert(gps)
    //     console.log(position.coords.latitude + '  / ' + position.coords.longitude);
    //   },
    //   (error) => {
    //     // See error code charts below.
    //     console.log(error.code, error.message);
    //   },
    //   { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    // )
    // Alert.alert(gps['latitude'])
  }

  render() {
    return (
      //     <View>
      // <Tex></Tex>
      //     </View>
      <Provider store={store}>
        <Router scenes={scenes('home')} />
      </Provider>

    // <Provider>
    //   <Router scenes={scenes('home')} />
    // </Provider>
    );
  }
}
export default App;
