import React from 'react'
import { View, TouchableOpacity, Image, Text, ScrollView, FlatList } from 'react-native'
import styles from './style'
import Img from '../../assets/index';

const page = (p) => {
  const { listQuality, lisstWorker } = p.state
  const rederQuality = ({ item }) => {
    console.log(item)
    return (
      <TouchableOpacity style={styles.containerQuality}>
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

  return (
    <View style={styles.container}>
      <ScrollView >
        <Text>Chức năng</Text>
        <View>
        </View>
        <View>
          <Text>Xếp hạng uy tín</Text>
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
      </ScrollView>

    </View>

  )
}
export default page
const Items = (props) => {
  const { items } = props
}