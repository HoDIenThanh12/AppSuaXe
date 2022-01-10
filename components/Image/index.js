import React, from 'react'
import { View, Image , styleSheet} from "react-native";
import {width, height} from 'common/styles'
const Images=(p)=> {
  const{ 
    url,
    style,
    styleImage
  }=p
  return (
    <View style={[styles.container, style]}>
      <Image style={[styles.styleImage,styleImage]} source={url} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding:10
  },
  styleImage:{
    width: width(10),
    height: width(10)
  }
})
export default  Images(p)

