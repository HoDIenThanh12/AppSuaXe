import React from 'react';
import { View, Text, Button } from 'react-native';
import { Router, Actions, Scene } from 'react-native-router-flux';
import User from './user';

export default function screen2() {
  const user = User.getInstance();
  return (
    <View>
      <Text> giá trị :</Text>
      <Text>{user.getName()} </Text>
      <Button title='trower ' onPress={() => Actions.pop()}></Button>
    </View>
  );
}
