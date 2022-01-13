import React from 'react';
import {
  View, TouchableOpacity, StyleSheet, Text,
} from 'react-native';
import { height } from 'common/styles';

const Button = ( props ) => {
  const {
    title, isDisable = false, styleText, styleBtn,
  } = props;
  return (
    <TouchableOpacity disabled={isDisable}
      style={styles.container}
      {...props}
    >
      <View style={[styles.containerText, styleBtn]}>
        <Text style={[styles.textButton, styleText]}>{title}</Text>

      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create( {
  container: {
    display: 'flex',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerText: {
    display: 'flex',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: 'orange',
    borderWidth: 1,
    height: height( 6 ),
  },
  textButton: {
    alignSelf: 'center',
  },
} );
export default Button;
