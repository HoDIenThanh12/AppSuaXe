import React from 'react'
import Colors from '../../common/Colors';
import {StyleSheet} from 'react-native'
import TextInput from '../../components/textinput/index'
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor: 'red',
        width: '100%',
    },
    imgLoGo:{
        height:150,
        width:150,
        resizeMode: 'contain'
    },
    conatinerRegitster:{ 
        flexDirection:'row', 
        alignItems: 'center',
        marginLeft:'30%'
    },
    containerContext:{
       width: '80%', 
        paddingVertical: 0
    },
    textRegister:{
        color:'red',
        fontWeight:'bold',
    },
    btnRegister:{
        borderWidth:0
    }, 
})
export default styles