import React, { PureComponent, Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { Router, Actions, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import Base from './container/BaseContainer'
import Geolocation from 'react-native-geolocation-service';
class Test extends Base {
  constructor(props) {
    super(props);
    this.page = Tex

  }
  onPress = () => {
    Actions.home2({ names: 'Dien thanh', id: '123' });
  }
  render() {
    const Template = this.view
    return (
      <Template
        title='homesdhfgh'
        //noHeader
        //  showBtnBack={false}
        fuc={this}
        props={this.props}
        state={this.state}
      >

      </Template>
    )
  }
}
const page = (p) => {
  const { txt } = p.props
  const { onPress } = p.func
  return (
    <View>
      <Text>{txt}</Text>
      <Button
        title="dang nhap"
        onPress={onPress}
      />
    </View>
  )
}
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
class Tex2 extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { names, id } = this.props;
    console.log(names + id);
    return (
      <View>
        <Text>Th fi 3 {names}</Text>
        <Button title="dang nhap" onPress={() => { }} />
      </View>
    );
  }
}
const scenes = key => {
  const transitionConfig = 0.5;
  return Actions.create(
    <Scene key="root" transitionConfig={transitionConfig} hideNavBar hideTabBar>
      <Scene key="home" component={Test} title="Home" initial={true} />
      <Scene key="home2" component={Tex2} title="Home2" />
    </Scene>,
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initScreen: 'home',
    };
  }
  async componentDidMount() {
    var gps
    await Geolocation.getCurrentPosition(
      (position) => {
        gps =  JSON.stringify(position.coords);
        // Alert.alert(gps) 

        console.log(position.coords.latitude + '  / ' + position.coords.longitude);
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
       
    );
    // Alert.alert(gps['latitude']) 

  }
  render() {

    return (
      <Router scenes={scenes('home')} />
      // <Provider>
      //   <Router scenes={scenes('home')} />
      // </Provider>
    );
    // <Router scenes={scenes('home')} />;
  }
}
export default App;
