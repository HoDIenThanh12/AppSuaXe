import React, { useState } from 'react';
import {
  View, Image, TouchableOpacity, Text,
} from 'react-native';
import { Router, Actions, Scene } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Img from '../../assets/index';
import styles from './style';
import In18 from '../../common/constants';
// ADD REDUX
import ActionStore from '../../reduxs/Action/ActionStore';

const Footer = ( props ) => {
  const onClickOptionMenu = ( value ) => {
    const { menuFooterRedux, setMenuFooter } = props;

    if ( value !== menuFooterRedux ) {
      if ( value === In18.Menu.HOME ) {
        Actions.home();
      }
      // if(value===In18.Menu.SEARCH){
      //   Actions.call()
      // }
      if ( value === In18.Menu.SEARCH ) {
        Actions.search();
      }
      if ( value === In18.Menu.PRO_FILE ) {
        Actions.profile();
      }
      console.log( menuFooterRedux );
      // setMenuFooter({page:value})
      console.log( menuFooterRedux );
      setMenuFooter( value );
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.footerItem} onPress={() => onClickOptionMenu( In18.Menu.HOME )}>
        <View style={styles.boxMenuInActive}>
          <Image source={Img.Image.icHome} style={styles.img} />
          {/* <Text>dshjfghds</Text> */}
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.footerItem} onPress={()=>onClickOptionMenu(In18.Menu.call)}>
        <View style={styles.boxMenuInActive}>
          <Image source={Img.Icons.icHome} style={styles.img} />
        </View>
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.footerItem} onPress={() => onClickOptionMenu( In18.Menu.SEARCH )}>
        <View style={styles.boxMenuInActive}>
          <Image source={Img.Image.icSearch} style={styles.img}/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem} onPress={() => onClickOptionMenu( In18.Menu.PRO_FILE )}>
        <View style={styles.boxMenuInActive}>
          <Image source={Img.Image.icProfile} style={styles.img}/>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const mapStateToProps = ( state ) => ( {
  menuFooterRedux: state.menuFooterRedux,
} );

const mapDispatchToProps = ( dispatch ) => ( {
  setMenuFooter: bindActionCreators( ActionStore.setMenuFooter, dispatch ),
} );
export default connect( mapStateToProps, mapDispatchToProps )( Footer );
// export default Footer
