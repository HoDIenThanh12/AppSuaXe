import React from 'react';
import Base from '../../container/BaseContainer';
import In18 from '../../common/constans';
import Page from './page';
import { Alert } from 'react-native';
import { Router, Actions, Scene } from 'react-native-router-flux';
import User from '../../modals/User'
class Profile extends Base {
  constructor(props) {
    super(props);
    this.page = Page;
    this.user =User.getInstance()
    this.state = {
      type: 0,
      nameTile: 'Tên cũ',
      contextOld: '',
      newContext: '',
      img: this.user.getImage(),
      name: this.user.getName(),
      pass: this.user.getPass(),
      address: this.user.getAddress(),
      sdt: this.user.getSDT()
    };
  }
  onEditImg = async () => {

  };

  onPressEdit = async () => {
    const { type, newContext } = this.state
  };
  onChangeName = async (value) => {
    this.setState({...this.state, name: value,type: 0 });
    this.setState({ type: 0 });
  };
  onChangeSDT = async (value) => {
    this.setState({ sdt: value });
    this.setState({ type: 1 });
  };
  onChangePassword = async (value) => {
    this.setState({ pass: value });
    this.setState({ type: 2 });
  };
  onChangeAddress = async (value) => {
    this.setState({ address: value });
    this.setState({ type: 3 });
  };
  render() {
    var Template = this.view;
    return (
      <Template
        title={In18.TitleBtn.login}
        // noFooter
        props={this.props}
        func={this}
        state={this.state}
        showBtnBack={false}
      />
    );
  }
}
export default Profile;
