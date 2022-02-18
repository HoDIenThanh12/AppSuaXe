import React, { PureComponent, Component } from 'react';
import { Router, Actions, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import Base from '../container/BaseContainer';
import Login from '../screen/Login/index';
import Profile from '../screen/Profile/index';
import Regitster from '../screen/Register/index';
import Home from '../screen/Home/index';
import Search from '../screen/Search/index';
import InfoWorker from '../screen/InfoWorker/index';
import Screen1 from '../screen/test/screen1';
import Screen2 from '../screen/test/screen2';

const scenes = ( key ) => {
  const transitionConfig = 0.5;
  return Actions.create(
    <Scene key="root" transitionConfig={transitionConfig} hideNavBar hideTabBar>
      <Scene key="login" component={Login} title="Đăng nhập" />
      <Scene key="profile" component={Profile} title="Thông tin cá nhân" />
      <Scene key="register" component={Regitster} title="Đăng ký" />
      <Scene key="home" component={Home} title="Trang chủ" />
      <Scene key="search" component={Search} title="Tìm kiếm thợ" />
      <Scene key="screen2" component={Screen2} title="Tìm kiếm thợ" />

      <Scene key="infoWorker" component={InfoWorker} title="Thông tin thợ" />
      <Scene key="screen2" component={Screen2} title="Tìm kiếm thợ" />
    </Scene>
  );
};
export default scenes;
