import React from 'react';
import Base from '../../container/BaseContainer';
import In18 from '../../common/constants';
import Page from './page';
import {Alert} from 'react-native';
import {Router, Actions, Scene} from 'react-native-router-flux';
import User from '../../modals/User';
import Userss from '../../modals/Users'
// import firestore from '@react-native-firebase/firestore';
class Login extends Base {
  constructor(props) {
    super(props);
    this.page = Page;
    this.state = {
      txtSDT: '0387373405',
      txtPass: '1',
    };
  }
  onPressLogin = async () => {
    var kt = new User();
    var i = await kt.Login(
      this.state.txtSDT.toString(),
      this.state.txtPass.toString(),
    );

    i > 0 ? Actions.home() : Alert.alert(In18.Error.noLogin);
  };

  onChangePassword = value => {
    const p = this.state;
    this.setState({p, txtPass: value});
  };
  onChangeSDT = value => {
    this.setState({...this.state, txtSDT: value});
  };
  render() {
    var Template = this.view;
    const other = Userss.getInStance();
    console.log(other);
    other.setName('thanh')
    console.log(other);
    const others = Userss.getInStance();
    console.log(others);
    return (
      <Template
        title={In18.TitleBtn.login}
        noFooter
        props={this.props}
        func={this}
        state={this.state}
        showBtnBack={false}
      />
    );
  }
}
export default Login;
