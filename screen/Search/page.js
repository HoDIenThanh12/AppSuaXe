import React, { useEffect, useState } from 'react';
import {
  View, FlatList, Image, Text, TouchableOpacity, Alert, ScrollView,
} from 'react-native';
import { Router, Actions, Scene } from 'react-native-router-flux';
import Geolocation from 'react-native-geolocation-service';
import TextInput from 'components/TextInput/index';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './style';
import Img from '../../assets/index';
import In18 from '../../common/constants';
import Button from '../../components/btn/index';
import User from '../../modals/User';

const page = ( p ) => {
  const { list, type } = p.state;
  const { onPressInfoWorker, onChangeType } = p.func;
  const [y, sety] = useState( 0 );
  const [x, setx] = useState( 0 );
  const [valueOption, setValueOption] = useState( 1 );
  const [itemOption, setitemOption] = useState( [
    { label: 'Tat ca', value: 0 },
    { label: 'Hoan Thanh', value: 1 },
    { label: 'Chua Hoan Thanh', value: 2 },
  ] );
  const [isOpenChuild, setisOpenChuild] = useState( false );

  return (
    <View style={styles.container} >

      <View>
        <View style={styles.option}>

          <DropDownPicker
            theme="DARK"
            placeholder="Tat ca"
            // loading={loading}
            open={isOpenChuild}
            value={valueOption}
            items={itemOption}
            setOpen={setisOpenChuild}
            setValue={setValueOption}
            setItems={setitemOption}
            onChangeValue={( type ) => {
              // SelectType( type );
            }}
            onPress={( open ) => console.log( 'was the picker open?', open )}
          >
          </DropDownPicker>
        </View>
      </View>
      <View style={styles.flatList}>
        <ScrollView>
          {
            list.map( ( item, index ) => {} )
          }
        </ScrollView>
        {/* <FlatList
          data={list}
          keyExtractor={item => item.id}
          renderItem={renderItemWorker}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
        </FlatList> */}
      </View>
    </View>
  );
};
export default page;
