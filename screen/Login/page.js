import React, { useEffect } from 'react';
import {
  View, StyleSheet, Image, Text, ScrollView,
} from 'react-native';
import Button from 'components/btn/index';
import { Router, Actions, Scene } from 'react-native-router-flux';
import { push } from 'react-native-simple-store';
import database from '@react-native-firebase/database';
import styles from './style';
import Img from '../../assets/index';
import TextInput from '../../components/textinput/index';
import In18 from '../../common/constants';

const page = (p) => {
  const { txtSDT, txtPass } = p.state;
  const {
    onPressLogin, onChangePassword, onChangeSDT, pus,
  } = p.func;

  // useEffect(get,[])
  const pushs = async () => {
    console.log('theem thanhf coong');
    const reference = database().ref('/User/');
    reference.push().set({
      name: 'houoiuoiu',
      pass: 'h9879078',
    });
  };
  return (
    <View style={styles.container} >
      <ScrollView >
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.containerLogo}>
            <Image
              style={styles.imgLoGo}
              source={Img.Image.worker}

            />
          </View>
          <View style={styles.containerContext}>
            <TextInput
              value={txtSDT}
              placeholder={In18.User.numberPhone}
              onChangeText={onChangeSDT}
              keyboardType='numeric'
            >
            </TextInput>
            <TextInput
              value={txtPass}
              placeholder={In18.User.password}
              onChangeText={onChangePassword}
            >
            </TextInput>
          </View>
          <View style={styles.conatinerRegitster}>
            <Text>{In18.NomalTitle.questionAccount}</Text>
            <Button
              title={In18.TitleBtn.register}
              // edit
              onPress={() => Actions.register()}
              styleText={styles.textRegister}
              styleBTN={styles.btnRegister}
            ></Button>
          </View>
          <Button
            title={In18.TitleBtn.login}
            onPress={onPressLogin}
          >
          </Button>
          <Button
            title="push dai"
            onPress={() => pushs()}
          >
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};
export default page;
