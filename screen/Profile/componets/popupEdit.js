import React from 'react';
import { View, Text } from 'react-native';
import Button from 'components/btn/index';
import TextInput from 'components/TextInput/index';
import In18 from 'common/constants';
import styles from './styles';

export default function popupEdit( props ) {
  const {
    nameTextOld, textOld, onChangText, onSave, onClose,
  } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{In18.NomalTitle.edit}</Text>
      <Text style={styles.decription}>{nameTextOld} : {textOld}</Text>
      <TextInput
        placeholder={In18.NomalTitle.new}
        onChangeText={onChangText}
        style={styles.styleInput}
        noIcon={true}
      >
      </TextInput>
      <View style={styles.containerButton}>
        <Button onPress={onClose} styleBtn={styles.buttonClose} title={In18.TitleBtn.close}></Button>
        <Button onPress={onSave} styleBtn={styles.buttonSave} title={In18.TitleBtn.submit}></Button>

      </View>
    </View>
  );
}
