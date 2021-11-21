import React from 'react'
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native'
import In18 from '../../common/constans';
const TextInput =(props)=>{
    const {placeholder, isDisable=false, style} = props
    return(
       <TextInput
       placeholder={placeholder}
       >

       </TextInput>
    )
}
const styles=StyleSheet.create({
    container: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default TextInput