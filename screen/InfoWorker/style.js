import React from 'react'
import Colors from '../../common/Colors';
import { StyleSheet } from 'react-native'
import { height, width } from 'common/styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width(90)
    },
    containerTest: {
        marginTop: height(0),
    },
    containerAvatar: {
        // display: 'flex',
        // backgroundColor: Colors.GRAY6,
        width: width(90),
        paddingVertical: 30
    },
    imgAvatar: {
        resizeMode: 'contain',
        height: height(15),
        width: width(90)
    },
    containerInfo: {
        flexDirection: 'row',
        width: width(90),
        justifyContent: 'space-between',
        // paddingHorizontal: 10,
        // backgroundColor: Colors.GRAY6,
        marginVertical: 10,
        // borderColor: Colors.BORDER_BOX,
        // // borderWidth: 1,
        borderRadius: 10,
        // // elevation: 6,
        backgroundColor: 'gainsboro',
        height:height(8),
        paddingVertical:5,
        paddingHorizontal:10,
        // justifyContent:'center',
        alignItems: 'center',
         // backgroundColor: Colors.GRAY6,

    },
    styleBtnTest: {
        width: width(34)
    },
    contentDetailLuotXem: {
        color: Colors.RED
      },
      contentDetailAddress:{
          width: width(50),
          textAlign:'right',
      },
      btnOption:{

      },
      styleBtnTest:{
          width: width(25),
        //   backgroundColor:'red',
      },
      containerTestBtn:{
          flexDirection:'row',
          height: height(8),
          justifyContent:'space-around'
      }
})
export default styles
