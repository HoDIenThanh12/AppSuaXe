import React from 'react';
import {
  View, StyleSheet, Image, Text, ScrollView,
} from 'react-native';
import { Router, Actions, Scene } from 'react-native-router-flux';
import CheckBox from '@react-native-community/checkbox';
import User from 'modals/User';
import In18 from 'common/constants';
import styles from './style';
import Img from '../../assets/index';
import TextInput from '../../components/textinput/index';
import Button from '../../components/btn/index';
import Userss from '../../modals/Users';

const page = ( p ) => {
  const {
    txtSDT,
    txtPass,
    txtPass2,
    txtAddress,
    isWorker,
    txtName,
  } = p.state;
  const {
    onPressRegister,
    onChangePassword,
    onChangeSDT,
    onChangePassword2,
    onChangeName,
    onChangeAddress,
    setisCheckWorker,

  } = p.func;
  const users = Userss.getInStance();
  console.log( '=====Userss.getInStance()=====================' );
  console.log( { users } );
  console.log( '====================================' );
  return (
    <View style={styles.container} >
      <ScrollView >
        <View style={{
          alignItems: 'center', paddingHorizontal: 30, justifyContent: 'center', paddingVertical: 10,
        }}>
          <View style={styles.containerLogo}>

            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                            ĐIỀN CÁC THÔNG TIN CẦN THIẾT
            </Text>
          </View>
          <View style={styles.containerContext}>
            <TextInput
              value={txtName}
              placeholder={In18.User.name}
              onChangeText={onChangeName}
            >
            </TextInput>
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

            <TextInput
              value={txtPass2}
              placeholder={In18.User.password2}
              onChangeText={onChangePassword2}
            >
            </TextInput>
            <TextInput
              value={txtAddress}
              placeholder={In18.User.address}
              onChangeText={onChangeAddress}
            >
            </TextInput>
          </View>
          <View style={styles.checkboxContainer}>
            <Text style={styles.label}>{In18.NomalTitle.questionWorker} </Text>
            <CheckBox
              onValueChange={() => setisCheckWorker( isWorker )}

              value={isWorker}
            />
          </View>

          <Button
            title={In18.TitleBtn.register}
            onPress={onPressRegister}
          >
          </Button>
          <View style={styles.conatinerRegitster}>
            <Text>{In18.NomalTitle.questionAccount}</Text>
            <Button
              title={In18.TitleBtn.login}
              onPress={() => Actions.login()}
              styleText={styles.textRegister}
              styleBTN={styles.btnRegister}
            ></Button>

          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default page;
