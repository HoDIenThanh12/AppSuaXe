import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Router, Actions, Scene } from 'react-native-router-flux';
// import Modal from 'react-native-modal';
import { IconButton } from 'react-native-paper';
import TextInput from 'components/TextInput/index';

import styles from './style';
import Img from '../../assets/index';
import In18 from '../../common/constants';
import Buttons from '../../components/btn/index';
import { height, width } from 'common/styles';

const page = ( p ) => {
  const {
    sdt, pass, names, address, img,
  } = p.state;

  const {
    onChangeTexts, onChangeImgAvatar, closePopups, onPressLogOut, onOpenEdit,
  } = p.func;

  const [isModals, setisModals] = useState( false );
  const subMit = ( types, nameTextOld, textOld ) => {
    onOpenEdit( types, nameTextOld, textOld );
  };
  const Texts = ( props ) => {
    console.log( props.style );
    const txt = props.state;
    return (
      <View style={styles.containerEdit}>
        <View style={styles.contentDetails}>
          <Text style={props.style}>
            <Text style={{ fontWeight: 'bold' }}>
              {props.nameConent}
            </Text>: {props.state} </Text>
          <IconButton
            icon="arrow-right-bold"
            // eslint-disable-next-line react/prop-types
            onPress={() => subMit( props.type, props.nameConent, props.state )}
          >
          </IconButton>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.containerAvatar}>
          {img ? (
            <Image style={styles.imgAvatart} source={Img.Image.img} />
          ) : (
            <Image style={styles.imgAvatart} source={Img.Image.imgAvatar} />
          )}
          <TouchableOpacity
            style={styles.iconEditAvatar}
            onPress={onChangeImgAvatar}>
            <Image style={styles.iconEditAvatar} source={Img.Image.iconEditImg} />
          </TouchableOpacity>
        </View>

        <View>
          <Texts nameConent='Tên' state={`${names}`} type={'0'} ></Texts>
          <Texts nameConent='SDT' state={sdt} type={'1'}></Texts>
          <Texts nameConent='Mật khẩu' state={pass} type={'2'} ></Texts>
          <Texts nameConent='Địa chỉ' state={address} type={'3'} style={styles.txtAddress}></Texts>
        </View>
        <View style={[styles.btnModal, styles.btnOption]}>
          <Buttons
            styleBtn={styles.styleBtnModal}
            title={In18.TitleBtn.history}
            onPress={() => setisModals( !isModals )}></Buttons>
          <Buttons
            title={In18.TitleBtn.logOut}
            styleBtn={styles.styleBtnModalSave}
            onPress={() => onPressLogOut()}></Buttons>
        </View>
      </ScrollView>
    </View>
  );
};
export default page;
