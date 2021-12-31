import React from 'react';
import {
  View, TextInput, StyleSheet, Text,
  Dimensions, Platform, PixelRatio, StatusBar,
} from 'react-native';
import In18 from '../../common/constants';

const MYWIDTH = Dimensions.get('window').width;
const MYHEIGHT = Dimensions.get('window').height;
const width = (num) => PixelRatio.roundToNearestPixel(MYWIDTH * (num / 100));
const height = (num) => PixelRatio.roundToNearestPixel(MYHEIGHT * (num / 100));
const TextInputs = (props) => {
  const {
    placeholder, isDisable = false, style, icon = null,
  } = props;
  return (
    <View style={styles.all}>
      {
        icon
          ? <>
            <View style={styles.styleIcon}>
              <Text >sdhbfgh</Text>
            </View>
          </>
          : null
      }

      <TextInput
        placeholder={placeholder}
        {...props}
        // eslint-disable-next-line react-native/no-inline-styles
        style={[styles.container, style, { marginLeft: icon ? 10 : 0 }]}
      >
      </TextInput>

    </View>

  );
};
const styles = StyleSheet.create({
  all: {
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: 'orange',
    borderWidth: 1,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  styleIcon: {
    position: 'absolute',
  },
  container: {

    // width:width(90)
  },
  containerAll: {
    display: 'flex',
  },
});
export default TextInputs;
