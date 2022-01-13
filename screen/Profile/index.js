import React from 'react';
import { Alert } from 'react-native';
import { Router, Actions, Scene } from 'react-native-router-flux';
import store from 'react-native-simple-store';
import User from 'modals/Users';
import { connect } from 'react-redux';
import ActionStore from 'reduxs/Action/ActionStore';
import Base from 'container/BaseContainer';
import { bindActionCreators } from 'redux';
import { SaveProfile } from 'modals/function';
import In18 from '../../common/constants';
import Page from './page';
import PopupEdit from './componets/popupEdit';

class Profile extends Base {
  constructor( props ) {
    super( props );
    this.page = Page;
    this.state = {
      sdt: '',
      pass: '1',
      names: '',
      address: '10 a/1, Bình đngs, Bình hào, thuận An, Bình Dương',
      img: '',
      isWorker: false,
      contentNew: '',
    };
  }

  async componentDidMount() {
    const { user } = this.props;
    this.setState( {
      sdt: user.sdt,
      names: user.name,
      address: user.address,
      imag: user.image,
      pass: user.pass,
    } );
  }

  onPressLogOut() {
    Actions.login();
  }

  onPressSave = async ( type ) => {
    // const user = new User();
    const { user } = this.props;
    const { contentNew } = this.state;
    if ( type === '0' ) {
      await SaveProfile( user.id, type, contentNew );
    }
    if ( type === '1' ) {

    }
    if ( type === '2' ) {

    }
    if ( type === '3' ) {

    }
  };

  onChangTextNew=( text ) => {
    this.setState( { ...this.state, contentNew: text } );
  }

  onOpenEdit=( type, nameTextOld, textOld ) => {
    this.openModal();
    // eslint-disable-next-line no-lone-blocks
    { this.popup = <PopupEdit
      nameTextOld={nameTextOld}
      textOld={textOld}
      onSave={() => this.onPressSave( type )}
      onChangText={this.onChangTextNew}
      onClose={this.closeModal}>

    </PopupEdit>; }
  }

  onChangeTexts = ( type ) => {
    console.log( '====================================' );
    console.log( { type } );
    console.log( '====================================' );
    // console.log( context + type );
    // if ( type === '0' ) {
    //   this.setState( { ...this.state, name: context } );
    // }
    // if ( type === '1' ) {
    //   this.setState( { ...this.state, sdt: context } );
    // }
    // if ( type === '2' ) {
    //   this.setState( { ...this.state, pass: context } );
    // }
    // if ( type === '3' ) {
    //   this.setState( { ...this.state, address: context } );
    // }
  };

  onChangeImgAvatar = ( value ) => {
    this.setState( { ...this.state, txtSDT: value } );
  };

  render() {
    const Template = this.view;
    return (
      <Template
        title='Thông tin cá nhân'
        // noFooter
        props={this.props}
        func={this}
        state={this.state}
        showBtnBack={false}
        noHeader
      />
    );
  }
}
const mapStateToProps = ( state ) => ( {
  menuFooterRedux: state.menuFooterRedux,
  user: state.user,
} );
const mapDispatchToProps = ( dispatch ) => ( {
  setMenuFooter: bindActionCreators( ActionStore.setMenuFooter, dispatch ),
  setUser: bindActionCreators( ActionStore.setUser, dispatch ),
} );
export default connect( mapStateToProps, mapDispatchToProps )( Profile );
// export default Profile;
