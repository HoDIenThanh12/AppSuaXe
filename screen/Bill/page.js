import { View, Text } from 'react-native';
import React, { useState} from 'react';
import styles from './styles';
import {height, width, Colors} from 'common/styles'
import DropDownPicker from "react-native-dropdown-picker";
import Image from 'components/Image'
import Img from 'assets/index'
import In18 from 'common/constants'
export default function page( props ) {
  const {}
  const [items, setItems] = useState([
    { label: "Tat ca", value: -1 },
    {
      label: ,
      value: 1,
      icon: () => (
        <Image
          url={Img.Image.doing}
          style={styles.iconStyle}
        />
      ),
    },
    {
      label: "Chua Hoan Thanh",
      value: 0,
      icon: () => (
        <Image
          source={require("./assets/doing.png")}
          style={styles.iconStyle}
        />
      ),
    },
  ]);

  return (
    <View>
      <Text></Text>
    </View>
  );
}
