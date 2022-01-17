import React, { useEffect, useState } from 'react';
import {
  View, FlatList, Image, Text, TouchableOpacity, Alert, ScrollView,
} from 'react-native';
import { Router, Actions, Scene } from 'react-native-router-flux';
import Geolocation from 'react-native-geolocation-service';
import TextInput from 'components/TextInput/index';
import styles from './style';
import Img from '../../assets/index';
import In18 from '../../common/constants';
import Button from '../../components/btn/index';
import Items from './components/Items';

const page = ( p ) => {
  const { list, currentIndex } = p.state;
  const { onPressInfoWorker, onChangeType } = p.func;
  const [y, sety] = useState( 0 );
  const [x, setx] = useState( 0 );
  const render = ( { item } ) => (
    <Items item={item} onPressInfoWorker={() => onPressInfoWorker( item )}/>
  );
  const listOptions = [
    {
      name: In18.Options.near,
    },
    {
      name: In18.Options.quality,
    },
  ];
  const RenderOptions = ( props ) => {
    const { itemOptions, indexOptions } = props;
    return (
      <TouchableOpacity onPress={() => onChangeType( indexOptions )}>
        <View style={styles.containerOptions}>
          <Text style={currentIndex === indexOptions ? styles.nameOptions : styles.nameUnOptions}>{`${itemOptions.name}`}</Text>
          <View style={currentIndex === indexOptions ? styles.lineOptions : {}}/>
        </View>
      </TouchableOpacity>

    );
  };
  return (
    <View style={styles.container} >
      <View>
        <View style={styles.option}>
          {
            listOptions.map( ( item, index ) => <RenderOptions itemOptions={item} indexOptions={index}></RenderOptions> )
          }
        </View>
      </View>
      <View style={styles.flatList}>
        <FlatList
          data={list}
          keyExtractor={( item ) => item.id}
          renderItem={render}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
        </FlatList>
      </View>
    </View>
  );
};
export default page;
