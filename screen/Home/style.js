import React from 'react'
import Colors from '../../common/Colors';
import {StyleSheet} from 'react-native'
import {height, width} from '../../common/styles'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width:width(90),  
    },
    containerQuality:{
        flexDirection:'row',
        width:width(75),
        height:height(18),
        backgroundColor:'#BEDFFF',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        marginRight:5,
        marginTop:5,
        marginBottom:5,
        padding:10,
    },
    detailQuality:{
        width:width(58), 
        elevation: 10,
        paddingLeft:10,
        alignItems: 'center',
        
    },  
    containerQualityDetail:{
        flexDirection:'row',
        // justifyContent:'space-between',
        alignItems:'center',
    },
    callQuantity:{ 
        borderColor:'red', 
    }, 
    titleQuality:{
        fontWeight:'bold',
        fontSize:height(2.2)
    },
    luotXemQuality:{
        color:'red'
    }, 
    addressQuality:{
        width:width(58), 
        numberLines:3, textAlign: 'center',
        paddingRight:10
    }, 
    icCallQuality:{
        height: 30,
        width: 30,
        padding:10
    }
})
export default styles