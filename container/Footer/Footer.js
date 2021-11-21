import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Img from '../../assets/index';
import styles from '../Footer/style';

const Footer = props => {
  // const {menuFooter} = this.props
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.footerItem}>
        <View style={styles.boxMenuInActive}>
          <Image source={Img.Icons.icHome} style={styles.img} />
          {/* <Text>dshjfghds</Text> */}
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem}>
        <View style={styles.boxMenuInActive}>
          <Image source={Img.Icons.icHome} style={styles.img} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem}>
        <View style={styles.boxMenuInActive}>
          <Image source={Img.Icons.icSearch} style={styles.img}/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem}>
        <View style={styles.boxMenuInActive}>
          <Image source={Img.Icons.icProfile} style={styles.img}/>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Footer;
