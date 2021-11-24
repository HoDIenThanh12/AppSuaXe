import React from 'react';
import {StyleSheet} from 'react-native';
// import {height, width} from '../../common/styles'
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:0,
    paddingVertical:15,
    paddingHorizontal:20,
    borderColor:'red',
    borderWidth:1
    // position:'absolute',
  },
  footerItem: {
    display: 'flex',
    alignItems: 'center',
  },
  boxMenuInActive: {
    height:28,
    width: 28,
    padding: 2.5
  },
  img:{
      height: 30,
      width: 30,
      padding:10
  }
});
export default styles
