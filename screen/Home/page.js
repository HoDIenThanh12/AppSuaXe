import React, { useState, useCallback, useEffect } from 'react'
import { View, TouchableOpacity, Image, Text, ScrollView, FlatList } from 'react-native'
import styles from './style'
import Img from '../../assets/index';
import In18 from '../../common/constants';
import { IconButton } from 'react-native-paper'
import {Router, Actions, Scene} from 'react-native-router-flux';

const page = (p) => {
  const { listQuality, listWorker } = p.state 
  const { onClickWorkQuality, 
    onClickWorkDetals,
    onPressViewWorkerSort,
    onPressViewList 
  } = p.func
  const [listBuild, setlistBuild] = useState([])
  const rederQuality = ({ item }) => {
   
    return (
      <TouchableOpacity style={styles.containerQuality} onPress={()=>Actions.infoWorker({item:item})} >
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
    )
  }
  const Texts = props => {
    console.log(props.style)
    var txt = props.state
    return (
      <View style={styles.containerEdit}>
        <View style={styles.contentDetails}>
          <Text style={[props.style]}>
            <Text style={{ fontWeight: 'bold' }}>
              {props.nameConent}
            </Text>
            : {props.state}
          </Text>
          <IconButton
            icon="arrow-right-bold"
            onPress={() => subMit(props.type)}
          >
          </IconButton>
        </View>
      </View>
    );
  };
  const cacu = (value) => {
    if ((parseInt(value) / 1000) >= 1) {
      console.log((parseInt(value) / 1000))
      return value * 0.001 + ' (km)'
    }
    return value + ' (m)'
  }
  const renderItemWorker = ({ item }) => {
    const { img, name, sdt, distance, luotXem, address } = item
    const val = cacu(distance)
    return (
      <TouchableOpacity
        onPress={()=>Actions.infoWorker({item:item})}
        style={[styles.containerWorker]}
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
    )
  }
  return (
    <View style={styles.container}>
      <ScrollView >
        <Text>Chức năng</Text>
        <View>
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
          data={Object.values(listQuality)}
          contentContainerStyle={{
            flexDirection: 'row',
          }}
          horizontal
          renderItem={rederQuality}
          keyExtractor={item => item.id}
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
        <FlatList
            data={Object.values(listWorker)} 
            renderItem={renderItemWorker}
            keyExtractor={item => item.id}
          >
          </FlatList>
        </View>
      </ScrollView>

    </View>

  )
}
export default page
const Items = (props) => {
  const { items } = props
}