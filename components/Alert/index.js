import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { height, width } from 'common/styles';
import Image from 'components/Image';
import Img from 'assets/index';
import Button from 'components/Button';

export default function index( props ) {
  const {
    type, fucClose, description, style, stylesText,
  } = props;
  const url = type === 'error' ? Img.Image.error : Img.Image.success;
  return (
    <View style={[styles.container, style]}>
      <View style={styles.containerButton}>
        <Button icon={Img.Image.conBtnTopClose} onPress={fucClose}/>
      </View>
      <Image url={url} style={styles.image}></Image>
      <Text style={[styles.text, stylesText]}>{description}</Text>
    </View>
  );
}
const styles = StyleSheet.create( {
  container: {
    padding: 10,
    justifyContent: 'center',
  },
  containerButton: {
    alignSelf: 'flex-end',
  },
  image: {
    height: height( 7 ),
    width: height( 7 ),
    margin: 10,
  },
  text: {
    alignSelf: 'center',
    fontSize: 16,
  },
} );
