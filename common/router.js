import React, { PureComponent, Component } from 'react'
import { Router, Actions, Scene } from 'react-native-router-flux';
import Base from '../container/BaseContainer'
import Login from '../screen/Login/index'
import Profile from '../screen/Profile/index'
import Regitster from '../screen/Register/index'
import Home from '../screen/Home/index'
import { Provider } from 'react-redux';
import Search from '../screen/Search/index'
 import InfoWorker from '../screen/InfoWorker/index'
const scenes = key => {
    const transitionConfig = 0.5;
    return Actions.create(
      <Scene key="root" transitionConfig={transitionConfig} hideNavBar hideTabBar>
        <Scene key="login" component={Login} title="Đăng nhập" initial={true} />
        <Scene key="profile" component={Profile} title="Thông tin cá nhân"  />
        <Scene key="register" component={Regitster} title="Đăng ký" />
        <Scene key="home" component={Home} title="Trang chủ" />
        <Scene key="search" component={Search} title="Tìm kiếm thợ" />
        <Scene key="infoWorker" component={InfoWorker} title="Tìm kiếm thợ" />

      </Scene>,
    );
  };
export default scenes