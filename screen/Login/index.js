import React from 'react';
import Base from '../../container/BaseContainer';
import In18 from '../../common/constans';
import Page from './page';
import {Alert} from 'react-native';
import {Router, Actions, Scene} from 'react-native-router-flux';

class Login extends Base {
  constructor(props) {
    super(props);
    this.page = Page;
    this.state = {
      txtSDT: '',
      txtPass: '',
    };
  }
  onPressLogin = async () => {
    Alert.alert(this.state.txtSDT + ' - ' + this.state.txtPass);
  };

  onChangePassword = value => {
    this.setState({txtPass: value});
  };
  onChangeSDT = value => {
    this.setState({txtSDT: value});
  };
  render() {
    var Template = this.view;
    return (
      <Template
        title={In18.TitleBtn.login}
        noFooter={false}
        props={this.props}
        func={this}
        state={this.state}
      />
    );
  }
}
export default Login;
