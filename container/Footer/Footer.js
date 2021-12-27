import React, { useState} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Img from '../../assets/index';
import styles from '../Footer/style';
import In18 from '../../common/constans'
import { Router, Actions, Scene } from 'react-native-router-flux';
// ADD REDUX
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ActionStore from '../../redux/Action/ActionStore'

const Footer = props => { 
  const onClickOptionMenu=(value)=>{
    const {menuFooterRedux,setMenuFooter}=props
    
    if(value!=menuFooterRedux){
      if(value===In18.Menu.home){
        Actions.home() 
      }
      if(value===In18.Menu.call){
        Actions.call() 
      }
      if(value===In18.Menu.search){ 
        Actions.search()
      }
      if(value===In18.Menu.profile){
        Actions.profile() 
      }
      console.log(menuFooterRedux)
      setMenuFooter({page:value})
      console.log(menuFooterRedux)
    }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.footerItem} onPress={()=>onClickOptionMenu(In18.Menu.home)}>
        <View style={styles.boxMenuInActive}>
          <Image source={Img.Icons.icHome} style={styles.img} />
          {/* <Text>dshjfghds</Text> */}
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.footerItem} onPress={()=>onClickOptionMenu(In18.Menu.call)}>
        <View style={styles.boxMenuInActive}>
          <Image source={Img.Icons.icHome} style={styles.img} />
        </View>
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.footerItem} onPress={()=>onClickOptionMenu(In18.Menu.search)}>
        <View style={styles.boxMenuInActive}>
          <Image source={Img.Icons.icSearch} style={styles.img}/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem} onPress={()=>onClickOptionMenu(In18.Menu.profile)}>
        <View style={styles.boxMenuInActive}>
          <Image source={Img.Icons.icProfile} style={styles.img}/>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const mapStateToProps = (state) => ({
  menuFooterRedux: state.menuFooterRedux
})

const mapDispatchToProps = (dispatch) => {
  return {
    setMenuFooter: bindActionCreators(ActionStore.setMenuFooter, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
