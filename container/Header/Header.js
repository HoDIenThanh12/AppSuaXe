import React from 'react'
import {View, TouchableOpacity, Image,Text} from 'react-native'
import Img from '../../assets/index'
import styles from '../Header/style'
const Header = props => {
  const {title, showBtnBack = true} = props;
  return (
    <View style={styles.container}>
      {showBtnBack ? (
        <TouchableOpacity>
          <Image source={Img.Icons.icBack} style={styles.rightBTN} onPress={() =>{}}/>
        </TouchableOpacity>
      ) : <Text/> }
      <Text style={styles.title}>{title}</Text>
      <Text> </Text>
    </View>
  );
};
export default Header;
