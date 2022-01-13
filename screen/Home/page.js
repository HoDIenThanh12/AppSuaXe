import React, { useState, useCallback, useEffect } from 'react';
import {
  View, TouchableOpacity, Image, Text, ScrollView, FlatList, styleSheet,
} from 'react-native';
import { IconButton } from 'react-native-paper';
import { Router, Actions, Scene } from 'react-native-router-flux';
import styles from './style';
import Img from '../../assets/index';
import In18 from '../../common/constants';
import OptionFunctions from './components/optionFunction';

const page = ( p ) => {
  const { listQuality, listAll } = p.state;
  console.log( '====================================' );
  console.log( { listQuality } );
  console.log( '====================================' );
  const {
    onClickWorkQuality,
    onClickWorkDetals,
    onPressViewWorkerSort,
    onPressViewList,
  } = p.func;
  const [listBuild, setlistBuild] = useState( [] );
  const listOptions = [
    {
      title: In18.TitleBtn.call,
      image: Img.Image.imgCall,
    },
    {
      title: In18.TitleBtn.maintenance,
      image: Img.Image.worker,
    },
  ];
  const rederQuality = ( { item } ) => (
    <TouchableOpacity style={styles.containerQuality} onPress={() => Actions.infoWorker( { item } )} >
      <View style={styles.containerQualityDetail}>
        <View style={styles.detailQuality}>
          <Text style={styles.titleQuality}>Tên: {item.name}</Text>
          <Text>SDT :{item.sdt}</Text>
          <Text style={styles.addressQuality} numberOfLines={3}>Địa chỉ: {item.address}</Text>
          <Text style={styles.luotXemQuality}>lượt xem: {item.luotXem}</Text>
        </View>
        <View style={styles.callQuantity}>
          <Image source={Img.Image.imgCall} style={styles.icCallQuality} />
        </View>
      </View>
    </TouchableOpacity>
  );

  const cacu = ( value ) => {
    if ( ( parseInt( value ) / 1000 ) >= 1 ) {
      console.log( ( parseInt( value ) / 1000 ) );
      return `${value * 0.001} (km)`;
    }
    return `${value} (m)`;
  };
  const renderItemWorker = ( { item } ) => {
    const {
      img, name, sdt, distance, luotXem, address,
    } = item;
    const val = cacu( distance );
    return (
      <TouchableOpacity
        onPress={() => Actions.infoWorker( { item } )}
        style={styles.containerWorker}
      >
        <View style={styles.containerWorkerDetail}>
          <View style={styles.imgAvatarWorker}>
            <Image source={Img.Image.imgAvatar} style={styles.imgAvatarWorker} />
          </View>
          <View style={styles.contentDetailDistance}>
            <Text style={[styles.textAll, styles.titleContentWorker]}>{name} </Text>
            <Text style={[styles.textAll, styles.numberPhonetDetailWorker]}>{sdt}</Text>
            <Text style={[styles.textAll, styles.viewContentWorker]}>Lượt xem: {luotXem} </Text>
            <Text style={[styles.textAll, styles.addressContentWorker]}>ĐC: {address} </Text>
          </View>
          <View>
            {/* <Image source={images[`${img ? null : 'menuSwitchNetwork'}`]} /> */}
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Text>Chức năng</Text>
        <View style={styles.containerOption}>
          {
            listOptions.map( ( items, index ) => <OptionFunctions items={items} func={() => {}}></OptionFunctions> )
          }
        </View>
        <View style={styles.optionMenu}>
          <Text style={styles.titleOption}>{In18.Options.quality}</Text>
          <View style={styles.optionMenuDetail}>
            <Text >chi tết</Text>
            <IconButton
              icon="arrow-right-bold"
              onPress={() => onPressViewWorkerSort()}
            >
            </IconButton>

          </View>
        </View>
        <FlatList
          data={listQuality}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{
            flexDirection: 'row',
          }}
          horizontal
          renderItem={rederQuality}
          keyExtractor={( item ) => item.id}
        >
        </FlatList>
        <View style={styles.optionMenu}>
          <Text style={styles.titleOption}>{In18.List.listSearch}</Text>
          <View style={styles.optionMenuDetail}>
            <Text >chi tết</Text>
            <IconButton
              icon="arrow-right-bold"
              onPress={() => onPressViewList()}
            >
            </IconButton>

          </View>

        </View>

        <View>
          {/* <View style={{ display: 'flex' }}>
            <FlatList
              data={list}
              renderItem={( item ) => renderItemWorker( item )}
              keyExtractor={( item ) => item.key}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              scrollEnabled={false}
            >
            </FlatList>
          </View> */}

          <FlatList
            data={listAll}
            renderItem={( item ) => renderItemWorker( item )}
            keyExtractor={( item ) => item.id}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
          >
          </FlatList>
        </View>
      </ScrollView>
    </View>

  );
};
export default page;
