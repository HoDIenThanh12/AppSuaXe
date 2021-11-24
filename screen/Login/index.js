import React from 'react';
import Base from '../../container/BaseContainer';
import In18 from '../../common/constans';
import Page from './page';
import {Alert} from 'react-native';
import {Router, Actions, Scene} from 'react-native-router-flux';
import User from '../../modals/User'

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
    var kt =User.getInstance();
    // kt.tesst
    // console.log(kt.test)
    Alert.alert()

    var ii =  kt.Login(this.state.txtSDT, this.state.txtPass)
    Alert.alert(ii)
    console.log('Lỗi')
    // Actions.profile()
    // i==='1'?Actions.profile():Alert.alert(In18.Error.noLogin)
  };

  onChangePassword = value => {
    const p=this.state
    this.setState({p, txtPass: value});
  };
  onChangeSDT = (value) => {
    this.setState({...this.state,txtSDT: value});
  };
  render() {
    var Template = this.view;
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
