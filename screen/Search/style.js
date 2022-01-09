import React from 'react'
import Colors from '../../common/Colors';
import {StyleSheet} from 'react-native'
import TextInput from '../../components/TextInput/index'
import { height, width } from '../../common/styles'

const styles = StyleSheet.create({ 
    containerView:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'blue',
        // flex:1
    },  
    container:{
        flex:1, 
        justifyContent:'center', 
    },
    flatList:{
        marginTop:height(5),
        height:height(65),
        width:width(90)
    },
    option:{
        justifyContent:'center',
        flexDirection:'row',

    } ,
    textAll: {
        paddingVertical: 5
      },
      containerWorkerDetail: {
        flexDirection: 'row',
        // marginTop: 5,
        backgroundColor: Colors.WHITE,
        paddingVertical: 5,
        paddingBottom: 10,
        borderRadius: 20,
        marginBottom:10
      },
      imgAvatarWorker: {
        height: height(12),
        padding: 5,
        width: width(15),
        alignItems: 'center',
        marginTop: height(1.3) ,
        resizeMode: 'contain',
        marginHorizontal:12
      }  ,
      titleContentWorker: {
        fontWeight: 'bold',
        color: Colors.BLACK
      },
      viewContentWorker: {
        color: Colors.BORDER_BOX,
        fontSize: height(1.5)
      },
      addressContentWorker: {
        color: Colors.RED,
        fontSize: height(1.5),
        width:width(60)
        // textAlign:'right'
      },
})
export default styles
