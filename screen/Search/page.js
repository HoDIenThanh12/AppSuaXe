import React, { useEffect, useState } from 'react';
import {
  View, FlatList, Image, Text, TouchableOpacity, Alert, ScrollView,
} from 'react-native';
import { Router, Actions, Scene } from 'react-native-router-flux';
import Geolocation from 'react-native-geolocation-service';
import styles from './style';
import Img from '../../assets/index';
import TextInput from 'components/TextInput/index';
import In18 from '../../common/constants';
import Button from '../../components/btn/index';
import User from '../../modals/User';

const page = ( p ) => {
  const { list, type } = p.state;
  const { onPressInfoWorker, onChangeType } = p.func;
  const [y, sety] = useState( 0 );
  const [x, setx] = useState( 0 );
  const cacu = async ( x, y ) =>
  // var user = new User()
  // var xUser = 0
  // var yUser = 0
  // var distance=0
  // useEffect(() => {
  //   Geolocation.getCurrentPosition(
  //     position => {
  //       const {latitude, longitude} = position.coords;
  //       sety(latitude)
  //       setx(longitude)
  //       distance= Math.sqrt(( Math.pow((parseInt(latitude)-parseInt(xUser)), 2) + Math.pow((parseInt(longitude)-parseInt(yUser)), 2)))
  //       console.log(distance)
  //     },
  //     error => {
  //       console.log(error.code, error.message);
  //     },
  //     {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  //   );
  // }, []);  distance= Math.sqrt(( Math.pow((parseInt(x)-parseInt(xUser)), 2) + Math.pow((parseInt(y)-parseInt(yUser)), 2)))

    distance;
  const renderItemWorker = async ( { item } ) => {
    const {
      img, name, sdt, luotXem, address,
    } = item;
    // const distance =await cacu(x, y)
    // console.log(distance)
    return (
      <TouchableOpacity
        onPress={() => onPressInfoWorker( item )}
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
            {/* <Text style={[styles.textAll, styles.addressContentWorker]}>ĐC: {address} </Text> */}

          </View>
          <View>
            {/* <Image source={images[`${img ? null : 'menuSwitchNetwork'}`]} /> */}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container} >

      <View>
        <View style={styles.option}>
          <Button
            title='Gần bạn nhất'
            onPress={() => onChangeType( !type )}
          >
          </Button>
          <Text>       </Text>
          <Button
            title='Xem nhiều nhất'
            onPress={() => onChangeType( !type )}
          >
          </Button>
        </View>
      </View>
      <View style={styles.flatList}>
        <ScrollView>
          {
            list.map( ( item, index ) => <View>
              <TouchableOpacity
                onPress={() => onPressInfoWorker( item )}
                style={styles.containerWorker}
              >
                <View style={styles.containerWorkerDetail}>
                  <View style={styles.imgAvatarWorker}>
                    <Image source={Img.Image.imgAvatar} style={styles.imgAvatarWorker} />
                  </View>
                  <View style={styles.contentDetailDistance}>
                    <Text style={[styles.textAll, styles.titleContentWorker]}>{item.name} </Text>
                    <Text style={[styles.textAll, styles.numberPhonetDetailWorker]}>{item.sdt}</Text>
                    <Text style={[styles.textAll, styles.viewContentWorker]}>Lượt xem: {item.luotXem} </Text>
                    <Text style={[styles.textAll, styles.addressContentWorker]}>ĐC: {item.address} </Text>
                    {/* <Text style={[styles.textAll, styles.addressContentWorker]}>ĐC: {address} </Text> */}

                  </View>
                  <View>
                    {/* <Image source={images[`${img ? null : 'menuSwitchNetwork'}`]} /> */}
                  </View>
                </View>
              </TouchableOpacity>
            </View> )
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
