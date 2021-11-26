import React from 'react';
import Base from '../../container/BaseContainer';
import In18 from '../../common/constans';
import Page from './page';
import { Alert } from 'react-native';
import { Router, Actions, Scene } from 'react-native-router-flux';
import User from '../../modals/User'
// import firestore from '@react-native-firebase/firestore';
class Profile extends Base {
  constructor(props) {
    super(props);
    this.page = Page;
    this.state = {
      sdt: '0387373405',
      pass: '1',
      name: '',
      address: '10 a/1, Bình đngs, Bình hào, thuận An, Bình Dương',
      img: '',
      isWorker: false
    };
  }
  async componentDidMount() {
    var users = new User()
    await this.setState({
      sdt: users.getSDT(),
      pass: users.getPass(),
      name: users.getName(),
      address: users.getAddress(),
      img: users.getImage(),
    })
  }
  onPressSave = async (type) => { 
    var user =new User()
    if (type === '0') {
      console.log(this.state.name)
    }
    if (type === '1') {
      this.setState({ ...this.state, sdt: context });
    }
    if (type === '2') {
      this.setState({ ...this.state, pass: context });
    }
    if (type === '3') {
      this.setState({ ...this.state, address: context });
    }
  };

  onChangeText = (type, context) => {
    if (type === '0') {
      this.setState({ ...this.state, name: context });
    }
    if (type === '1') {
      this.setState({ ...this.state, sdt: context });
    }
    if (type === '2') {
      this.setState({ ...this.state, pass: context });
    }
    if (type === '3') {
      this.setState({ ...this.state, address: context });
    }
  };
  onChangeImgAvatar = (value) => {
    this.setState({ ...this.state, txtSDT: value });
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
export default Profile;
