import React, { useState, useCallback, useEffect } from 'react';
import {
  View, TouchableOpacity, Text, ScrollView, FlatList,
} from 'react-native';
import Image from 'components/Image/index';
import styles from './style';

const page = ( p ) => {
  const { url, text } = p.props;
  const { fuc } = p.func;

  return (
    <TouchableOpacity style={styles.container} onPress={fuc}>
      <Image url={url}/>
      <Text>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
export default page;
