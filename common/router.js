import React, { PureComponent, Component } from 'react'
import { Router, Actions, Scene } from 'react-native-router-flux';
import Base from '../container/BaseContainer'
import Login from '../screen/Login/index'
import Profile from '../screen/Profile/index'
import Regitster from '../screen/Register/index'
import Home from '../screen/Home/index'
import { Provider } from 'react-redux';

 
const scenes = key => {
    const transitionConfig = 0.5;
    return Actions.create(
      <Scene key="root" transitionConfig={transitionConfig} hideNavBar hideTabBar>
        <Scene key="login" component={Login} title="Login" initial={true} />
        <Scene key="profile" component={Profile} title="Thông tin cá nhân"  />
        <Scene key="register" component={Regitster} title="Đăng ký" />
        <Scene key="home" component={Home} title="Trang chủ" />
      </Scene>,
    );
  };
export default scenes