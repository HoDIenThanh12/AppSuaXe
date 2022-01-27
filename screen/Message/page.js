import React from 'react';
import {
  View, TouchableOpacity, Image, TextInput
} from 'react-native';
import styles from './style';
import Img from '../../assets/index';

const page = ( p ) => {
  const { txtSDT, txtPass } = p.state;
  const { onPressLogin, onChangePassword, onChangeSDT } = p.state;

  return (
    <View>
      <Image
        style={styles.imageLogin}
        source={Img.Image.worker}
      />
    </View>
  );
};
export default page;
