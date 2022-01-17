import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Image from 'components/Image';
import Img from 'assets/index';
import styles from './styles';

export default function Items( p ) {
  const { item, onPressInfoWorker } = p;
  const url = item.image ? item.image : Img.Image.imgAvatar;
  return (
    <TouchableOpacity onPress={onPressInfoWorker}>
      <View style={styles.containerWorkerDetail}>
        <Image url={url} http={item.image} style={styles.imgAvatarWorker} />

        <View style={styles.contentDetailDistance}>
          <Text style={[styles.textAll, styles.titleContentWorker]}>{item.name} </Text>
          <Text style={[styles.textAll, styles.numberPhoneDetailWorker]}>{item.sdt}</Text>
          <Text style={[styles.textAll, styles.viewContentWorker]}>Lượt xem: {item.luotXem} </Text>
          <Text style={[styles.textAll, styles.addressContentWorker]}>ĐC: {item.address} </Text>
          {/* <Text style={[styles.textAll, styles.addressContentWorker]}>ĐC: {address} </Text> */}

        </View>
        <View style={styles.containerFunction}>
          {/* <Image source={images[`${img ? null : 'menuSwitchNetwork'}`]} /> */}
        </View>
      </View>
    </TouchableOpacity>
  );
}
