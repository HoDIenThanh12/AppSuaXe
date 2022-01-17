import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { width, height } from 'common/styles';

const Images = ( p ) => {
  const {
    url,
    style,
    http = null,
  } = p;
  const urlHttp = http || null;
  return (
    <View >
      {
        urlHttp
          ? <Image style={[styles.styleImage, style]} source={{ uri: http }} />
          : <Image style={[styles.styleImage, style]} source={url} />
      }
    </View>

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
