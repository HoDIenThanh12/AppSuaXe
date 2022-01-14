import React from 'react';
import { View, Text } from 'react-native';
import In18 from 'common/constants';
import TextInput from 'components/TextInput';
import DropDownPicker from 'react-native-dropdown-picker';

export default function SetupCaculate() {
  return (
    <View>
      <Text>{In18.Notification.date}: </Text>
      <View>
        <Text>{In18.Notification.date}: </Text>
        <TextInput></TextInput>
      </View>
      <View>
        <Text>{In18.Notification.note}: </Text>
      </View>
      <View>
        <Text> </Text>
      </View>
    </View>
  );
}
