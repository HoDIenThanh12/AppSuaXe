import React from 'react';
import { Alert } from 'react-native';
import { Router, Actions, Scene } from 'react-native-router-flux';
import Users from 'modals/Users';
import { Register } from 'modals/function';
import Base from '../../container/BaseContainer';
import In18 from '../../common/constants';
import Page from './page';
import User from '../../modals/User';
// import firestore from '@react-native-firebase/firestore';
class Regitster extends Base {
  constructor( props ) {
    super( props );
    this.page = Page;
    this.state = {
      txtSDT: '',
      txtPass: '',
      txtPass2: '',
      txtAddress: 'Việt Nam',
      isWorker: false,
      txtName: ''
    };
  }

  componentDidMount() {
  }

  onPressRegister = async () => {
    const {
      txtSDT, txtPass, txtPass2, txtAddress, txtName, isWorker
    } = this.state;
    const worker = isWorker ? '1' : 0;
    await Register( txtSDT, txtName, txtAddress, worker, txtPass );
    // _sdt, _name, _address, _checkWorker = 0, _pass
    // await users.Regitster( txtName, txtSDT, txtPass, txtAddress, worker );
  };

  onChangePassword = ( value ) => {
    this.setState( { ...this.state, txtPass: value } );
  };

  onChangeSDT = ( value ) => {
    this.setState( { ...this.state, txtSDT: value } );
  };

  onChangePassword2 = ( value ) => {
    this.setState( { ...this.state, txtPass2: value } );
  };

  onChangeName = ( value ) => {
    this.setState( { ...this.state, txtName: value } );
  };

  onChangeAddress = ( value ) => {
    this.setState( { ...this.state, txtAddress: value } );
  };

  setisCheckWorker = ( isWorker ) => {
    this.setState( { ...this.state, isWorker: !isWorker } );
  };

  render() {
    const Template = this.view;
    return (
      <Template
        title={In18.TitleBtn.register}
        noFooter
        props={this.props}
        func={this}
        state={this.state}
        showBtnBack={false}
      />
    );
  }
}
export default Regitster;
