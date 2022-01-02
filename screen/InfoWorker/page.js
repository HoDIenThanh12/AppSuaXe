import React from 'react';
import {
  View, TouchableOpacity, Image, TextInput, ScrollView, Text,
} from 'react-native';
import styles from './style';
import Img from '../../assets/index';
import In18 from '../../common/constants';
import Buttons from '../../components/btn/index';

const page = (p) => {
  const { onPressSetup, onPressCall } = p.state;
  const { item } = p.props;
  const {
    name, sdt, img, address, luotXem,
  } = item;
  console.log(name);
  return (
    <View style={styles.container}>
      {/* // add new for test */}
      <ScrollView>
        <View style={styles.containerTest}>

          <View style={styles.containerAvatar}>
            <Image style={styles.imgAvatar} source={img || Img.Image.imgAvatar} />
          </View>
          <View style={styles.containerInfo}>
            <Text style={styles.titleContent}>Họ tên: </Text>
            <Text style={styles.contentDetail}>{name}</Text>
          </View>
          <View style={styles.containerInfo}>
            <Text style={styles.titleContent}>SDT: </Text>
            <Text style={styles.contentDetail}>{sdt}</Text>
          </View>
          <View style={styles.containerInfo}>
            <Text style={styles.titleContent}>Địa chỉ cố định: </Text>
            <Text style={styles.contentDetailAddress}>{address}</Text>
          </View>
          <View style={styles.containerInfo}>
            <Text style={styles.titleContent}>Lượt xem: </Text>
            <Text style={styles.contentDetailLuotXem}>{luotXem}</Text>
          </View>
          <View>
            <View style={styles.containerTestBtn}>
              <Buttons
                title='Đặt lịch bảo trì'
                onPress={() => {}}
              ></Buttons>
              <Buttons
                title={In18.TitleBtn.call}
                onPress={() => {}}
              />

            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default page;
