import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import In18 from 'common/constants';
import styles from './styles';

export default function index( props ) {
  const { item, submit } = props;
  return (
    <View>
      <TouchableOpacity onPress={submit}>
        <View style={styles.containerItem}>
          <View>
            <View style={styles.containerItemDetail}>
              <Text>SDT khach hang: </Text>
              <Text style={styles.sdtCustomer}>{item.sdtCustomer}</Text>
            </View>
            <View style={styles.containerItemDetail}>
              <Text style={styles.dateAndStatus}>Ngay goi: </Text>
              <Text style={styles.dateAndStatus}> {item.date}</Text>
            </View>
            <View style={styles.containerItemDetail}>
              <Text>Tinh trang: </Text>
              {item.status === '1' ? (
                <Text style={[styles.dateAndStatus, styles.hoanThanh]}>
                  Hoan thanh
                </Text>
              ) : (
                <Text style={[styles.dateAndStatus, styles.dangLam]}>
                  Dang lam
                </Text>
              )}
            </View>
          </View>
          <View>
            {item.status === '1' ? (
              <Image
                style={styles.succes}
                source={require( './assets/menuIconCheckSuccess.png' )}
              />
            ) : null}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
