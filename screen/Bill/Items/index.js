import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import In18 from 'common/constants';
import Image from 'components/Image';
import Img from 'assets/index';
import styles from './styles';

export default function index( props ) {
  const { item, submit } = props;
  return (
    <View>
      <TouchableOpacity onPress={submit}>
        <View style={styles.containerItem}>
          <View>
            <View style={styles.containerItemDetail}>
              <Text>S{In18.User.numberCustomer}: </Text>
              <Text style={styles.sdtCustomer}>{item.sdtCustomer} : {item.sdt} </Text>
            </View>
            <View style={styles.containerItemDetail}>
              <Text style={styles.dateAndStatus}>{In18.NormalTitle.dateCall} : {item.date} </Text>
              <Text style={styles.dateAndStatus}> {item.date}</Text>
            </View>
            <View style={styles.containerItemDetail}>
              <Text>{In18.NormalTitle.statusWork} : </Text>
              {item.status === '1' ? (
                <Text style={[styles.dateAndStatus, styles.hoanThanh]}>
                  {In18.NormalTitle.success}
                </Text>
              ) : (
                <Text style={[styles.dateAndStatus, styles.dangLam]}>
                  {In18.NormalTitle.doing}
                </Text>
              )}
            </View>
          </View>
          <View>
            {item.status == '1' ? (
              <Image
                style={styles.succes}
                url={Img.Image.iconSuccess}
              />
            ) : null}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
