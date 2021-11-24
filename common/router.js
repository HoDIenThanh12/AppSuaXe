import React, { PureComponent, Component } from 'react'
import { Router, Actions, Scene } from 'react-native-router-flux';
import Base from '../container/BaseContainer'
import Login from '../screen/Login/index'
import Profile from '../screen/Profile/index'
import { Provider } from 'react-redux';

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
          // noHeader
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
  
const scenes = key => {
    const transitionConfig = 0.5;
    return Actions.create(
      <Scene key="root" transitionConfig={transitionConfig} hideNavBar hideTabBar>
        <Scene key="home" component={Login} title="Login" initial={true} />
        <Scene key="profile" component={Profile} title="Profile"  />
        {/* <Scene key="home2" component={Tex2} title="Home2" /> */}
      </Scene>,
    );
  };
export default scenes