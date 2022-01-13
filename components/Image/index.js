import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { width, height } from 'common/styles';

const Images = ( p ) => {
  const {
    url,
    style,
    styleImage,
  } = p;
  return (
    <Image style={[styles.styleImage, styleImage]} source={url} />
  );
};
const styles = StyleSheet.create( {
  container: {
    padding: 10,
  },
  styleImage: {
    width: width( 10 ),
    height: width( 10 ),
  },
} );
// eslint-disable-next-line no-undef
export default Images;
