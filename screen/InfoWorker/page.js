import React from 'react';
import {
  View, TouchableOpacity, Image, TextInput, ScrollView, Text
} from 'react-native';
import Img from 'assets/index';
import In18 from 'common/constants';
import Buttons from 'components/Button/index';
import styles from './style';

const page = ( p ) => {
  // const { onPressSetup onPressCall } = p.func;
  const { time, setUpCaulate, note } = p.state;
  const { item } = p.props;
  const {
    name, sdt, img, address, luotXem
  } = item;
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerTest}>

          <View style={styles.containerAvatar}>
            <Image style={styles.imgAvatar} source={img || Img.Image.imgAvatar} />
          </View>
          <View style={styles.containerInfo}>
            <Text style={styles.titleContent}>{In18.User.name} : </Text>
            <Text style={styles.contentDetail}>{name}</Text>
          </View>
          <View style={styles.containerInfo}>
            <Text style={styles.titleContent}>{In18.User.numberPhone} : </Text>
            <Text style={styles.contentDetail}>{sdt}</Text>
          </View>
          <View style={styles.containerInfo}>
            <Text style={styles.titleContent}>{In18.User.fixedAddress} : </Text>
            <Text style={styles.contentDetailAddress}>{address}</Text>
          </View>
          <View style={styles.containerInfo}>
            <Text style={styles.titleContent}>{In18.User.numberView} : </Text>
            <Text style={styles.contentDetailLuotXem}>{luotXem}</Text>
          </View>
          <View>
            <View style={styles.containerTestBtn}>
              <Buttons
                title={In18.TitleBtn.setUpCaulate}
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
